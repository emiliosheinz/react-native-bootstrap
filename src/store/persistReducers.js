import AsyncStorage from '@react-native-community/async-storage'
import { persistReducer } from 'redux-persist'

export default reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'react-native-bootstrap',
      storage: AsyncStorage,
      whitelist: [
        /* Names of the reducers that you want to persist */
      ],
    },
    reducers
  )

  return persistedReducers
}
