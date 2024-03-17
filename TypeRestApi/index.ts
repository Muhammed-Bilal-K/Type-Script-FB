import dotenv from 'dotenv';
import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from 'cors';
dotenv.config();

import UserController  from './routes/users';
import './config/db'

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, OPTIONS, PATCH, PUT",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const PORT = 3001;

app.use('/', UserController);

const start = () => {
  app.listen(PORT, () => {
    console.log(`server has been connected on http://localhost:${PORT}`);
  });
};

start();
