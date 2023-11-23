import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const withReactQuery =
  (...args: ConstructorParameters<typeof QueryClient>): React.HOC =>
  (Component) => {
    const queryClient = new QueryClient(...args);

    return (props) => {
      return (
        <QueryClientProvider client={queryClient}>
          <Component {...props} />
        </QueryClientProvider>
      );
    };
  };
