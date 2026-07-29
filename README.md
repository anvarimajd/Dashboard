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

- تعداد پروژه‌های فعال
- تعداد پروژه‌های تکمیل شده
- درصد پیشرفت کلی
- استفاده از سرور

---

## 📊 نمودارها و آمار

- نمودار میله‌ای پروژه‌ها
- نمودار دایره‌ای دسته‌بندی‌ها
- شاخص پیشرفت سرور

---

## 🛠 تکنولوژی‌های استفاده شده

- **React Native**
- **Expo SDK 57**
- **JavaScript (ES6+)**
- **React Hooks**
- **JSX**
- **StyleSheet**
- **Flexbox**

---

## 📂 ساختار پروژه

```text
project-dashboard

├── app

├── src
│   ├── components
│   │   ├── Header.jsx
│   │   ├── StatisticsCards.jsx
│   │   ├── ProjectCategory.jsx
│   │   ├── ServerCapacity.jsx
│   │   ├── ProgressBar.jsx
│   │   └── BottomNavigation.jsx
│
│   ├── constants
│   │   └── colors.js
│
│   └── data
│       └── dashboardData.js

├── assets

├── package.json

└── README.md
```

---

## 🧩 کامپوننت‌های پروژه

| Component | توضیح |
|------------|-------|
| Header | نمایش آواتار، عنوان و دکمه تنظیمات |
| StatisticsCards | کارت‌های آماری |
| ProjectCategory | دسته‌بندی پروژه‌ها |
| ServerCapacity | ظرفیت سرور |
| ProgressBar | نوار پیشرفت |
| BottomNavigation | منوی ناوبری پایین صفحه |

---

## 🚀 ساخت پروژه جدید

```bash
npx create-expo-app@latest
```

یا:

```bash
npx create-expo-app@latest project-dashboard
```

ورود به پروژه:

```bash
cd project-dashboard
```

---

## 💻 پیش‌نیازهای نصب

قبل از اجرای پروژه موارد زیر باید نصب باشند:

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

برای نصب صحیح React Native از مستندات رسمی استفاده کنید:

🔗 [https://reactnative.dev/docs/set-up-your-environment](https://reactnative.dev/docs/set-up-your-environment)

در این مستند نحوه نصب موارد زیر توضیح داده شده است:

- Android Studio
- Android SDK
- Java JDK
- Environment Variables
- Android Emulator
- اجرای پروژه روی موبایل

---

## 📥 دانلود Android Studio

در صورت مشکل در دانلود Android Studio می‌توانید از لینک زیر استفاده کنید.

🔗 [https://soft98.ir/mobile/16739-android-studio.html](https://soft98.ir/mobile/16739-android-studio.html)

---

## 📦 دانلود آفلاین Android SDK

اگر هنگام دانلود Emulator یا System Image با مشکل مواجه شدید:

🔗 [https://androidsdkoffline.blogspot.com/p/android-sysimg-gapi-playstore-ia-x64.html?m=1](https://androidsdkoffline.blogspot.com/p/android-sysimg-gapi-playstore-ia-x64.html?m=1)

---

## ⚡ نصب وابستگی‌ها

```bash
npm install
```

---

## ▶ اجرای پروژه

### شروع Development Server

```bash
npx expo start
```

### اجرای اندروید

```bash
npx expo run:android
```

### اجرای iOS

```bash
npx expo run:ios
```

### پاک کردن کش

```bash
npx expo start -c
```

---

## 📱 اجرای پروژه روی موبایل

۱. برنامه **Expo Go** را نصب کنید.

۲. دستور زیر را اجرا کنید:

```bash
npx expo start
```

۳. QR Code نمایش داده شده را توسط **Expo Go** اسکن کنید.

---

## 📦 دستورات پرکاربرد

### نمایش نسخه Node

```bash
node -v
```

### نمایش نسخه npm

```bash
npm -v
```

### نمایش نسخه Expo

```bash
npx expo --version
```

### نصب پکیج

```bash
npm install package-name
```

### نصب پکیج مخصوص Expo

```bash
npx expo install package-name
```

---

## 🎯 اهداف آموزشی پروژه

در این پروژه با مفاهیم زیر آشنا خواهید شد:

- React Native
- Expo
- JavaScript
- JSX
- Component
- Props
- State
- React Hooks
- useState
- StyleSheet
- View
- Text
- ScrollView
- SafeAreaView
- TouchableOpacity
- Flexbox
- طراحی UI داشبورد
- مدیریت Layout
- معماری پروژه
- ساخت کامپوننت‌های قابل استفاده مجدد
- طراحی Responsive

---

## 🚀 توسعه‌های آینده

- [ ] اتصال به API
- [ ] دریافت داده‌های واقعی
- [ ] نمودارهای پیشرفته
- [ ] حالت Light Mode
- [ ] اعلان‌ها
- [ ] صفحه جزئیات پروژه
- [ ] ویرایش پروژه
- [ ] حالت آفلاین
- [ ] چندزبانه
- [ ] انیمیشن‌های پیشرفته

---

## ❗ رفع مشکلات متداول

### پروژه اجرا نمی‌شود

```bash
npx expo start -c
```

### نصب نشدن پکیج‌ها

```bash
npm install
```

یا:

```bash
rm -rf node_modules
npm install
```

### Emulator اجرا نمی‌شود

- ✅ فعال بودن Virtualization
- ✅ نصب Android SDK
- ✅ نصب Java JDK
- ✅ ساخت Emulator
- ✅ استفاده از Android SDK Offline

---

## 📚 منابع آموزشی

### مستندات React Native

🔗 [https://reactnative.dev/docs](https://reactnative.dev/docs)

### راه‌اندازی محیط توسعه

🔗 [https://reactnative.dev/docs/set-up-your-environment](https://reactnative.dev/docs/set-up-your-environment)

### مستندات Expo

🔗 [https://docs.expo.dev](https://docs.expo.dev)

---

## 🤝 مشارکت

در صورت تمایل می‌توانید پروژه را **Fork** کرده و با ارسال **Pull Request** در توسعه آن مشارکت کنید.

---

## 📄 لایسنس

این پروژه تحت لایسنس **MIT** منتشر شده است.

---

<div align="center">


⭐ اگر این پروژه برای شما مفید بود، لطفاً به آن **Star** بدهید.

ساخته شده با ❤️ توسط **React Native + Expo**

</div>

