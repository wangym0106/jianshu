import *  as constans from './constans';
import { fromJS } from 'immutable';
const defaultState =fromJS( {
    focused: false,
    list:[]
});
export default (state = defaultState , action  ) => {
    if (action.type === constans.SEARCH_FORCUS) {
        return state.set('focused', true);
    }
    if (action.type === constans.SEARCH_BLUR) {
        return state.set('focused',false);
    }
    if (action.type === constans.CHANGE_LIST){
        console.log('test');
        return state.set('list',action.data);

    }

    return state;
}