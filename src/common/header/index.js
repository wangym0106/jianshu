import React  from 'react';
import { CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import { actionCreators }from './store/';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    Addition,
    Button,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    NavSearchWrapper,
    SearchInfoList
}
from './style';
const getAreaList = (show) =>{
    if (show){
        return (
            <SearchInfo>
                            <SearchInfoTitle>
                                热门搜索
                                <SearchInfoSwitch>换一批</SearchInfoSwitch>
                            </SearchInfoTitle>
                            <SearchInfoList>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                            </SearchInfoList>
                        </SearchInfo>
        )
    } else {
        return null;
    } 
}
const Header = (props) => {
    return (
        <HeaderWrapper>
               <Logo/>
               <Nav>
                   <NavItem className = 'left active' >首页</NavItem>
                   <NavItem className = 'left' >下载App</NavItem>
                   <NavItem className = 'right' >登录</NavItem>
                   <NavItem className = 'right' >
                   Aa</NavItem>
                   <NavSearchWrapper>
                       <CSSTransition
                            in ={props.focused}
                            timeout={600}
                            classNames ='slide'
                        >
                        <NavSearch 
                            className = {props.focused ? 'focused':''}
                            onFocus = {props.handleInputFocused}
                            onBlur = {props.handleInputBlur}
                        >
                        </NavSearch>
                         </CSSTransition>
                         <i className = {props.focused ? 'focused iconfont' : 'iconfont' }>&#xe612;</i>
                        {getAreaList(props.focused)}
                   </NavSearchWrapper>
               </Nav>
               <Addition>
                   <Button className = 'writing'>
                    <span className = 'iconfont'></span>
                   写文章</Button>
                   <Button className = 'reg'>注册</Button>
               </Addition>
           </HeaderWrapper>
    )
}

const mapStateToProps = (state)=>{
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused'])
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        handleInputFocused(){
            const action = actionCreators.sertchForcus();
            dispatch(action);
        },
        handleInputBlur() {
            const action = actionCreators.sertchBlur();
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Header);    