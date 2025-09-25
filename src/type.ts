export interface AppConfig {
  root: string;
  outDir: string;
}

export interface Program {
  command: string;
  description: string;
  example: string;
  action: (config: AppConfig) => unknown;
}
