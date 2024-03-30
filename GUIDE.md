# Android için kopyalama kılavuzu

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

## 6- Cihaz için uygulama simgesini ayarlama

- Öncelikle 500 x 500 boyutlarında bir logo tasarlanmalıdır. Bu tasarım için canva kullanılabilir.

- Daha sonra tasarlanan bu logo aşağıdaki websiteye yüklenmeli ve websitenin çıktısı masa üstüne kaydedilmeli.
  `https://icon.kitchen/i/H4sIAAAAAAAAA6tWKkvMKU0tVrKqVkpJLMoOyUjNTVWyKikqTa3VUcrNTynNAUlGKyXmpRTlZ6Yo6Shl5hcDyfLUJKXYWgA19PHYPwAAAA%3D%3D`

- Daha sonra android cihazı logo yapılandırması için `icon.kitchen` websitesinden indirilen `IconKitchen-Output` dosyaları zipten çıkartılır ve `android/res` klasörü içerisindeki mipmap-hdpi, mipmap-mdpi, mipmap-xhdpi, mipmap-xxhdpi, mipmap-xxxhdpi klasörleri sırasıyla açılır ve klasör içerisindeki `ic_launcher` dosyası haricindeki dosyalar silinir ve `ic_launcher` dosyası kopyalanıp aynı klasör konumuna `ic_launcher_round` adıyla tekrar kaydedilir.

- Daha sonra düzenlenen bu beş klasör kopyalanıp mevcut projedeki `android/app/src/main/res` konumuna yapıştırılır. Yani eski klasörler yeni klasörler ile değiştirilir. Yada dosyalarıda değiştirilebilir. Daha sonra değişikliği görebilmek için proje tekrardan derlenir. Ve cihazda yüklediğimiz logo gözlemlenir.

## 7- Splash Screen ekranı yapılandırması

- Öncelikle mevcut projenin `android/app/src/main/res/values` dizinindeki `styles.xml` dosyası aşağıdaki gibi güncellenmelidir.

```bash
<resources>

    <!-- Base application theme. -->
    <style name="AppTheme" parent="Theme.AppCompat.DayNight.NoActionBar">
        <!-- Customize your theme here. -->
        <item name="android:editTextBackground">@drawable/rn_edit_text_material</item>
    </style>

    <!-- BootTheme should inherit from Theme.BootSplash or Theme.BootSplash.EdgeToEdge -->
    <style name="BootTheme" parent="Theme.BootSplash">
        <item name="bootSplashBackground">@color/bootsplash_background</item>
        <item name="bootSplashLogo">@drawable/bootsplash_logo</item>
        <!-- <item name="bootSplashBrand">@drawable/bootsplash_brand</item>  Only if you have a brand image -->
        <item name="postBootSplashTheme">@style/AppTheme</item>
    </style>

</resources>
```

- Daha sonra mevcut projenin `android/app/src/main/` dizinindeki `AndroidManifest.xml` dosyası aşağıdaki gibi güncellenmelidir.

```bash
<manifest xmlns:android="http://schemas.android.com/apk/res/android">

    <uses-permission android:name="android.permission.INTERNET" />

    <application
      android:name=".MainApplication"
      android:label="@string/app_name"
      android:icon="@mipmap/ic_launcher"
      android:roundIcon="@mipmap/ic_launcher_round"
      android:allowBackup="false"
      android:theme="@style/AppTheme">
      <activity
        android:name=".MainActivity"
        android:label="@string/app_name"
        android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode"
        android:launchMode="singleTask"
        android:windowSoftInputMode="adjustResize"
        android:exported="true"
        android:theme="@style/BootTheme"> <!-- # Eklenen satır -->
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
      </activity>
    </application>
</manifest>
```

- Daha sonra mevcut projenin `android/app/src/main/java/com/[ProjectName]` dizinindeki `MainActivity.kt` dosyası aşağıdaki gibi güncellenmelidir.

```bash
package com.reactnativeguidebook

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.os.Bundle;
import com.zoontek.rnbootsplash.RNBootSplash # Eklenen satır

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "ReactNativeGuidebook"

  override fun onCreate(savedInstanceState: Bundle?) {
    RNBootSplash.init(this, R.style.BootTheme) # Eklenen satır
    super.onCreate(null)
  }

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
```

- Daha sonra mevcut uygulamanın `src/assets/` dizinine istenilen logo, png formatında yüklenmelidir. Yüklenen dosya `logo.png` adında olmalıdır.

- Daha sonra aşağıdaki komut mevcut uygulamanın kök dizininde çalıştırılmalıdır.

```bash
npx react-native generate-bootsplash src/assets/logo.png \ --background=1B2635 \ --logo-width=100 \ --assets-output=assets \ --flavor=main
```

