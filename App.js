import React from 'react'
import { observer } from 'mobx-react'
import {
  StyleSheet, View
} from 'react-native'

import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './src/screens/Home'
import Detail from './src/screens/Detail'
import LoginScreen from './src/screens/Login'

import UserStore from './mobx/UserStore'
import NaviStore from './mobx/NaviStore'
console.disableYellowBox = true

const stack1 = createStackNavigator(
  {
    Home: Home,
    Detail: Detail
  }
)
const SwitchNavigator = (isLogin) => createSwitchNavigator(
  {
    LoggedOut: {
      screen: LoginScreen
    },
    LoggedIn: {
      screen: stack1
    }
  },
  {
    initialRouteName: isLogin ? 'LoggedIn' : 'LoggedOut'
  }
)
const getRootNavigation = (isLogin) => createAppContainer(SwitchNavigator(isLogin))
// import PropTypes from 'prop-types'
@observer
class App extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = ({
      isLogin: false
    })
  }

  async componentDidMount () {
    const isLogin = await UserStore.getLogin()
    console.log('componentDidMount: ', isLogin)
    this.setState({ isLogin })
  }

  render () {
    console.log('render: ', this.state.isLogin)
    const RootNavigator = getRootNavigation(this.state.isLogin)
    return (
      <View style={styles.container}>
        <RootNavigator
          onNavigationStateChange={(prev, next) => NaviStore.onNavigationStateChange(prev, next)}
          // eslint-disable-next-line no-return-assign
          ref={nav => NaviStore.navigator = nav}
        />
      </View>
    )
  }
}
export default App

App.defaultProps = {
}
App.propTypes = {
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
