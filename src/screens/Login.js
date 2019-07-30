import React from 'react'
import { observer } from 'mobx-react'
import {
  StyleSheet, Text, SafeAreaView
} from 'react-native'
import UserStore from '../../mobx/UserStore'
import NaviStore from '../../mobx/NaviStore'
// import PropTypes from 'prop-types'
@observer
class Login extends React.PureComponent {
  render () {
    return (
      <SafeAreaView style={styles.container}>

        <Text
          style={styles.btn}
          onPress={() => {
            UserStore.setLogin(true)
            NaviStore.pushToScreen('LoggedIn')
          } }>Login</Text>
      </SafeAreaView>
    )
  }
}

export default Login

Login.defaultProps = {
}
Login.propTypes = {
}

const styles = StyleSheet.create({
  btn: {
    textAlign: 'center',
    backgroundColor: 'gray',
    color: 'white',
    padding: 10,
    marginVertical: 20
  },
  container: {
    flex: 1
  }
})
