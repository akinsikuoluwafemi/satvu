import React, { useState, useEffect, ReactNode, FC } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

const ErrorBoundary: FC<ErrorBoundaryProps> = ({ children, fallback }) => {
  const [hasError, setHasError] = useState(false);

  const errorHandler = () => {
    setHasError(true);
  };

  useEffect(() => {
    window.addEventListener('error', errorHandler);

    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  if (hasError) {
    return <p>{fallback}</p>; // Render fallback UI
  }

  return <>{children}</>; // Render children if no error occurred
};

export default ErrorBoundary;
