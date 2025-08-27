#!/usr/bin/env python3
"""
ZKBuilder Release Script
Automates the release process for pnpm workspace packages
"""

import argparse
import subprocess
import sys
import os
import re
from pathlib import Path


class Colors:
    """ANSI color codes for terminal output"""
    RED = '\033[0;31m'
    GREEN = '\033[0;32m'
    YELLOW = '\033[1;33m'
    BLUE = '\033[0;34m'
    NC = '\033[0m'  # No Color


def print_status(message):
    """Print status message with blue color"""
    print(f"{Colors.BLUE}[INFO]{Colors.NC} {message}")


def print_success(message):
    """Print success message with green color"""
    print(f"{Colors.GREEN}[SUCCESS]{Colors.NC} {message}")


def print_warning(message):
    """Print warning message with yellow color"""
    print(f"{Colors.YELLOW}[WARNING]{Colors.NC} {message}")


def print_error(message):
    """Print error message with red color"""
    print(f"{Colors.RED}[ERROR]{Colors.NC} {message}")


def run_command(command, check=True, capture_output=False):
    """Run shell command and return result"""
    try:
        result = subprocess.run(
            command, 
            shell=True, 
            check=check, 
            capture_output=capture_output,
            text=True
        )
        return result
    except subprocess.CalledProcessError as e:
        if check:
            print_error(f"Command failed: {command}")
            print_error(f"Error: {e}")
            sys.exit(1)
        return e


def check_directory():
    """Check if we're in the ZKBuilder workspace directory"""
    if not Path("package.json").exists() or not Path("pnpm-workspace.yaml").exists():
        print_error("This script must be run from the ZKBuilder workspace root directory")
        sys.exit(1)


def validate_version(version):
    """Validate version format X.Y.Z"""
    if not re.match(r'^[0-9]+\.[0-9]+\.[0-9]+$', version):
        print_error("Invalid version format. Use X.Y.Z (e.g., 0.1.0)")
        sys.exit(1)


def check_git_status():
    """Check if git working directory is clean"""
    result = run_command("git status --porcelain", check=False, capture_output=True)
    if result.stdout.strip():
        print_warning("Git working directory is not clean. Please commit or stash changes first.")
        print(result.stdout)
        response = input("Continue anyway? (y/N): ").strip().lower()
        if response not in ['y', 'yes']:
            print_error("Release cancelled")
            sys.exit(1)


def check_version_exists(version):
    """Check if version already exists as a tag"""
    result = run_command(f"git tag -l | grep -q 'v{version}'", check=False)
    if result.returncode == 0:
        print_error(f"Version v{version} already exists as a tag")
        sys.exit(1)


def get_current_versions():
    """Get current versions from all packages"""
    versions = {}
    
    # Root package
    try:
        with open("package.json", "r") as f:
            import json
            data = json.load(f)
            versions["root"] = data.get("version", "unknown")
    except Exception as e:
        print_warning(f"Could not read root package.json: {e}")
    
    # Workspace packages
    workspace_packages = ["packages/zkbuilder", "packages/zkbuilder-cli"]
    for pkg in workspace_packages:
        pkg_json = Path(pkg) / "package.json"
        if pkg_json.exists():
            try:
                with open(pkg_json, "r") as f:
                    data = json.load(f)
                    versions[pkg] = data.get("version", "unknown")
            except Exception as e:
                print_warning(f"Could not read {pkg}/package.json: {e}")
    
    return versions


def confirm_release(version, no_push):
    """Confirm release with user"""
    current_versions = get_current_versions()
    
    print()
    print_status("Current versions:")
    for pkg, ver in current_versions.items():
        print(f"  {pkg}: {ver}")
    
    print()
    print_status(f"New version for all packages: {version}")
    print()
    print_warning("This will:")
    print("  1. Update all package.json files to version {version}")
    print("  2. Create release commit")
    print("  3. Create git tag v{version}")
    
    if no_push:
        print("  4. [SKIP] Push changes (--no-push flag detected)")
        print_warning("This is a LOCAL release only. No CI/CD will be triggered.")
    else:
        print("  4. Push changes and tag to trigger CI/CD")
    
    print()
    response = input("Proceed with release? (y/N): ").strip().lower()
    if response not in ['y', 'yes']:
        print_error("Release cancelled")
        sys.exit(1)


def update_package_versions(version):
    """Update all package versions using npm"""
    print_status("Updating package versions...")
    
    # Use npm version with workspaces
    result = run_command(f"npm version {version} --workspaces --no-git-tag", capture_output=True)
    
    if result.returncode == 0:
        print_success("All package versions updated with npm")
        print(result.stdout)
    else:
        print_error("Failed to update package versions")
        print(result.stderr)
        sys.exit(1)


def create_release_commit(version):
    """Create release commit"""
    print_status("Creating release commit...")
    run_command("git add .")
    run_command(f'git commit -m "Release v{version}"')
    print_success("Release commit created")


def create_git_tag(version):
    """Create git tag"""
    print_status(f"Creating git tag v{version}...")
    run_command(f"git tag v{version}")
    print_success(f"Git tag v{version} created")


def push_changes(version, no_push):
    """Push changes and tag to remote"""
    if no_push:
        print_warning("Skipping push (--no-push flag detected)")
        return
    
    print_status("Pushing changes to remote...")
    run_command("git push origin main")
    print_success("Changes pushed to remote")
    
    print_status("Pushing tag to remote...")
    run_command(f"git push origin v{version}")
    print_success(f"Tag v{version} pushed to remote")


def main():
    """Main function"""
    parser = argparse.ArgumentParser(
        description="ZKBuilder Release Script for pnpm workspace",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python3 release.py 0.1.0                    # Full release with push
  python3 release.py 0.1.0 --no-push         # Local release only
  python3 release.py 1.0.0 --no-push         # Test release locally
        """
    )
    
    parser.add_argument(
        "version",
        help="Version to release (format: X.Y.Z)"
    )
    
    parser.add_argument(
        "--no-push",
        action="store_true",
        help="Skip pushing to remote repository (for local testing)"
    )
    
    args = parser.parse_args()
    
    # Validate inputs
    validate_version(args.version)
    
    # Check environment
    check_directory()
    check_git_status()
    check_version_exists(args.version)
    
    # Confirm release
    confirm_release(args.version, args.no_push)
    
    # Execute release steps
    try:
        update_package_versions(args.version)
        create_release_commit(args.version)
        create_git_tag(args.version)
        push_changes(args.version, args.no_push)
        
        print()
        print_success(f"Release v{args.version} completed successfully!")
        
        if args.no_push:
            print_warning("Remember to push manually when ready:")
            print(f"  git push origin main")
            print(f"  git push origin v{args.version}")
        
    except Exception as e:
        print_error(f"Release failed: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()