const defaultState={
    focused:false
}
//记得要输出纯函数
export default (state=defaultState,action)=>{
    if(action.type==='search_focus'){
        return {
            focused:true
        }
    }else if(action.type==='search_blur'){
        return {
            focuse:false
        }
    }
return state
}