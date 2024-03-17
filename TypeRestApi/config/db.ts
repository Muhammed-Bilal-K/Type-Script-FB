import mongoose from "mongoose";
import '../models/userModel';
mongoose.connect('mongodb://localhost:27017/typeuser');

export const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});




