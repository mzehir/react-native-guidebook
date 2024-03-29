# Copy guide for Android / Android için kopyalama kılavuzu

## 1-Yeni bir proje oluşturma

- Öncelikle `react-native-cli` ile yeni bir react native projesi oluşturulmalı. React native projesi oluşturmak için aşağıdaki komut çalıştırılabilir.

```bash
npx react-native init [ProjectName]
```

## 2-Paketleri yükleme, güncelleme

- Daha sonra kaynak projenin `package.json` dosyası içerisindeki dependencies kısmının 'react' ve 'react-native' paket tanımlaması haricindeki tüm tanımlamaları mevcut projeye aktarılmalı.

- Daha sonra mevcut projenin `node_modules` klasörü silinmeli ve aşağıdaki komut ile npm kütüphaneleri tekrardan yüklenmeli.

```bash
npm i
```

## 3- react-native-svg-transformer && react-native-svg && react-native-vector-icons yapılandırması

- Daha sonra kaynak projenin kök dizinindeki `metro.config.js` dosyası olduğu gibi kopyalanmalı ve mevcut projenin kök dizinindeki `metro.config.js` ile değiştirilmeli.

- Daha sonra kaynak projenin kök dizinindeki `.svgrrc` dosyası mevcut projede kök dizine aktarılmalı.(Bu işlemden önce mevcut projede bu dosyanın olmaması gerekir.)

- Daha sonra kaynak projenin kök dizinindeki `declarations.d.ts` dosyası mevcut projede kök dizine aktarılmalı.(Bu işlemden önce mevcut projede bu dosyanın olmaması gerekir.)

- Daha sonra mevcut projenin `android/app/build.gradle` dosyasının en altına aşağıdaki kod satırı eklenmeledir.

```bash
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
```

## 4- react-native-screens yapılandırması

- Daha sonra mevcut projenin `android/app/src/main/java/com/[ProjectName]` dizinindeki `MainActivity.kt` dosyasının import tanımlamalarının en altına aşağıdaki tanımlama eklenmeledir.

```bash
import android.os.Bundle;
```

- Daha sonra mevcut projenin `android/app/src/main/java/com/[ProjectName]` dizinindeki `MainActivity.kt` dosyasına aşağıdaki kod bloğu eklenmelidir.

```bash
class MainActivity: ReactActivity() {
  // ...
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }
  // ...
}
```

## 5- Kaynak proje kodlarının kopyalanması, mevcut projeye aktarılması ve projenin çalışır hale getirilmesi

- Daha sonra kaynak projenin `src` klasörü(içindekilerle beraber) olduğu gibi kopyalanmalıdır ve mevcut projenin kök dizinine eklenmelidir.

- Daha sonra mevcut projenin kök dizinindeki `index.js` dosyası aşağıdaki gibi güncellenmelidir.

```bash
import {AppRegistry} from 'react-native';
import App from './src/App'; # güncellenecek satır
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

- Daha sonra `src/navigators/Navigator.jsx` dosyasındaki `NavigationContainer` elementine gönderilen `onReady` propu ve `import BootSplash from 'react-native-bootsplash';` tanımlaması yorum satırı yapılmalıdır.

- Daha sonra uygulama herhangi bir local serverde çalışır durumda ise durdurulmalıdır. Ve tekrardan çalışır duruma getirilmelidir. Bu adıma kadar yapılan işlemlerde uygulama kullanılabilir durumda olmalıdır.
