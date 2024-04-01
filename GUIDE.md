# Guide to copying the project (for Android...) <!-- # Projeyi kopyalama kılavuzu(Android için...) -->

## 1-Create a new project <!-- ## 1-Yeni bir proje oluşturma -->

- First, a new react native project should be created with `react-native-cli`. The following command can be run to create a react native project.
<!-- - Öncelikle `react-native-cli` ile yeni bir react native projesi oluşturulmalı. React native projesi oluşturmak için aşağıdaki komut çalıştırılabilir. -->

```bash
npx react-native init [ProjectName]
```

## 2-Install, update packages, libraries <!-- ## 2-Paketleri, kütüphaneleri yükleme, güncelleme -->

- Then, all the definitions of the dependencies section in the `package.json` file of the source project, except for the 'react' and 'react-native' package definitions, should be transferred to the current project.
<!-- - Daha sonra kaynak projenin `package.json` dosyası içerisindeki dependencies kısmının 'react' ve 'react-native' paket tanımlaması haricindeki tüm tanımlamaları mevcut projeye aktarılmalı. -->

- Then delete the `node_modules` folder of the current project and reinstall the npm libraries with the following command.
<!-- - Daha sonra mevcut projenin `node_modules` klasörü silinmeli ve aşağıdaki komut ile npm kütüphaneleri tekrardan yüklenmeli. -->

```bash
npm i
```

## 3-react-native-svg-transformer, react-native-svg, react-native-vector-icons configuration <!-- ## 3- react-native-svg-transformer, react-native-svg, react-native-vector-icons yapılandırması -->

- Then copy the `metro.config.js` file from the root of the source project and replace it with `metro.config.js` from the root of the current project.
<!-- - Daha sonra kaynak projenin kök dizinindeki `metro.config.js` dosyası olduğu gibi kopyalanmalı ve mevcut projenin kök dizinindeki `metro.config.js` ile değiştirilmeli. -->

- Then the `.svgrrc` file in the root directory of the source project should be transferred to the root directory in the current project. (Before this process, this file should not exist in the current project)
<!-- - Daha sonra kaynak projenin kök dizinindeki `.svgrrc` dosyası mevcut projede kök dizine aktarılmalı.(Bu işlemden önce mevcut projede bu dosyanın olmaması gerekir) -->

- Then the `declarations.d.ts` file in the root directory of the source project should be transferred to the root directory in the current project. (Before this process, this file should not exist in the current project)
<!-- - Daha sonra kaynak projenin kök dizinindeki `declarations.d.ts` dosyası mevcut projede kök dizine aktarılmalı.(Bu işlemden önce mevcut projede bu dosyanın olmaması gerekir) -->

- Then the following line of code should be added at the bottom of the `android/app/build.gradle` file of the current project.
<!-- - Daha sonra mevcut projenin `android/app/build.gradle` dosyasının en altına aşağıdaki kod satırı eklenmeledir. -->

```bash
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
```

## 4- react-native-screens configuration <!-- ## 4- react-native-screens yapılandırması -->

- Then the following definition should be added at the bottom of the import definitions of the `MainActivity.kt` file in the `android/app/src/main/java/com/[ProjectName]` directory of the current project.
<!-- - Daha sonra mevcut projenin `android/app/src/main/java/com/[ProjectName]` dizinindeki `MainActivity.kt` dosyasının import tanımlamalarının en altına aşağıdaki tanımlama eklenmeledir. -->

```bash
import android.os.Bundle;
```

- Then the following code block should be added to the `MainActivity.kt` file in the `android/app/src/main/java/com/[ProjectName]` directory of the current project.
<!-- - Daha sonra mevcut projenin `android/app/src/main/java/com/[ProjectName]` dizinindeki `MainActivity.kt` dosyasına aşağıdaki kod bloğu eklenmelidir. -->

```bash
class MainActivity: ReactActivity() {
  // ...
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }
  // ...
}
```

## 5- Copying the source project codes, transferring them to the existing project and making the existing project operational <!-- ## 5- Kaynak proje kodlarının kopyalanması, mevcut projeye aktarılması ve mevcut projenin çalışır hale getirilmesi -->

- Then the `src` folder of the source project (with its contents) should be copied intact and added to the root directory of the current project.
<!-- - Daha sonra kaynak projenin `src` klasörü(içindekilerle beraber) olduğu gibi kopyalanmalıdır ve mevcut projenin kök dizinine eklenmelidir. -->

