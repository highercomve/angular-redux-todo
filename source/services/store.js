import reduxStore from '../reducers'

export default function StoreFactory (ngComponent) {
  ngComponent.factory('Store', Store)

  function Store () {
    window.Store = reduxStore
    return reduxStore
  }
}
