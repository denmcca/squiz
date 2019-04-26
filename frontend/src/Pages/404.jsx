import React, { Component } from "react";

class PageNotFound extends Component {
    render() {
        console.log('Rendering PageNotFound: ' + this.props.isLoggedIn);
        return (
            <div>
                <span>
                    <p>404</p>
                    <p>
                        Page not found!
                    </p>
                </span>
            </div>
        );
    }
}


export default PageNotFound;