- Then the `index.js` file in the root directory of the current project should be updated as follows.
<!-- - Daha sonra mevcut projenin kök dizinindeki `index.js` dosyası aşağıdaki gibi güncellenmelidir. -->

```bash
import {AppRegistry} from 'react-native';
import App from './src/App'; # row to update
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

- Then the `onReady` probe sent to the `NavigationContainer` element in the `src/navigators/Navigator.jsx` file and the `import BootSplash from 'react-native-bootsplash';` definition should be made in the comment line.
<!-- - Daha sonra `src/navigators/Navigator.jsx` dosyasındaki `NavigationContainer` elementine gönderilen `onReady` propu ve `import BootSplash from 'react-native-bootsplash';` tanımlaması yorum satırı yapılmalıdır. -->

- Then, if the application is running on any local server, it should be stopped. And it should be restarted again. The application must be available in the operations performed until this step.
<!-- - Daha sonra uygulama herhangi bir local serverde çalışır durumda ise durdurulmalıdır. Ve tekrardan çalışır duruma getirilmelidir. Bu adıma kadar yapılan işlemlerde uygulama kullanılabilir durumda olmalıdır. -->

## 6- Setting the app icon for the device <!-- ## 6- Cihaz için uygulama simgesini ayarlama -->

- First of all, a 500 x 500 sized logo should be designed. Canva can be used for this design.
<!-- - Öncelikle 500 x 500 boyutlarında bir logo tasarlanmalıdır. Bu tasarım için canva kullanılabilir. -->

- This logo should then be uploaded to the website below and the printout of the website should be saved on the desktop.
  <!-- - Daha sonra tasarlanan bu logo aşağıdaki websiteye yüklenmeli ve websitenin çıktısı masaüstüne kaydedilmeli. -->

  `https://icon.kitchen/i/H4sIAAAAAAAAA6tWKkvMKU0tVrKqVkpJLMoOyUjNTVWyKikqTa3VUcrNTynNAUlGKyXmpRTlZ6Yo6Shl5hcDyfLUJKXYWgA19PHYPwAAAA%3D%3D`

- Afterwards, the files and folders extracted from the `IconKitchen-Output` folder downloaded from the `icon.kitchen` website for logo configuration on Android devices are extracted from the zip file. Then, the mipmap-hdpi, mipmap-mdpi, mipmap-xhdpi, mipmap-xxhdpi, mipmap-xxxhdpi folders located inside the `android/res` folder are opened one by one, and all files except the `ic_launcher` file within each folder are deleted. Subsequently, the `ic_launcher` file is copied, renamed as `ic_launcher_round`, and saved again in the same folder location.
<!-- - Daha sonra android cihazlarda logo yapılandırması için `icon.kitchen` websitesinden indirilen `IconKitchen-Output` dosyaları zipten çıkartılır ve `android/res` klasörü içerisindeki mipmap-hdpi, mipmap-mdpi, mipmap-xhdpi, mipmap-xxhdpi, mipmap-xxxhdpi klasörleri sırasıyla açılır ve klasör içerisindeki `ic_launcher` dosyası haricindeki dosyalar silinir ve `ic_launcher` dosyası kopyalanıp aynı klasör konumuna `ic_launcher_round` adıyla tekrar kaydedilir. -->

- Afterward, these five modified folders are copied and pasted into the `android/app/src/main/res` location of the existing project. This means that the old folders are replaced with the new ones, or the files within them may be replaced. Subsequently, the project is recompiled to see the changes, and the logo we uploaded is observed on the device.
<!-- - Daha sonra düzenlenen bu beş klasör kopyalanıp mevcut projedeki `android/app/src/main/res` konumuna yapıştırılır. Yani eski klasörler yeni klasörler ile değiştirilir. Yada dosyalarıda değiştirilebilir. Daha sonra değişikliği görebilmek için proje tekrardan derlenir. Ve cihazda yüklediğimiz logo gözlemlenir. -->

## 7- Splash Screen ekranı configuration <!-- ## 7- Splash Screen ekranı yapılandırması -->

- First, the `styles.xml` file in the `android/app/src/main/res/values` directory of the current project should be updated as follows.
<!-- - Öncelikle mevcut projenin `android/app/src/main/res/values` dizinindeki `styles.xml` dosyası aşağıdaki gibi güncellenmelidir. -->

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

- Then the `AndroidManifest.xml` file in the `android/app/src/main/` directory of the current project should be updated as follows.
<!-- - Daha sonra mevcut projenin `android/app/src/main/` dizinindeki `AndroidManifest.xml` dosyası aşağıdaki gibi güncellenmelidir. -->

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
        android:theme="@style/BootTheme"> <!-- # Added row -->
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
      </activity>
    </application>
