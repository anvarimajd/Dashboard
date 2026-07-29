<div align="center">

# 📊 Project Dashboard

### داشبورد مدیریت پروژه با React Native و Expo

<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-Latest-61DAFB?style=for-the-badge&logo=react">
  <img src="https://img.shields.io/badge/Expo-SDK%2057-000020?style=for-the-badge&logo=expo">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript">
  <img src="https://img.shields.io/badge/UI-Dashboard-success?style=for-the-badge">
  <img src="https://img.shields.io/badge/Platform-Android%20%7C%20iOS-success?style=for-the-badge">
</p>

> یک داشبورد مدیریتی مدرن برای نمایش وضعیت پروژه‌ها که با **React Native** و **Expo** طراحی شده است.

</div>

---

## 📖 معرفی پروژه

**Project Dashboard** یک رابط کاربری مدرن برای مدیریت و نمایش اطلاعات پروژه‌ها است.

این پروژه یک داشبورد موبایلی شامل:

- وضعیت پروژه‌ها
- دسته‌بندی پروژه‌ها
- ظرفیت سرور
- آمار کلی
- Navigation پایین صفحه

است که با هدف یادگیری طراحی UI حرفه‌ای در React Native ساخته شده است.

در این پروژه از کامپوننت‌های اصلی React Native مانند:

- SafeAreaView
- ScrollView
- View
- Text
- TouchableOpacity
- StyleSheet

استفاده شده است.

---

## ✨ امکانات

| ویژگی | وضعیت |
|--------|--------|
| طراحی داشبورد مدرن | ✅ |
| تم Dark Mode | ✅ |
| نمایش تعداد پروژه‌های فعال | ✅ |
| نمایش پروژه‌های تکمیل شده | ✅ |
| دسته‌بندی پروژه‌ها | ✅ |
| نمایش میزان استفاده از سرور | ✅ |
| Progress Bar | ✅ |
| Bottom Navigation | ✅ |
| طراحی Responsive | ✅ |
| استفاده از Flexbox | ✅ |

---

## 📱 بخش‌های داشبورد

### Header

شامل:

- Avatar کاربر
- عنوان داشبورد
- دکمه تنظیمات

در بخش Header از ساختار Row برای قرار دادن عناصر کنار یکدیگر استفاده شده است.

---

### Statistics Cards

نمایش آمار پروژه‌ها:

```
12
در حال انجام

28
تکمیل شده
```

این بخش با Card های جداگانه طراحی شده است.

---

### Categories

دسته‌بندی پروژه‌ها:

| دسته | تعداد |
|---|---|
| طراحی UI | 8 پروژه |
| توسعه وب | 12 پروژه |
| موبایل | 5 پروژه |
| دیزاین سیستم | 3 پروژه |

---

### Server Capacity

نمایش ظرفیت سرور:

```
70%
███████░░░
```

این بخش با Progress Bar ساخته شده است.

---

## 🛠 تکنولوژی‌های استفاده شده

- React Native
- Expo
- JavaScript
- JSX
- StyleSheet
- Flexbox Layout
- React Native Components


---

## 🚀 ساخت پروژه جدید

ایجاد پروژه Expo:

```bash
npx create-expo-app@latest
```

یا:

```bash
npx create-expo-app@latest Project-Dashboard
```

ورود به پروژه:

```bash
cd Project-Dashboard
```

---

## 💻 پیش‌نیازهای نصب

قبل از اجرا موارد زیر نیاز است:

- [ ] Node.js (LTS)
- [ ] npm
- [ ] Git
- [ ] Visual Studio Code
- [ ] Android Studio
- [ ] Android SDK
- [ ] Java JDK
- [ ] Expo Go

---

## ⚙ راه‌اندازی محیط توسعه

مستندات رسمی React Native:

🔗 [https://reactnative.dev/docs/set-up-your-environment](https://reactnative.dev/docs/set-up-your-environment)

شامل:

- نصب Android Studio
- نصب SDK
- تنظیم Environment Variables
- ساخت Emulator
- اجرای پروژه

---

## 📥 دانلود Android Studio

در صورت مشکل دانلود:

🔗 [https://soft98.ir/mobile/16739-android-studio.html](https://soft98.ir/mobile/16739-android-studio.html)

---

## 📦 Android SDK Offline

برای دانلود آفلاین System Image:

🔗 [https://androidsdkoffline.blogspot.com/p/android-sysimg-gapi-playstore-ia-x64.html?m=1](https://androidsdkoffline.blogspot.com/p/android-sysimg-gapi-playstore-ia-x64.html?m=1)

---

## ⚡ نصب وابستگی‌ها

```bash
npm install
```

---

## ▶ اجرای پروژه

### اجرای Expo

```bash
npx expo start
```

### اجرای Android

```bash
npx expo run:android
```

### اجرای iOS

```bash
npx expo run:ios
```

### پاک کردن Cache

```bash
npx expo start -c
```

---

## 🎯 اهداف آموزشی پروژه

در این پروژه یاد می‌گیرید:

- ساخت Dashboard UI
- طراحی Card Component
- Flexbox در React Native
- SafeAreaView
- ScrollView
- TouchableOpacity
- StyleSheet
- مدیریت Layout
- طراحی Dark Theme
- ساخت Navigation
- طراحی Responsive

---

## 🧩 مفاهیم استفاده شده

### Flexbox

برای چیدمان عناصر:

```jsx
flexDirection: 'row'
```

برای قرار دادن آیتم‌ها کنار هم استفاده شده است.

### Flex

برای تقسیم فضای مساوی:

```jsx
flex: 1
```

در کارت‌های آماری استفاده شده است.

### Grid Layout

برای ساخت دسته‌بندی‌ها:

```jsx
flexWrap: 'wrap'
```

استفاده شده است.

---

## 🚀 توسعه‌های آینده

- [ ] اتصال به Backend
- [ ] سیستم Login
- [ ] مدیریت واقعی پروژه‌ها
- [ ] اضافه کردن پروژه جدید
- [ ] نمودارهای آماری
- [ ] اعلان‌ها
- [ ] پروفایل کاربر
- [ ] ذخیره اطلاعات با AsyncStorage
- [ ] API Integration
- [ ] حالت Light Mode

---

## ❗ رفع مشکلات

### پروژه اجرا نمی‌شود

```bash
npx expo start -c
```

### نصب پکیج مشکل دارد

```bash
rm -rf node_modules
npm install
```

### Emulator مشکل دارد

بررسی کنید:

- ✅ Virtualization فعال باشد
- ✅ Android SDK نصب باشد
- ✅ Java نصب باشد
- ✅ Emulator ساخته شده باشد

---

## 📚 منابع آموزشی

### React Native

🔗 [https://reactnative.dev/docs](https://reactnative.dev/docs)

### Expo

🔗 [https://docs.expo.dev](https://docs.expo.dev)

---

## 🤝 مشارکت

برای توسعه پروژه:

1. **Fork** کنید
2. تغییرات خود را اعمال کنید
3. **Pull Request** ارسال کنید

---

## 📄 License

MIT License

---

<div align="center">


⭐ اگر پروژه را دوست داشتید **Star** بدهید.

ساخته شده با ❤️ توسط **React Native + Expo**

</div>
