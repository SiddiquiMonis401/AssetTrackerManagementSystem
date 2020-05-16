export default function LoggedReducers(state=0,action){
    switch(action.type){
        case 'loggedin':{
            return state+1;
        }
        default:{
            return state;
        }
    }
}