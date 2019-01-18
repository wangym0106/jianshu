import * as constans from './constans';
import axios from 'axios';
const getHomeData = (res) => {
       return {
            type : constans.CHANGE_HOME_DATA,
            topicList:res.topicList,
            articalList:res.articalList,
            recommendList:res.recommendList
       }
}
export const changeHomeData = () =>{
    return (dispatch)=>{
        axios.get('api/home.json').then((res) => {
            dispatch(getHomeData(res.data.data));
        }).catch(() => {
            console.log('failed')
        })
    }
};