export interface AppConfig {
  provider: string;
  rootDir: string;
  buildOutDir: string;
}

export interface Program {
  command: string;
  description: string;
  example: string;
  action: (config: AppConfig) => unknown;
}
