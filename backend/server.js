import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import PaytmChecksum from './lib/checksum/PaytmChecksum.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/plantplaneto', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

app.post('/api/config/paytm',(req,res)=>{
    const {amount,email,mobile_no}=req.body;
    var paytmParams = {};

    /* initialize an array */
    paytmParams["MID"] = process.env.M_ID;
    paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE;
    paytmParams["CHANNEL_ID"] = process.env.CHANNEL_ID;
    paytmParams["INDUSTRY_TYPE_ID"] = process.env.INDUSTRY_TYPE;
    paytmParams["ORDER_ID"] = "YOUR_ORDER_ID_HERE";
    paytmParams["CUST_ID"] = "YOUR_ORDER_ID_HERE";
    paytmParams["TXN_AMOUNT"] = "YOUR_ORDER_ID_HERE";
    paytmParams["CALLBACK_URL"] = "YOUR_ORDER_ID_HERE";
    paytmParams["EMAIL"] = "YOUR_ORDER_ID_HERE";
    paytmParams["MOBILE_NO"] = "YOUR_ORDER_ID_HERE";

    var PChecksum = PaytmChecksum.generateSignature(paytmParams, process.env.PAYTM_MERCHANT_KEY);
    pChecksum.then(function(checksum){
      let params = {
        ...paytmParams,
        "CHECKSUM_HASH":checksum
      }
      res.json(params)
    }).catch(function(error){
      console.log(error);
    });
});

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
