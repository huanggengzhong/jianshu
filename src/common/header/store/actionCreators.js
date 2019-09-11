import * as constants from './constants'

export const searchFocus=()=>({//它返回一个对象
    // type:'search_focus'
    type:constants.SEARCH_FOCUS
})
export const searchBlur=()=>({//它返回一个对象
    // type:'search_blur'
    type:constants.SEARCH_BLUR
})