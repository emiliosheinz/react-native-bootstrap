import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'react-native-bootstrap',
      storage,
      whitelist: [
        /* Names of the reducers that you want to persist */
      ],
    },
    reducers
  )

  return persistedReducers
}
