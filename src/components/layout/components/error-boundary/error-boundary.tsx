import * as React from 'react'
import {Props} from './types'
import {Button} from '@/components/common'

export class ErrorBoundary extends React.Component<Props> {
  public state = {error: false}

  public static getDerivedStateFromError() {
    return {error: true}
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Uncaught error: ', error, errorInfo)
  }

  public render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen grid place-content-center text-center">
          <h1 className="text-5xl font-bold">Unknown error occured</h1>
          <div className="mt-3 mb-6 text-xl">
            <p>We're so sorry for unexpected issues</p>
            <p>Please try to reload the page or come back later sometime</p>
          </div>
          <Button onClick={() => window.location.reload()} className="w-max mx-auto text-lg py-4 h-12">
            Reload Page
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}
