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
    componentDidMount() 
    {
        // console.log("componentDidMount (UserInfo)");
        // db.ref("account/" + localStorage.getItem('user') + '/userInfo')
        //     .once('value')
        //     .then((snapshot) =>
        //     {
        //         this.props.setFirstName((snapshot.val() && snapshot.val().firstName || 'Anonymous'))
        //         this.props.setLastName((snapshot.val() && snapshot.val().lastName || 'Anonymous'))
        //     })
    };
    render() {
        console.log(this.props.firstName);
        console.log(this.props.lastName);
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
        setFirstName: (fname) => dispatch({type: 'SET_FNAME', value: fname}),
        setLastName: (lname) => dispatch({type: 'SET_FNAME', value: lname}),
        setEmail: (email) => dispatch({type: 'SET_EMAIL', value: email}),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);