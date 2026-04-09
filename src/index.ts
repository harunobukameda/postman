import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { RootService } from './services/root';

export * from './services/root';

export * from './http';
export { Environment } from './http/environment';

export class Fromspec {
  public readonly root: RootService;

  constructor(public config: SdkConfig) {
    this.root = new RootService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.root.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.root.baseUrl = environment;
  }

  set timeoutMs(timeoutMs: number) {
    this.root.timeoutMs = timeoutMs;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
