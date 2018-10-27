import React from 'react';

// thanks to https://codepen.io/gaearon/pen/wqvxGa?editors=0010

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
      // log error messages to an error reporting service here
    }
    
    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <div className="errFrame">
            <h2 className="failMSG">Cancel my subscription 'cuz I don't need these issues.</h2>
            <span className="info">What went wrong?? click details to see more info</span>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      return this.props.children;
    }  
  }
  window.gm_authFailure = ()=>{alert("Please check your Google API key")}

  export default ErrorBoundary