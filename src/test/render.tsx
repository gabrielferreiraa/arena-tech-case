import { theme } from "@/lib/theme";
import { render as testingLibraryRender } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

export function render(...args: Parameters<typeof testingLibraryRender>) {
  const [ui, options] = args;

  return testingLibraryRender(ui, {
    ...options,
    wrapper: ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
  });
}
