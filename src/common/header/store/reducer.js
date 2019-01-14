import *  as constans from './constans';
import { fromJS } from 'immutable';
const defaultState =fromJS( {
    focused: false,
    list:[],
    page :1 ,
    totalPage: 1
});
export default (state = defaultState , action  ) => {
    switch(action.type) {
        case constans.SEARCH_FORCUS : 
            return state.set('focused', true);
        case constans.SEARCH_BLUR : 
            return state.set('focused',false);
        case constans.CHANGE_LIST: 
            return state.set('list',action.data).set('totalPage',action.totalPage);
        default:
             return state;
    }
}