import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";

import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { Button, CssBaseline, Typography } from "@mui/material";

import theme from "./theme";
import App from "./App";

const container = document.getElementById("root") as HTMLElement;

export default function Main(): JSX.Element {
  const queryClient = new QueryClient();
  function refreshPage() {
    window.location.reload();
  }

  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ReactQueryDevtools initialIsOpen={false} />
          <ErrorBoundary
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20%",
                  alignContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Typography>Something went wrong</Typography>
                <Button
                  onClick={refreshPage}
                  variant="contained"
                  color="secondary"
                >
                  Refresh
                </Button>
              </div>
            }
          >
            <App />
          </ErrorBoundary>
        </ThemeProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  );
}

const root = createRoot(container);
root.render(<Main />);
