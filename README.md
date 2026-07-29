<div align="center">

# 🛒 Shop App

### اپلیکیشن مدرن فروشگاه اینترنتی با React Native و Expo

<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-Latest-61DAFB?style=for-the-badge&logo=react">
  <img src="https://img.shields.io/badge/Expo-SDK%2057-000020?style=for-the-badge&logo=expo">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript">
  <img src="https://img.shields.io/badge/UI-Modern-success?style=for-the-badge">
  <img src="https://img.shields.io/badge/Platform-Android%20%7C%20iOS-success?style=for-the-badge">
</p>

> یک رابط کاربری حرفه‌ای برای فروشگاه اینترنتی که با **React Native** و **Expo** توسعه داده شده است و تمامی بخش‌های اصلی یک فروشگاه آنلاین را شبیه‌سازی می‌کند.

</div>

---

## 📖 معرفی پروژه

**Shop App** یک پروژه آموزشی برای یادگیری طراحی رابط کاربری فروشگاه اینترنتی در React Native است.

در این پروژه با نحوه ساخت صفحات فروشگاهی، نمایش محصولات، دسته‌بندی‌ها، محصولات محبوب، سبد خرید، علاقه‌مندی‌ها و طراحی کامپوننت‌های قابل استفاده مجدد آشنا خواهید شد.

رابط کاربری این پروژه با الهام از فروشگاه‌های آنلاین مطرح مانند **Amazon**، **Digikala** و **Alibaba** طراحی شده است.

---

## ✨ امکانات

| ویژگی | وضعیت |
|--------|--------|
| رابط کاربری مدرن | ✅ |
| صفحه اصلی فروشگاه | ✅ |
| نمایش دسته‌بندی محصولات | ✅ |
| نمایش محصولات محبوب | ✅ |
| محصول ویژه روز | ✅ |
| نمایش جزئیات محصول | ✅ |
| سبد خرید | ✅ |
| مدیریت تعداد کالا | ✅ |
| علاقه‌مندی‌ها (Favorites) | ✅ |
| Navigation پایین صفحه | ✅ |
| طراحی Responsive | ✅ |
| کامپوننت‌های قابل استفاده مجدد | ✅ |

---

## 📱 صفحات پروژه

- صفحه Home
- دسته‌بندی محصولات
- محصولات محبوب
- محصول ویژه
- سبد خرید
- علاقه‌مندی‌ها
- صفحه جزئیات محصول
- Bottom Navigation

---

## 🛒 قابلیت‌های اپلیکیشن

- نمایش محصولات
- دسته‌بندی کالاها
- نمایش قیمت
- نمایش تخفیف
- نمایش تصاویر محصولات
- افزودن به سبد خرید
- افزایش و کاهش تعداد کالا
- علاقه‌مندی‌ها
- نمایش مجموع خرید
- دکمه تسویه حساب

---

## 🛠 تکنولوژی‌های استفاده شده

- **React Native**
- **Expo SDK 57**
- **JavaScript**
- **Expo Router**
- **React Hooks**
- **JSX**
- **StyleSheet**

---

## 📂 ساختار پروژه

```text
shop-app

├── app

├── src
│   ├── components
│
│   ├── home
│   │   ├── HomeHeader.jsx
│   │   ├── ProductCard.jsx
│   │   ├── PopularProductCard.jsx
│   │   ├── CategorySection.jsx
│   │   ├── ProductOfDaySection.jsx
│
│   ├── cart
│   │   ├── CartHeader.jsx
│   │   ├── CartItemCard.jsx
│   │   ├── QuantityControl.jsx
│   │   ├── CartSummary.jsx
│   │   └── CheckoutBar.jsx
│
│   ├── favorite
│   │   └── FavoriteProductCard.jsx
│
│   └── navigation
│       └── BottomNav.jsx
│
├── assets

├── package.json

└── README.md
```

---

## 🚀 ساخت پروژه جدید

```bash
npx create-expo-app@latest
```

یا

```bash
npx create-expo-app@latest shop-app
```

ورود به پروژه:

```bash
cd shop-app
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

برای نصب صحیح React Native از مستندات رسمی استفاده کنید.

🔗 [https://reactnative.dev/docs/set-up-your-environment](https://reactnative.dev/docs/set-up-your-environment)

در این مستند نحوه نصب موارد زیر آموزش داده شده است:

- Android Studio
- Android SDK
- Java JDK
- Environment Variables
- Android Emulator
- اجرای پروژه روی موبایل
- اجرای پروژه روی شبیه‌ساز

---

## 📥 دانلود Android Studio

در صورت مشکل در دانلود Android Studio می‌توانید از لینک زیر استفاده کنید.

🔗 [https://soft98.ir/mobile/16739-android-studio.html](https://soft98.ir/mobile/16739-android-studio.html)

---

## 📦 دانلود آفلاین Android SDK

اگر هنگام دانلود Emulator یا System Image با خطا مواجه شدید، فایل‌های آفلاین را از لینک زیر دریافت کنید.

🔗 [https://androidsdkoffline.blogspot.com/p/android-sysimg-gapi-playstore-ia-x64.html?m=1](https://androidsdkoffline.blogspot.com/p/android-sysimg-gapi-playstore-ia-x64.html?m=1)

---

## ⚡ نصب وابستگی‌ها

```bash
npm install
```

---

## ▶ اجرای پروژه

### اجرای Development Server

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

## 🧩 کامپوننت‌های پروژه

| Component | توضیح |
|------------|-------|
| HomeHeader | هدر صفحه اصلی |
| CategorySection | دسته‌بندی محصولات |
| ProductCard | کارت محصول |
| PopularProductCard | محصولات محبوب |
| ProductOfDaySection | محصول ویژه روز |
| CartHeader | هدر سبد خرید |
| CartItemCard | آیتم سبد خرید |
| QuantityControl | کنترل تعداد کالا |
| CartSummary | خلاصه خرید |
| CheckoutBar | دکمه تسویه حساب |
| FavoriteProductCard | محصولات علاقه‌مندی |
| BottomNav | منوی پایین برنامه |

---

## 🎯 اهداف آموزشی پروژه

در این پروژه با مفاهیم زیر آشنا خواهید شد:

- React Native
- Expo
- JSX
- Component
- Props
- State
- React Hooks
- useState
- StyleSheet
- View
- Text
- Image
- ScrollView
- FlatList
- TouchableOpacity
- طراحی رابط کاربری
- مدیریت State
- معماری پروژه
- طراحی فروشگاه اینترنتی
- ساخت کامپوننت‌های قابل استفاده مجدد

---

## 🚀 توسعه‌های آینده

- [ ] اتصال به API
- [ ] احراز هویت کاربران
- [ ] ثبت سفارش
- [ ] پرداخت آنلاین
- [ ] جستجوی محصولات
- [ ] فیلتر کالاها
- [ ] دسته‌بندی پیشرفته
- [ ] تاریخچه سفارش‌ها
- [ ] علاقه‌مندی‌ها
- [ ] اعلان‌ها
- [ ] پروفایل کاربری
- [ ] حالت Dark Mode

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

یا

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
