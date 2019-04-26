import React, { Component } from "react";

class PlaceHolderPage extends Component {
    render() {
        console.log('Rendering PlaceHolderPage: ' + this.props.isLoggedIn);
        return (
            <div>
                <span>
                    <p>Place holder:</p>
                    <p>
                        Create file then configure router.
                    </p>
                </span>
            </div>
        );
    }
}


export default PlaceHolderPage;