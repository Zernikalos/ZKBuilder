import {Env, EnvSetup} from "../src/EnvSetup";

export function setupEnv() {
    EnvSetup.configureEnv(new BrowserEnv())
}

class BrowserEnv extends Env {

    private ogCreateImageBitmap: any;
    private ogRevokeURL: any;

    setup(): void {
        this.ogCreateImageBitmap = window.createImageBitmap
        window.createImageBitmap = undefined

        this.ogRevokeURL = URL.revokeObjectURL
        URL.revokeObjectURL = () => {}
    }

    clean(): void {
        window.createImageBitmap = this.ogCreateImageBitmap
        URL.revokeObjectURL = this.ogRevokeURL
    }

}