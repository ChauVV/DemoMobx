import React from 'react'
import { observer } from 'mobx-react'
import {
  StyleSheet, View, Text
} from 'react-native'
import ItemStore from '../../mobx/ItemStore'
// import PropTypes from 'prop-types'
@observer
export default class Detail extends React.PureComponent {
  render () {
    return (
      <View style={styles.container}>
        <Text>Detail</Text>
        <Text>{`Item price: ${ItemStore.price}`}</Text>
        <Text>{`Vote counst: ${ItemStore.voteCount}`}</Text>
      </View>
    )
  }
}

Detail.defaultProps = {
}
Detail.propTypes = {
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  }
})
