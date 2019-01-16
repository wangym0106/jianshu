import React,{Component} from 'react';
import { connect } from 'react-redux';
import { TopicWapper, TopicItem } from '../style';

class Topic extends Component {
    render(){
        return(
            <TopicWapper>
                    {
                        this.props.list.map((item) => {
                            return(
                                <TopicItem key = {item.get('id')}>
                                    <img 
                                        src = {item.get('imageUrl')}
                                        className = 'topic-pic'
                                        alt = {item.get('name')}
                                    />
                                {item.get('name')}
                                </TopicItem>
                            )
                        })
                    }
            </TopicWapper>
        )
    }
    
}

const mapToState =(state) => {
   return {
       list : state.getIn(['home','topicList'])
   }
}   
export default connect(mapToState,null) (Topic);