import { observable, action } from 'mobx'
import AsyncStore from 'react-native-simple-store'

class User {
  @observable name = 'Chau'

  @observable star = 1

  @action increateStar = () => {
    this.star += 1
  }

  @action getLogin = async () => {
    const isLogin = await AsyncStore.get('LOGINED') || false
    return isLogin
  }

  @action setLogin = (isLogin) => {
    AsyncStore.save('LOGINED', isLogin)
  }
}
const UserStore = new User()
export default UserStore