</manifest>
```

- Then the `MainActivity.kt` file in the `android/app/src/main/java/com/[ProjectName]` directory of the current project should be updated as follows.
<!-- - Daha sonra mevcut projenin `android/app/src/main/java/com/[ProjectName]` dizinindeki `MainActivity.kt` dosyası aşağıdaki gibi güncellenmelidir. -->

```bash
package com.reactnativeguidebook

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.os.Bundle;
import com.zoontek.rnbootsplash.RNBootSplash # Added row

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "ReactNativeGuidebook"

  override fun onCreate(savedInstanceState: Bundle?) {
    RNBootSplash.init(this, R.style.BootTheme) # Added row
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

- Then the desired logo should be uploaded in png format to the `src/assets/` directory of the current project. The uploaded file must be named `logo.png`.
<!-- - Daha sonra mevcut projenin `src/assets/` dizinine istenilen logo, png formatında yüklenmelidir. Yüklenen dosya `logo.png` adında olmalıdır. -->

- The following command should then be run in the root directory of the current project.
<!-- - Daha sonra aşağıdaki komut mevcut projenin kök dizininde çalıştırılmalıdır. -->

```bash
npx react-native generate-bootsplash src/assets/logo.png \ --background=1B2635 \ --logo-width=100 \ --assets-output=assets \ --flavor=main
```

- Finally, the comment line of the following codes in the `Navigator.jsx` file in the `src/navigators` directory of the current project should be deleted. These codes should be made working.
<!-- - Son olarak mevcut projenin `src/navigators` dizinindeki `Navigator.jsx` dosyasında yer alan ve yorum satırı olan aşağıdaki kodların yorum satırı silinmelidir. Bu kodlar çalışır hale getirilmelidir. -->

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

## 8- Splash Screen screen status-bar configuration <!-- ## 8- Splash Screen ekranı status-bar yapılandırması -->

- Afterwards, the following line of code should be added below the `<item name="postBootSplashTheme">@style/AppTheme</item>` line in the `styles.xml` file located in the `android/app/src/main/res/values` directory of the existing project.
<!-- - Daha sonra mevcut projenin `android/app/src/main/res/values` dizinindeki `styles.xml` dosyasındaki `<item name="postBootSplashTheme">@style/AppTheme</item>` kod satırının bir alt satırına aşağıdaki kod satırı eklenmelidir. -->

```bash
<item name="android:statusBarColor">@color/splash_background_color</item>
```

- Afterwards, the following line of code should be added below the `<color name="bootsplash_background">#1B2635</color>` line in the `colors.xml` file located in the `android/app/src/main/res/values` directory of the existing project.
<!-- - Daha sonra mevcut projenin `android/app/src/main/res/values` dizinindeki `colors.xml` dosyasındaki `<color name="bootsplash_background">#1B2635</color>` kod satırının bir alt satırına aşağıdaki kod satırı eklenmelidir. -->

```bash
<color name="splash_background_color">#1B2635</color>
```

- The existing project must then be compiled again.
<!-- - Daha sonra mevcut proje tekrardan derlenmelidir. -->

## 9- Generate an installation key for the store <!-- ## 9- Mağaza için yükleme anahtarı oluşturma  -->

- Firstly, the Command Prompt is run as an administrator on the computer, and then the Command Prompt navigates to the `C:\Program Files\Java\jdk-17\bin` directory. While in this directory, the following command is executed.
<!-- - Öncelikle bilgisayardan yönetici olarak cmd çalıştırılır ve daha sonra cmd ile `C:\Program Files\Java\jdk-17\bin` dizinine gidilir. Bu dizindeyken aşağıdaki komut çalıştırılır. -->

```bash
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
# C:\Program Files\Java\jdk-17\bin>keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

- After running the above command, the following questions should be answered on the cmd screen.
<!-- - Yukarıdaki komut çalıştırıldıktan sonra aşağıdaki sorular cmd ekranında cevaplandırılmalıdır. -->

- Enter keystore password: => A personal password must be written down and the password must not be forgotten.
<!-- - Enter keystore password: => Kişisel bir parola yazılmalıdır ve parola unutulmamalıdır. -->

- Re-enter new password: => Enter the password from the previous step.
<!-- - Re-enter new password: => Bir önceki adımdaki parola yazılmalıdır. -->

- What is your first and last name? => Name and Surname should be written.
<!-- - What is your first and last name? => Ad ve Soyad yazılmalıdır. -->

- What is the name of your organizational unit? => If nothing is to be written, it can be left blank or BT can be written.
<!-- - What is the name of your organizational unit? => Herhangi birşey yazılmayacaksa boş bırakılabilir yada BT yazılabilir. -->

- What is the name of your organization? => If nothing is to be written, it can be left blank or Freelancer can be written.
<!-- - What is the name of your organization? => Herhangi birşey yazılmayacaksa boş bırakılabilir yada Freelancer yazılabilir. -->

- What is the name of your City or Locality? => For example Ankara
<!-- - What is the name of your City or Locality? => Örneğin Ankara -->

- What is the name of your State or Province? => For example Sincan
<!-- - What is the name of your State or Province? => Örneğin Sincan -->

- What is the two-letter country code for this unit? => The country code must be written. TR can be written for Turkey.
<!-- - What is the two-letter country code for this unit? => Ülke kodu yazılmalıdır. Türkiye için TR yazılabilir. -->

- And in the last step, if everything is OK, the answer yes should be written.
<!-- - Ve son adımda her şey yolunda ise yes cevabı yazılmalıdır. -->

-

- Then, the `my-upload-key.keystore` file in the `C:\Program Files\Java\jdk-17\bin` directory should be copied or cut, and this file should be added to the `android/app` directory of the existing project.
<!-- - Daha sonra `C:\Program Files\Java\jdk-17\bin` dizinindeki `my-upload-key.keystore` dosyası kopyalanmalıdır yada kesilmelidir ve bu dosya mevcut projenin `android/app` dizinine eklenmelidir. -->

- Then, the following lines should be added to the bottom of the `android/gradle.properties` file in the existing project.
<!-- - Daha sonra ise mevcut projede `android/gradle.properties` dosyasının en altına aşağıdaki satırlar eklenmeledir. -->

```bash
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=[password we wrote for keystore]
MYAPP_UPLOAD_KEY_PASSWORD=[password we wrote for keystore]
```

- Then, in the existing project, the `android/app/build.gradle` file should be updated as follows.
<!-- - Daha sonra ise mevcut projede `android/app/build.grandle` dosyası aşağıdaki gibi güncellenmelidir. -->

```bash
// ...

android {
    // ...

    signingConfigs {
        # release object should be added
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
            signingConfig signingConfigs.release # This should be added(release)
            //...
        }
    }
}

