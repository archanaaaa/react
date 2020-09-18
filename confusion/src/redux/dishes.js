import * as ActionTypes from './ActionTypes';

export const Dishes = (state = {
    isLoading : true,
    errmess : null,
    dishes : []
}, action) => {
    switch(action.type){
        case ActionTypes.DISHES_LOADING :
            return {...state, isLoading : true , errmess : null, dishes : [] } 
            //... is the spread operator that expands the state
            //statement creates(& makes changes to) new object from the state and returns that object 
        case ActionTypes.DISHES_FAILED :
            return {...state, isLoading : false , errmess : action.payload , dishes : [] } 

        case ActionTypes.ADD_DISHES:
            return {...state, isLoading : false , errmess : null, dishes : action.payload } 

        default:
            return state;
    }
}