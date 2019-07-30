import React from 'react'
import { observer } from 'mobx-react'
import {
  StyleSheet, View, Text
} from 'react-native'
// import PropTypes from 'prop-types'
import ItemStore from '../../mobx/ItemStore'
import Detail from './Detail'
import NaviStore from '../../mobx/NaviStore'
@observer
class Home extends React.PureComponent {
  render () {
    return (
      <View style={styles.container}>

        <Text>Home</Text>

        <Text>{`Item Price: ${ItemStore.price}`}</Text>
        <Detail/>
        <Text style={styles.btn} onPress={() => ItemStore.increatePrice()}>Increate Price</Text>
        <Text style={styles.btn} onPress={() => ItemStore.increateVote()}>Increate Vote</Text>
        <Text style={styles.btn} onPress={() => NaviStore.pushToLogin()}>Logout</Text>
      </View>
    )
  }
}

export default Home

Home.defaultProps = {
}
Home.propTypes = {
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
    flex: 1,
    paddingTop: 10
  }
})
