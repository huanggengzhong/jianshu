import * as constants from './constants'
const defaultState={
    focused:false
}
//记得要输出纯函数
export default (state=defaultState,action)=>{
    // if(action.type==='search_focus'){
    if(action.type===constants.SEARCH_FOCUS){
        return {
            focused:true
        }
    // }else if(action.type==='search_blur'){
    }else if(action.type===constants.SEARCH_BLUR){
        return {
            focuse:false
        }
    }
return state
}