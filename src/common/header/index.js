import React, { Component } from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
 
} from './style'
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux'
class Header extends Component {
  // constructor(props){
  //   super(props)
  //   // this.state={
  //   //   focused:false
  //   // }
  //   this.handleInputFocus=this.handleInputFocus.bind(this)
  // }
  // handleInputFocus(){
  //   this.setState({
  //     focused:true
  //   })
  // }
  // handleInputBlur=()=>{
  //   this.setState({
  //     focused:false
  //   })
  // }
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right login">登录</NavItem>
          <NavItem className="right">
            <span className="iconfont iconAa" />
          </NavItem>
          <SearchWrapper>
            <CSSTransition
            timeout={200}
            in={this.props.focused}
            classNames='slide'
            >
            <NavSearch onFocus={this.handleInputFocus} onBlur={this.handleInputBlur}
            className={
              this.props.focused?'focused':''
            }/>
            </CSSTransition>
            <span className={this.props.focused?'focused iconfont iconai219 ':'iconfont iconai219 '} />
          </SearchWrapper>
        </Nav>
        <Addition>
         
            <span className="iconfont iconpan_icon" />
            <Button className="writting">写文章</Button>
           <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}
const mapStateToProps=(state)=>{
  //state就是仓库里所有的数据
return {
 focused: state.focused
}
}
const mapDispathToProps=(dispatch)=>{
return {}
}
// 记住connect方法是下面这样写的
export default connect(mapStateToProps,mapDispathToProps)(Header) 
