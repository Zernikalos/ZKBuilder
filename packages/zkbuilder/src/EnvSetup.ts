
export abstract class Env {
    public abstract setup(): void;

    public abstract clean(): void;
}

export class EnvSetup {

    private static env: Env;

    public static configureEnv(env: Env) {
        EnvSetup.env = env;
    }

    public static setupEnv() {
        EnvSetup.env.setup();
    }

    public static cleanEnv() {
        EnvSetup.env.clean();
    }
}