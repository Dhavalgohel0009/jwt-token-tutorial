# Node.js Authentication Tutorial: Sessions & JWT

This repository is a hands-on tutorial for building a robust **User Authentication System** in Node.js. It demonstrates a hybrid security model using **JWT (JSON Web Tokens)** for identity and **Express-Session** with **MongoDB** for persistent state management.



## 🚀 Features
* **Password Hashing**: Secure storage using `bcrypt` (Salt & Hash).
* **Session Persistence**: Sessions are stored in MongoDB via `connect-mongo`, ensuring users stay logged in even if the server restarts.
* **JWT Implementation**: Generates secure tokens for verifiable user identity.
* **Cookie-Based Auth**: Leverages `cookie-parser` and `express-session` for seamless browser-server communication.
* **Modern ES6 Syntax**: Uses `import/export` and `async/await` throughout.

---

## 🛠️ Tech Stack
* **Runtime**: Node.js
* **Framework**: Express.js
* **Database**: MongoDB (Mongoose ODM)
* **Auth**: JWT & Express-Session

---

## 📦 Dependencies
```json
{
    "bcrypt": "^6.0.0",
    "connect-mongo": "^6.0.0",
    "cookie-parser": "~1.4.4",
    "dotenv": "^17.2.3",
    "express": "~4.16.1",
    "express-session": "^1.18.2",
    "jsonwebtoken": "^9.0.3",
    "mongoose": "^8.20.4",
    "morgan": "~1.9.1"
}