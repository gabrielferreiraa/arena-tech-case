import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      white: string;
      gray: {
        100: string;
        200: string;
        300: string;
      },
    };
  }
}
