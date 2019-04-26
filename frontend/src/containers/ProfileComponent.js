
const mapStateToProps = function(state) {
    return {
      profile: state.user.profile,
      loggedIn: state.auth.loggedIn
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      onTodoClick: id => {
        dispatch(toggleLogin(id))
      }
    }
  }

  const LogUserIn = connect(
    mapStateToProps,
    mapDispatchToProps    
  )(ProfileConnect)
  
  export default LogUserIn