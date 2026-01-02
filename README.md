💰 Expense Tracker Mobile App

React Native (Expo) + Node.js (Express) + PostgreSQL (Neon)

A full-stack expense tracking mobile application with secure authentication, real-time balance updates, and a production-ready backend.

📸 Screenshots

![SignUp Screen]("screenshots/create.PNG")
![SignIn Screen]("screenshots/sign.PNG")
![Home Screen]("screenshots/home.PNG")
![Add Screen]("screenshots/add.PNG")

🚀 Overview

This project is a production-grade expense tracker built using React Native (Expo) for mobile and Node.js + Express for the backend.
It supports secure authentication, transaction management, balance calculation, and API protection using rate limiting.

The goal of this project is to demonstrate real-world full-stack mobile development, not a toy CRUD app.

🧑‍🍳 App Features
🔐 Authentication

Email-based authentication using Clerk

6-digit email verification code

Secure signup & login flow

Logout support

🏠 Home Screen

Displays current balance

Lists past income & expense transactions

Pull-to-refresh implemented from scratch

➕ Transactions

Add income or expense

Auto-updates balance

Delete transactions with instant UI update

🛠️ Tech Stack
📱 Mobile App

React Native (Expo)

TypeScript

React Navigation

Custom Pull-to-Refresh

REST API integration

🧠 Backend

Node.js

Express.js

PostgreSQL (Neon)

Raw SQL queries (no ORM)

RESTful API design

🔐 Security & Infra

Clerk Authentication

Email verification

Redis-based Rate Limiting

Environment-based config

🛡️ Key Engineering Highlights

Built and deployed a scalable Express API

Integrated PostgreSQL (Neon) without ORM for full SQL control

Implemented rate limiting using Redis

Clean separation of frontend & backend

Mobile-first UX with real-world auth flow

⚙️ Run the Backend
cd backend
npm install
npm run dev

Make sure you configure:

Neon PostgreSQL connection

Clerk keys

Redis credentials

📱 Run the Mobile App
cd mobile
npm install
npx expo start

Scan the QR code using Expo Go or run on an emulator.

🔮 Future Improvements

Category-based analytics

Monthly reports & charts

Offline support

Export transactions (CSV / PDF)

👨‍💻 Author

Mohamad Salman
Full Stack Developer | React Native Specialist

LinkedIn: https://www.linkedin.com/in/mosalmantt/

Portfolio: https://mosalmanportfolio.vercel.app/

Email: mosalman1098@gmail.com