// ...
```

## 10- Create APK || AAB <!-- ## 10- APK || AAB oluşturma -->

- To generate an APK file in debug mode, the following command should be executed in the `android` directory. After running this command, the APK file in debug mode is created in the `android/app/build/outputs/apk/debug` directory. The output file should typically be named `app-debug.apk`.
<!-- - Debug modunda bir APK dosyası oluşturmak için `android` dizininde aşağıdaki komut çalıştırılmalıdır. Ve bu komut çalıştırıldıktan sonra `android/app/build/outputs/apk/debug` dizininde debug modundaki apk dosyası oluşur. Çıktının adı normal şartlarda `app-debug.apk` olmalıdır. -->

```bash
./gradlew assembleDebug
```

- To generate an APK file in release mode, the following command should be executed in the `android` directory. After running this command, the APK file in release mode is created in the `android/app/build/outputs/apk/release` directory. The output file should typically be named `app-release.apk`.
<!-- - Release modunda bir APK dosyası oluşturmak için `android` dizininde aşağıdaki komut çalıştırılmalıdır. Ve bu komut çalıştırıldıktan sonra `android/app/build/outputs/apk/release` dizininde release modundaki apk dosyası oluşur. Çıktının adı normal şartlarda `app-release.apk` olmalıdır. -->

```bash
./gradlew assembleRelease
```

- To generate an APP Bundle file in release mode, the following command should be executed in the `android` directory. After running this command, the APP Bundle file in release mode is created in the `android/app/build/outputs/bundle/release` directory. The output file should typically be named `app-release.aab`.
<!-- - Release modunda bir APP Bundle dosyası oluşturmak için `android` dizininde aşağıdaki komut çalıştırılmalıdır. Ve bu komut çalıştırıldıktan sonra `android/app/build/outputs/bundle/release` dizininde release modundaki APP Bundle dosyası oluşur. Çıktının adı normal şartlarda `app-release.aab` olmalıdır. -->

```bash
./gradlew bundleRelease
```
