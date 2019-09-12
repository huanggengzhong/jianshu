import * as constants from './constants';
import {fromJS} from 'immutable';
// 引入immutable这个对象

const defaultState=fromJS({
    focused:false
})
// const defaultState={
//     focused:false
// }
//记得要输出纯函数
export default (state=defaultState,action)=>{
    // if(action.type==='search_focus'){
    if(action.type===constants.SEARCH_FOCUS){
        // return {
        //     focused:true
        // }
        // 返回也要写成immutable对象写法
        return state.set('focused',true)
    // }else if(action.type==='search_blur'){
    }else if(action.type===constants.SEARCH_BLUR){
        // return {
        //     focuse:false
        // }
        return state.set('focused',false)
    }
return state
}