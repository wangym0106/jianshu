import React,{Component} from 'react';
import {connect} from 'react-redux';
import {
    ListInfo,
    ListItem
} from '../style';
class List extends Component {
   
    render(){
        const {list} = this.props;
        return (
            list.map((item) => {
                return (
                    <ListItem key ={item.get('id')}>
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
        )
    }
}
const mapToState = (state) => {
    return {
        list : state.getIn(['home','articalList'])
    }
}
export default connect(mapToState,null)(List);

