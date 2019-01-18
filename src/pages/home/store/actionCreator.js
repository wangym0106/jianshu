import * as constans from './constans';
import axios from 'axios';
import { fromJS } from 'immutable';
const getHomeData = (res) => {
       return {
            type : constans.CHANGE_HOME_DATA,
            topicList:res.topicList,
            articleList:res.articleList,
            recommendList:res.recommendList
       }
};
const addHomeList =(res,nextPage) => {
    return{
        type: constans.ADD_HOME_LIST,
        list : fromJS(res),
        nextPage 
    }
}
export const getMoreList = (page) =>{
    return (dispatch) => {
       axios.get('api/homeList.json?page=' +page ).then((res) => {
            dispatch(addHomeList(res.data.data, page + 1))
       });
    }
    
};
export const changeHomeData = () =>{
    return (dispatch)=>{
        axios.get('api/home.json').then((res) => {
            dispatch(getHomeData(res.data.data));
        }).catch(() => {
            console.log('failed')
        })
    }
};