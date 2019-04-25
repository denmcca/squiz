import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap';
import {
    IoIosPerson
} from 'react-icons/io';
import { connect } from 'react-redux'; 

class UserInfo extends Component {
    // constructor() {
    //     super();
    //     // the state stores the list of questions 
    //     this.state = {
    //         user: "John Doe"
    //     }
    // }
    render() {
        return (
            <ListGroup>
                <ListGroupItem>
                    <IoIosPerson />
                        {this.props.firstName} {this.props.lastName}
                </ListGroupItem>
            </ListGroup>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        firstName:state.rUser.firstName,
        lastName:state.rUser.lastName,
        email:state.rUser.email,
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        updateUser: (user) => dispatch({type:'UPDATE_USER',value:user}),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);