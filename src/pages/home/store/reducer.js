import { fromJS } from 'immutable';
import * as constans from './constans';
const defaultState =fromJS( {
    topicList:[],
    articalList:[],
    recommendList :[]           

});
export default (state = defaultState , action  ) => {
    switch(action.type) {
        case constans.CHANGE_HOME_DATA:
            return state.merge({
                'topicList': fromJS(action.topicList),
                'articalList': fromJS(action.articalList),
                'recommendList' : fromJS(action.recommendList)               
            })
        default:
             return state;
    }
}