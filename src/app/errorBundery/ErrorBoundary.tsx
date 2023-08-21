import { PageError } from "pages/pageError"
import React, { ErrorInfo, Suspense } from "react"
interface ErrorBoundaryProps {
    children: React.ReactNode
}
interface ErrorBoundaryState {
    hasError: boolean
}


class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }
  
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  
  componentDidCatch(error: Error, errorInfo:ErrorInfo) {
    console.log(error, errorInfo)
  }
  
  render() {
    if (this.state.hasError) {
      return <Suspense fallback=""> <PageError /></Suspense>
    }
  
    return this.props.children 
  }
}

export default ErrorBoundary