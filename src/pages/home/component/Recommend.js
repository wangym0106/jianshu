import React,{Component} from 'react';
import  {RecommendWrapper, RecommendItem} from '../style';
import { connect} from 'react-redux';
class Recommend extends Component {
    render(){
        const {list} = this.props;
        return(
            <RecommendWrapper>
                {
                    list.map((item)=>{
                    return  <RecommendItem key = {item.get('id')} imgUrl = {item.get('imgUrl')} />
                })}
              
            </RecommendWrapper>
        )
    }
    
}
const mapToState =(state) =>{
    return {
    
        list : state.getIn(['home','recommendList'])
    }
}

export default connect(mapToState,null) (Recommend);