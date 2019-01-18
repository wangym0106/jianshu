import { fromJS } from 'immutable';
const defaultState =fromJS( {
    topicList:[],
    articalList:[],
    recommendList :[]           

});
export default (state = defaultState , action  ) => {
    switch(action.type) {
        case 'change_home_data':
            return state.merge({
                'topicList': fromJS(action.topicList),
                'articalList': fromJS(action.articalList),
                'recommendList' : fromJS(action.recommendList)               
            })
        default:
             return state;
    }
}