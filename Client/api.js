// src/api.js
// import axios from 'axios';

// const instance = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL,
//   withCredentials: true, // optional, only if using cookies
// });

// export default instance;

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://primeelectro.onrender.com/api', // ✅ correct backend base URL
});

export default api;
