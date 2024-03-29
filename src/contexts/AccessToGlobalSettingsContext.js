import React, {useState, createContext} from 'react';
//* components
import BottomModalComp from '../components/custom/BottomModal';
import SettingsSection from '../components/custom/settings/Settings';

const AccessToGlobalSettingsContext = createContext(null);

function AccessToGlobalSettingsProvider({children}) {
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);

  return (
    <AccessToGlobalSettingsContext.Provider
      value={{settingsModalVisible, setSettingsModalVisible}}>
      <BottomModalComp
        visible={settingsModalVisible}
        setVisible={setSettingsModalVisible}
        title="common.settings">
        <SettingsSection />
      </BottomModalComp>

      {children}
    </AccessToGlobalSettingsContext.Provider>
  );
}

export {AccessToGlobalSettingsProvider, AccessToGlobalSettingsContext};
