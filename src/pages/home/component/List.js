import React,{Component} from 'react';
import {connect} from 'react-redux';
import {
    ListInfo,
    ListItem,
    LoadMore
} from '../style';
import { actionCreators } from '../store';
class List extends Component {
   
    render(){
        const { list, getMoreList, articlePage } = this.props;    
        return (
               <div>
                   {
                        list.map((item, index) => {
                            return (
                                <ListItem key ={index}>
                                <img 
                                    src ={item.get('imageUrl')}
                                    className='pic'
                                    alt=''
                                />
                                <ListInfo>
                                    <h3 className = 'title'>{item.get('title')}</h3>
                                    <p  className = 'desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                            )
                        })
                   }
                   <LoadMore onClick = {()=>{getMoreList(articlePage)}}>更多信息</LoadMore>
               </div>
            
        )
    }
}
const mapToState = (state) => {
    return {
        list : state.getIn(['home','articleList']),
        articlePage: state.getIn(['home','articlePage'])
    }
};
const mapToDispatch = (dispatch) =>{
   return{
        getMoreList(articlePage) {
            dispatch(actionCreators.getMoreList(articlePage))
        }
   }
};
 export default connect(mapToState,mapToDispatch)(List);

