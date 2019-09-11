import React from 'react'
import Header from './common/header/index'
import store from './store/index'
import {Provider} from 'react-redux'
class App extends React.Component {
  render() {
    return (
      //Provider的作用使Header组件都能使用store仓库中的数据
      <Provider store={store}>
        <Header/>
      </Provider>
    )
  }
}

export default App;
