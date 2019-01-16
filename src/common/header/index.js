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
                        <span class = 'iconfont'>&#xe636;</span>
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
                        <span class='iconfont'>&#xe616;</span>
                        写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
    getAreaList() {
        const {focused, list, page, mouseIn, totalPage , mouseEnter, mouseLeave, handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = [];
        if (newList.length > 0) {
            for(let i = (page - 1) * 10 ; i < page * 10 ; i ++ ) {
                pageList.push(
                    <SearchInfoItem key = { newList[i] }>{newList[i]}</SearchInfoItem>
                );
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo 
                    onMouseEnter = {mouseEnter}
                    onMouseLeave = {mouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                                    <SearchInfoSwitch onClick = {()=>handleChangePage(page, totalPage)}>换一批</SearchInfoSwitch>
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
        mouseIn : state.getIn(['header','mouseIn']),
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
            dispatch(actionCreators.sertchBlur());
        },
        mouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        mouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totalPage){
            if (page < totalPage) {
                dispatch(actionCreators.handleChangePage(page + 1))
            }else {
                dispatch(actionCreators.handleChangePage(1))
            }
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);    