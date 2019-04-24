import React, { Component } from "react";
import {connect} from 'react-redux';

class AboutPage extends Component {
    render() {
        console.log('Rendering AboutPage: ' + this.props.isLoggedIn);
        return (
            <div>
                <span>
                    <p>
                        This is the about page...
                    </p>
                </span>
            </div>
        );
    }
}


export default AboutPage;