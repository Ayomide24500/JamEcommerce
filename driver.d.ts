declare module "driver.js" {
  interface DriverOptions {
    opacity?: number;
    padding?: number;
    showButtons?: boolean;
    allowClose?: boolean;
  }

  interface Step {
    element: string;
    popover: {
      title: string;
      description: string;
      position: string;
    };
  }

  class Driver {
    constructor(options?: DriverOptions);
    defineSteps(steps: Step[]): void;
    start(): void;
  }

  export = Driver;
}
