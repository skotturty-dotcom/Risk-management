import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050B14] text-white flex items-center justify-center p-6 text-center">
          <div className="max-w-md space-y-6 glass-panel p-8 rounded-3xl border border-teal-500/30 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold font-display">System Reload Required</h2>
              <p className="text-sm text-gray-300 font-medium">
                The application encountered a transient interface update. Click below to refresh.
              </p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="w-full py-3.5 rounded-xl bg-[#008579] hover:bg-[#00685E] text-white text-xs font-extrabold uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2 transition-all"
            >
              <RefreshCw className="w-4 h-4 text-[#FFB340]" />
              <span>Refresh Application</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
