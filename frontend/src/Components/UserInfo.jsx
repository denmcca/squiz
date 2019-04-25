import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap';
import {
    IoIosPerson
} from 'react-icons/io';
import { connect } from 'react-redux'; 
import {db} from '../firebase';

class UserInfo extends Component {
    componentDidMount() {
        var dbRef = db.ref("account/" + localStorage.getItem('user') + '/userInfo');
    }
    // constructor() {
    //     super();
    //     // the state stores the list of questions 
    //     this.state = {
    //         user: "John Doe"
    //     }
    // }
    render() {
        console.log(this.props.user.firstName);
        return (
            <ListGroup>
                <ListGroupItem>
                    <IoIosPerson />
                        {this.props.user.firstName} {this.props.user.lastName}
                </ListGroupItem>
            </ListGroup>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        firstName:state.rUser.user.firstName,
        lastName:state.rUser.user.lastName,
        email:state.rUser.user.email,
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        updateUser: (user) => dispatch({type:'UPDATE_USER',value:user}),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);