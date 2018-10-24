import React, {Component} from 'react';

class ErrorPage extends Component {
    state = {
        show: false,
        timeout: null
    }

    componentDidMount = () => {
        let timeout = window.setTimeout(this.showMessage, 1000);
        this.setState({timeout});
    }

    componentWillUnmount = () => {
        window.clearTimeout(this.state.timeout);
    }

    showMessage = () => {
        this.setState({show: true});
    }

    render = () => {
        return (
           <div>
                {this.state.show
                    ? (
                        <div>
                            <h1>Google Maps Has Issues</h1>
                            < p >
                                The Map was not able to pull data and appears to be disabled.
                            </p>
                        </div>
                    )
                    : (<div><h1>Loading</h1></div>)
            } </div>
        )
    }
}
export default ErrorPage;