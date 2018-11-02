const initState ={
authError : null
}

const authReducer = (state = initState, action) => {
  
    switch(action.type){
        case 'LOGIN_SUCCES' : 
        console.log('LOGIN_SUCCES')
        return {
            ...state,
            authError : null
        
        }
        case 'LOGIN_ERROR' : 
        console.log('LOGIN_ERROR')
        return {
            ...state,
            authError : 'Login failed'

        }
        case 'SIGNOUT_SUCCES' : 
        console.log('SIGNOUT_SUCCES')
        return state

        case 'SIGNUP_ERROR' : 
        console.log('SIGNUP_ERROR')
        return {
            ...state,
            authError : action.err.message

        }
        case 'SIGNUP_SUCCES' : 
        console.log('SIGNUP_SUCCES')
        return {
            ...state,
            authError : null
        }
        
        default : 
           return state
    }
}

export default authReducer
