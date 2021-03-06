import styled from 'styled-components'
import logoPic from '../../statics/img/logo.png'
export const HeaderWrapper = styled.div`
  height: 56px;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
`
export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.login {
    cursor: pointer;
  }
  &.active {
    color: #ea6f5a;
  }
  span {
    font-size: 19px;
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  margin-top: 9px;
  padding: 0 38px 0 20px;
  color: #777;
  box-sizing: border-box;
  margin-left: 20px;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
    iconfont: ;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
    width: 160px;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
  span {
    position: absolute;
    left: 94px;
    top: 19px;
  }
`
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    background: #ec6149;
  }
`
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  height: 38px;

  .iconfont {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background: #ccc;
    line-height: 30px;
    position: absolute;
    top: 13px;
    right: 2px;
    padding: 0 !important;
    color: #969696 !important;
    text-align: center;
    font-size: 21px;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`
export const SearchInfo=styled.div`
position:absolute;
left:0;
top:56px;
width:240px;
padding:0 20px;
// height:100px;
// background:green;
box-shadow:0 0 8px rgba(0,0,.2);
`
export const SearchInfoTitle=styled.div`
margin-top:20px;
margin-bottom:15px;
line-height:20px;
font-size:14px;
color:#969696;
`
export const SearchInfoSwitch=styled.span`
float:right;
font-size:13px;
`
export const SearchInfoItem=styled.a`
line-height:20px;
padding:0 5px;
font-size:12px;
border:1px solid #ddd;
color:#787878;
border-radius:3px;
display:block;
float:left;
margin-right:10px;
margin-bottom:5px;
`
export const SearchInfoList=styled.div`
overflow:hidden;
`