import React,{Component} from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import {connect} from 'react-redux';
import axios from 'axios';
class Home extends Component {
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img alt = '' className = 'banner-img' src = 'https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount(){
        axios.get('/api/home.json').then(res => {
            const data = res.data.data;
            const action = {
                type : "change_home_data",
                topicList:data.topicList,
                articalList:data.articalList,
                recommendList:data.recommendList
            }
            this.props.changeHomeData(action);
        });
    }
}
const mapDipatch = (dispatch) =>{
    return {
        changeHomeData(action) {
              dispatch(action)
        }
    }
}
export default connect (null,mapDipatch)(Home);