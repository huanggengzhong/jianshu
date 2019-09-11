import React from 'react'
import Header from './common/header/index'
import {Provider} from 'react-redux'
import store from './store/index'
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
