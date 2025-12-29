import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import session from 'express-session';
import MongoStore from 'connect-mongo';

import v1IndexRouter from './routes/v1/v1Index.js'
import usersRouter from './routes/users/usersIndex.js';
import { connectMongodb } from './utils/connectMongodb.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Global setup
await connectMongodb();
const cookieSession = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URL,
    touchAfter: 60 * 1000 * 60 * 24,
    autoRemove: 'native'
  }),
  cookie: {
    secure: false, //process.env.ENVIRONMENT == "PRODUCTION",
    httpOnly: true,
    maxAge: 60 * 1000 * 60 * 24
  }
}

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(cookieSession));

app.use('/v1', v1IndexRouter);
app.use('/users', usersRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Resource not found",
    error: {
      status: 404,
      path: req.originalUrl
    }
  });
});

app.listen(process.env.PORT || 3200,() => {
    console.log(`NodeJs Server started at : ${process.env.PORT || 3200}`)
})

export default app;
