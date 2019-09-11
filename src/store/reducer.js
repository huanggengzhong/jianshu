import {combineReducers} from 'redux';//这个方法的作用是可以把小的reducer合并成大的reducer
import {reducer as headerReducer} from '../common/header/store'
// import headerReducer from '../common/header/store/reducer'


// export default combineReducers({
//     header:headerReducer
// })
// 上面三行简写

const reducer =combineReducers({
    header:headerReducer
})
export default reducer;