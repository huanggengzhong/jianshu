// import React, { Component } from 'react'
import React from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';

// import  * as actionCreators from './store/actionCreators';
import  {actionCreators} from './store';


// class Header extends Component {
//   // constructor(props){
//   //   super(props)
//   //   // this.state={
//   //   //   focused:false
//   //   // }
//   //   this.handleInputFocus=this.handleInputFocus.bind(this)
//   // }
//   // handleInputFocus(){
//   //   this.setState({
//   //     focused:true
//   //   })
//   // }
//   // handleInputBlur=()=>{
//   //   this.setState({
//   //     focused:false
//   //   })
//   // }
//   render() {
//     return (
//       <HeaderWrapper>
//         <Logo />
//         <Nav>
//           <NavItem className="left">首页</NavItem>
//           <NavItem className="left">下载App</NavItem>
//           <NavItem className="right login">登录</NavItem>
//           <NavItem className="right">
//             <span className="iconfont iconAa" />
//           </NavItem>
//           <SearchWrapper>
//             <CSSTransition
//             timeout={200}
//             in={this.props.focused}
//             classNames='slide'
//             >
//             <NavSearch 
//             onFocus={this.props.handleInputFocus} 
//             onBlur={this.props.handleInputBlur}
//             className={
//               this.props.focused?'focused':''
//             }/>
//             </CSSTransition>
//             <span className={this.props.focused?'focused iconfont iconai219 ':'iconfont iconai219 '} />
//           </SearchWrapper>
//         </Nav>
//         <Addition>
         
//             <span className="iconfont iconpan_icon" />
//             <Button className="writting">写文章</Button>
//            <Button className="reg">注册</Button>
//         </Addition>
//       </HeaderWrapper>
    
//     )
//   }
// }
function Header(props) {
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
        in={props.focused}
        classNames='slide'
        >
        <NavSearch 
        onFocus={props.handleInputFocus} 
        onBlur={props.handleInputBlur}
        className={
          props.focused?'focused':''
        }/>
        </CSSTransition>
        <span className={props.focused?'focused iconfont iconai219 ':'iconfont iconai219 '} />
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
const mapStateToProps=(state)=>{
  //state就是仓库里所有的数据
return {
//  focused: state.focused
//  focused: state.header.focused
// 因为是immutable对象了,所以不能直接用state.header.出来
//  focused: state.header.get('focused')//要用immutable对象的get方法来获取
//  focused: state.get('header').get('focused')//要用immutable对象的get方法来获取
//  上一行简写
focused:state.getIn(['header','focused'])
}
}
const mapDispathToProps=(dispatch)=>{
return {
  handleInputFocus(){
    // const action ={
    //   type:'search_focus'
    // }
    // const action =actionCreators.searchFocus()
    // dispatch(action)
    // 上面两行简写
    dispatch(actionCreators.searchFocus())
    
  },//记得这里是逗号哦
  handleInputBlur(){
    // console.log(321);//发现有效
    // const action={
    //   type:'search_blur',
      
    // }
    // dispatch(action)
    dispatch(actionCreators.searchBlur())
  }
}
}
// 记住connect方法是下面这样写的
export default connect(mapStateToProps,mapDispathToProps)(Header) 
