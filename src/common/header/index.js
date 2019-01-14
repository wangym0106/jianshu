import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store/';
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
class Header extends Component {

    render() {
        const {focused, handleInputFocused, handleInputBlur} = this.props;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active' >首页</NavItem>
                    <NavItem className='left' >下载App</NavItem>
                    <NavItem className='right' >登录</NavItem>
                    <NavItem className='right' >
                        Aa</NavItem>
                    <NavSearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={600}
                            classNames='slide'
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={handleInputFocused}
                                onBlur={handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe612;</i>
                        {this.getAreaList()}
                    </NavSearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writing'>
                        <span className='iconfont'></span>
                        写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
    getAreaList() {
        const {focused , list ,page} = this.props;
        const newList = list.toJS();
        const pageList = [];
         for(let i = (page - 1) * 10 ; i < page * 10 ; i ++ ) {
            pageList.push(
                <SearchInfoItem key = {newList[i]}>{newList[i]}</SearchInfoItem>
            );
        }
        if (focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            pageList
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
}




const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header','page']),
        totalPage: state.getIn(['header','totalPage'])

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocused() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.sertchForcus());
        },
        handleInputBlur() {
            const action = actionCreators.sertchBlur();
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);    