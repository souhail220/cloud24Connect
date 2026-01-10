import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-primary-dark dark:to-primary text-gray-800 dark:text-white p-4">
          <div className="bg-primary backdrop-blur-md border border-cyan-500/20 rounded-2xl p-8 max-w-lg w-full text-center shadow-2xl">
            <h1 className="text-3xl font-bold mb-4 text-red-400">Oops! Something went wrong.</h1>
            <p className="text-white mb-6">
              We encountered an unexpected error. Please try refreshing the page.
            </p>
            {this.state.error && (
               <details className="mt-4 mb-6 text-left bg-black/20 p-2 rounded-lg text-sm font-mono overflow-auto">
                 <summary className="cursor-pointer font-semibold mb-1">Error Details</summary>
                 <pre className="whitespace-pre-wrap break-words">{this.state.error.toString()}</pre>
               </details>
            )}
            <button
              className="bg-secondary-dark hover:bg-secondary text-white px-6 py-2 rounded-lg font-medium transition-colors"
              onClick={() => globalThis.location.reload()}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;