import {useContext} from 'react';
//* sections
import {AccessToGlobalSettingsContext} from '../contexts/AccessToGlobalSettingsContext';

const AccessToGlobalSettingsUseContext = () =>
  useContext(AccessToGlobalSettingsContext);

export default AccessToGlobalSettingsUseContext;
