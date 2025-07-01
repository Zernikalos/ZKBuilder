# ZKBuilder

ZKBuilder is a set of internal tools designed for the Zernikalos Game Engine. Its primary purpose is to process and convert standard 3D model files into a custom, optimized format (`.zko`) used by the engine.

This repository is a monorepo managed with `pnpm` and contains the following core packages:

---

## Packages

### 1. `@zernikalos/zkbuilder` (Core Library)

This is the core JavaScript/TypeScript library that contains all the logic for asset processing.

**Core Responsibilities:**
- **Loading:** Ingests various 3D file formats (such as `gltf`, `obj`, `fbx`).
- **Parsing:** Analyzes and processes the geometry, materials, and structure of the loaded models.
- **Exporting:** Converts the parsed data into the custom `.zko` format, ready to be consumed by the Zernikalos Game Engine.

This library is intended to be used by other tools, primarily the `zkbuilder-cli`.

### 2. `@zernikalos/zkbuilder-cli` (Command-Line Interface)

This package provides a user-friendly command-line tool to interact with the `@zernikalos/zkbuilder` library, making it easy to convert assets from the terminal.

#### Usage

The CLI can be executed directly using `npx` without needing a global installation. The primary command structure is as follows:

```bash
npx @zernikalos/zkbuilder-cli -i <input-path> -f <input-format> -o <output-path>
```

**Arguments:**
- `-i, --input`: Path to the source 3D model file.
- `-f, --input-format`: The format of the input file (e.g., `gltf`, `obj`).
- `-o, --output`: Path where the resulting `.zko` file will be saved.

**Example:**

```bash
# Convert a .glb file into a .zko file
npx @zernikalos/zkbuilder-cli -i ./path/to/model.glb -f gltf -o ./path/to/output.zko
```

---

## Development

This is a `pnpm` workspace. Ensure you have `pnpm` installed.

1.  **Install dependencies:**
    ```bash
    pnpm install
    ```

2.  **Build all packages:**
    ```bash
    pnpm build
    ```

## Publishing

These packages are published privately to GitHub Packages.

1.  **Bump versions:**
    ```bash
    pnpm -r version <patch|minor|major>
    ```

2.  **Publish to GitHub Packages:**
    ```bash
    pnpm publish -r
    ```

---

## License

This project is open source and licensed under the [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/).
