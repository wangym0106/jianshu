import axios from 'axios';
import { fromJS } from 'immutable';
import * as constans from './constans';


export const  sertchForcus =()=>({ 
    type : constans.SEARCH_FORCUS
});
export const  sertchBlur =()=>({ 
    type : constans.SEARCH_BLUR
});
export const  changeList =(data)=>({ 
    type : constans.CHANGE_LIST,
    data : fromJS(data)   
});

export const getList = () =>{
    return (dispatch)=>{
        axios.get('api/headerList.json').then((res) => {
            dispatch(changeList(res.data.data));
        }).catch(() => {
            console.log('failed')
        })
    }
};