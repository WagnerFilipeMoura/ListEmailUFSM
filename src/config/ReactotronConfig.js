import Reactotron from 'reactotron-react-native'

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.229.2', name: 'ListEmailUFSM' })
    .useReactNative()
    .connect()

  console.tron = tron

  tron.clear()
}
