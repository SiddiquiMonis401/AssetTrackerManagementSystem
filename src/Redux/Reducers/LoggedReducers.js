export default function LoggedReducers(state={loggedIn:false},action){
    switch(action.type){
        case 'Log_in':{
            return {...state,loggedIn:true}
        }
        default:{
            return state;
        }
    }
}