Arquitectura Frontend para React-redux
src/
│── app/
│   ├── store.js
│   ├── rootReducer.js
│   └── hooks.js
│
│── features/
│   ├── auth/
│   │   ├── authSlice.js
│   │   ├── authThunks.js
│   │   ├── authSelectors.js
│   │   ├── AuthService.js
│   │   └── components/
│   │       └── LoginForm.jsx
│   │
│   ├── user/
│   │   ├── userSlice.js
│   │   ├── userSelectors.js
│   │   └── components/
│   │       └── Profile.jsx
│   │
│   └── counter/
│       ├── counterSlice.js
│       └── components/
│           └── Counter.jsx
│
│── services/
│   ├── api.js
│   └── httpClient.js
│
│── shared/
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   └── constants/
│
│── pages/
│   ├── Home.jsx
│   └── Dashboard.jsx
│
│── routes/
│   └── AppRouter.jsx
│
│── App.jsx
│── main.jsx