- Son olarak mevcut projenin `src/navigators` dizinindeki `Navigator.jsx` dosyasında yer alan ve yorum satırı olan aşağıdaki kodların yorum satırı silinmelidir. Bu kodlar çalışır hale getirilmelidir.

```bash
// ...
import BootSplash from 'react-native-bootsplash';
// ...

// ...
      onReady={() => {
        BootSplash.hide();
      }}
// ...
```

## 8- Splash Screen ekranı status-bar yapılandırması

- Daha sonra mevcut projenin `android/app/src/main/res/values` dizinindeki `styles.xml` dosyasındaki `<item name="postBootSplashTheme">@style/AppTheme</item>` kod satırının bir alt satırına aşağıdaki kod satırı eklenmelidir.

```bash
<item name="android:statusBarColor">@color/splash_background_color</item>
```

- Daha sonra mevcut projenin `android/app/src/main/res/values` dizinindeki `colors.xml` dosyasındaki `<color name="bootsplash_background">#1B2635</color>` kod satırının bir alt satırına aşağıdaki kod satırı eklenmelidir.

```bash
<color name="splash_background_color">#1B2635</color>
```

- Daha sonra mevcut proje tekrardan derlenip değişiklik gözlemlenmelidir.

## 9- Mağaza için yükleme anahtarı oluşturma

- Öncelikle bilgisayardan yönetici olarak cmd çalıştırılır ve daha sonra cmd ile `C:\Program Files\Java\jdk-17\bin` dizinine gidilir. Bu dizindeyken aşağıdaki komut çalıştırılır.

```bash
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
# C:\Program Files\Java\jdk-17\bin>keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

- Yukarıdaki kod çalıştırıldıktan sonra aşağıdaki sorular cmd ekranında cevaplandırılmalıdır.

- Enter keystore password: => Kişisel bir parola yazılmalıdır ve parola unutulmamalıdır.

- Re-enter new password: => Bir önceki adımdaki parola yazılmalıdır.

- What is your first and last name? => Ad ve Soyad yazılır.

- What is the name of your organizational unit? => Herhangi birşey yazılmayacaksa boş bırakılabilir yada BT yazılabilir.

- What is the name of your organization? => Herhangi birşey yazılmayacaksa boş bırakılabilir yada Freelancer yazılabilir.

- What is the name of your City or Locality? => Örneğin Ankara

- What is the name of your State or Province? => Örneğin Sincan

- What is the two-letter country code for this unit? => Ülke kodu yazılmalıdır. Türkiye için TR yazılabilir.

- Ve son adımda her şey yolunda ise yes cevabı yazılmalıdır.

-

- Daha sonra `C:\Program Files\Java\jdk-17\bin` dizinindeki `my-upload-key.keystore` dosyası kopyalanmalıdır yada kesilmelidir ve bu dosya mevcut projenin `android/app` dizinine eklenmelidir.

- Daha sonra ise mevcut projede `android/gradle.properties` dosyasının en altına aşağıdaki satırlar eklenmeledir.

```bash
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=[keystore için yazdığımız password]
MYAPP_UPLOAD_KEY_PASSWORD=[keystore için yazdığımız password]
```

- Daha sonra ise mevcut projede `android/app/build.grandle` dosyasında aşağıdaki gibi güncellenmelidir.

```bash
// ...

android {
    // ...

    signingConfigs {
        # release objesi eklenmeli
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }

        debug {
          // ...
        }
    }
    buildTypes {
        debug {
            // ...
        }
        release {
            // ...
            signingConfig signingConfigs.release # Burası eklenmeli(release)
            //...
        }
    }
}

// ...
```

## 9- APK || AAB oluşturma

- Debug modunda bir APK dosyası oluşturmak için `android` dizininde aşağıdaki komut çalıştırılmalıdır. Ve bu komut çalıştırıldıktan sonra `android/app/build/outputs/apk/debug` dizininde debug modundaki apk dosyası oluşur. Çıktının adı normal şartlarda `app-debug.apk` olmalıdır.

```bash
./gradlew assembleDebug
```

- Release modunda bir APK dosyası oluşturmak için `android` dizininde aşağıdaki komut çalıştırılmalıdır. Ve bu komut çalıştırıldıktan sonra `android/app/build/outputs/apk/release` dizininde release modundaki apk dosyası oluşur. Çıktının adı normal şartlarda `app-release.apk` olmalıdır.

```bash
./gradlew assembleRelease
```

- Release modunda bir APP Bundle dosyası oluşturmak için `android` dizininde aşağıdaki komut çalıştırılmalıdır. Ve bu komut çalıştırıldıktan sonra `android/app/build/outputs/bundle/release` dizininde release modundaki APP Bundle dosyası oluşur. Çıktının adı normal şartlarda `app-release.aab` olmalıdır.

```bash
./gradlew bundleRelease
```
