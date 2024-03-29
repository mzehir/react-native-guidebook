import AsyncStorage from '@react-native-async-storage/async-storage';

const setItem = async (key, value, valueType) => {
  try {
    if (valueType === 'string') {
      await AsyncStorage.setItem(key, value);
      return 'success';
    } else if (valueType === 'object') {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      return 'success';
    }
  } catch (e) {
    return 'error';
  }
};

const getItem = async (key, valueType) => {
  try {
    if (valueType === 'string') {
      const value = await AsyncStorage.getItem(key);
      return value;
    } else if (valueType === 'object') {
      const jsonValue = await AsyncStorage.getItem('key');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    }
  } catch (e) {
    return 'error';
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    return "success"
  } catch (e) {
    return 'error';
  }
};

//* Theme
export async function themeSetItem(data) {
  return await setItem('theme', data, 'string');
}

export async function themeGetItem() {
  return await getItem('theme', 'string');
}

//* Language
export async function languageSetItem(data) {
  return await setItem('language', data, 'string');
}

export async function languageGetItem() {
  return await getItem('language', 'string');
}
