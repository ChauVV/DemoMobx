import { observable, action } from 'mobx'
import { NavigationActions } from 'react-navigation'
import UserStore from './UserStore'

// gets the current screen from navigation state
function getCurrentRouteName (navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route)
  }
  return route.routeName
}

class NavStore {
  @observable.ref navigator = null

  @observable.ref firstTimeLoaded = true

  @observable.ref currentRouteName = ''

  goBack () {
    this.navigator.dispatch(NavigationActions.back({ type: 'Navigation/BACK' }))
    this.navigator.dispatch(NavigationActions.back({ type: 'Navigation/BACK' }))
  }

  back () {
    this.navigator.dispatch(NavigationActions.back({ type: 'Navigation/BACK' }))
  }

  pushToScreen (screen, params) {
    if (screen !== this.currentRouteName) {
      this.navigator && this.navigator.dispatch(NavigationActions.navigate({ routeName: screen, params }))
    }
  }

  pushToLogin () {
    UserStore.setLogin(false)
    this.navigator && this.navigator.dispatch(NavigationActions.navigate({ routeName: 'LoggedOut' }))
  }

  @action onNavigationStateChange (prevState, currentState) {
    const currentScreen = getCurrentRouteName(currentState)
    this.currentRouteName = currentScreen
  }
}

const navStore = new NavStore()
export default navStore
