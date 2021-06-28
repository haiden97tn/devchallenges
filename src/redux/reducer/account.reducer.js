
const initialState = {

}

const myReducer = (state = initialState,action) => {
        switch(action.type){
            case 'account/login' : {
                return {...state}
            }
            default : return {...state}
        }
}

export default myReducer;