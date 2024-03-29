import React from 'react';
import {Provider} from 'react-redux';
//* redux && context
import {store} from './redux/store';
import {ThemeProvider} from './contexts/ThemeContext';
import {LanguageProvider} from './contexts/LanguageContext';
import {AccessToGlobalSettingsProvider} from './contexts/AccessToGlobalSettingsContext';
//* components
import StatusBarComp from './components/core/StatusBar';
//* navigator
import Navigator from './navigators/Navigator';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <LanguageProvider>
          <AccessToGlobalSettingsProvider>
            <StatusBarComp />
            <Navigator />
          </AccessToGlobalSettingsProvider>
        </LanguageProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
