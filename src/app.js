import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';//use->server is able to access the cookies in the client browser

const app = express();

app.use(cors(
  {origin:process.env.CORS_ORIGIN,
  credentials:true
}
));
app.use(express.json({
  limit:"16kb"//limit the size of json file
}))
//ab kya pta URL se bhi data aa jaye
app.use(express.urlencoded({extended:true,limit:"16kb"}))
//
app.use(express.static("public"))
//server is able to access the cookies in the client browser
app.use(express.cookieParser())
export {app}