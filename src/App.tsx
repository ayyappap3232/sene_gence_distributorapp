import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import SplashScreen from 'react-native-splash-screen';

import store from './redux/store';
import MainNavigator from './navigation/MainNavigator';

let persistor = persistStore(store);

const App = () => {

  useEffect(() => {
      SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;