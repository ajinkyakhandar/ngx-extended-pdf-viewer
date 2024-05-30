export class NgxConsole {
  public static init() {
    if (!globalThis['ngxConsoleFilter']) {
      globalThis['ngxConsoleFilter'] = function (_level: string, _message: any): boolean {
        return true;
      };
    }
    if (!globalThis['ngxConsole']) {
      globalThis['ngxConsole'] = new NgxConsole();
    }
  }

  public log(message: any, reason?: any): void {
    if (globalThis['ngxConsoleFilter']('log', message)) {
      if (reason !== undefined) {
        console.log(message, reason);
      } else {
        console.log(message);
      }
    }
  }
  public error(message: any, reason?: any): void {
    if (globalThis['ngxConsoleFilter']('error', message)) {
      if (reason !== undefined) {
        console.error(message, reason);
      } else {
        console.error(message);
      }
    }
  }
  public warn(message: any, reason?: any): void {
    if (globalThis['ngxConsoleFilter']('warn', message)) {
      if (reason !== undefined) {
        console.warn(message, reason);
      } else {
        console.warn(message);
      }
    }
  }
}
