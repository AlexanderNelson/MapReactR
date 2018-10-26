import React from 'react';
import ErrorPage from './error-page';

// import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";


// class ErrorBoundary extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { hasError: false };
//     }
  
//     componentDidCatch(error, info) {
//       // Display fallback UI
//       this.setState({ hasError: true });
//       // You can also log the error to an error reporting service
//     //   logErrorToMyService(error, info);
//     }
  
//     render() {
//       if (this.state.hasError) {
//         // You can render any custom fallback UI
//         return <h1>Something went wrong.</h1>;
//       }
//       return this.props.children;
//     }
//   }

//   export default ()=> (
//     <ErrorBoundary>
//       <MyMapComponent />
//     </ErrorBoundary>
//   )

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here
    }
    
    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <div>
            <h2>This has issues.</h2>
                    <ErrorPage/>

            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      // Normally, just render children
      return this.props.children;
    }  
  }
  export default ErrorBoundary