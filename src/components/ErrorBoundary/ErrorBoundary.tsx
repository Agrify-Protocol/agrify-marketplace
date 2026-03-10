"use client";

import { Component, ReactNode } from "react";
import "./ErrorBoundary.css";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: undefined });
  };

  handleGoHome = (): void => {
    this.setState({ hasError: false, error: undefined });
    window.location.href = "/home";
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="error-boundary-container">
          <div className="error-boundary-content">
            <h1 className="error-boundary-heading">Something went wrong</h1>
            <p className="error-boundary-text">
              An unexpected error occurred. Please try again or contact support
              if the problem persists.
            </p>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <div className="error-boundary-error-box">
                <p className="error-boundary-error-message">
                  {this.state.error.message}
                </p>
              </div>
            )}
            <button
              className="error-boundary-button error-boundary-button-primary"
              onClick={this.handleGoHome}
            >
              Go to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
