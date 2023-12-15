
 const express = require("express");
 const router = express.Router();
 const AuthMiddleWare = require("../middleware/AuthMiddleware");
 const AuthController = require("../controllers/AuthController");
 const logincontroller = require("../controllers/login.controller");
 const hotelcontroller = require("../controllers/hotels.controller");
 var tourcontroller = require('../controllers/tours.controller');
 var locationcontroller = require('../controllers/location.controller');
 var tourcategories = require('../controllers/tourcategories.controller');
 var flightcontroller = require('../controllers/flights.controller');
 var TourDetails = require('../controllers/tourdetails.controller');
 var tourschedules = require('../controllers/tourschedules.controller');
 var account = require('../controllers/accounts.controller');
 var order = require('../controllers/order.controller');
 var orderdetail = require('../controllers/orderdetails.controller');
const { or } = require("sequelize");
 /**
  * Init all APIs on your application
  * @param {*} app from express
  */
 let initAPIs = (app) => {
   router.post("/login", AuthController.login);
   router.post("/refresh-token", AuthController.refreshToken);

   router.get('/tour/',tourcontroller.getAll);
   router.get('/hotel/',hotelcontroller.getAll);
   router.get('/location/:page',locationcontroller.getAll);
   router.get('/location/',locationcontroller.getById);
   router.get('/tourcategory',tourcategories.getAll);
   router.get('/tourcategory/:id',tourcategories.getById);
   router.get('/flight/',flightcontroller.getAll);
   router.get('/tourdetail/',TourDetails.getAll);
   router.get('/tourschedule/',tourschedules.getAll);
   router.get('/account/',account.getAll);
   router.get('/tourdetail/:id',TourDetails.getById);
   router.get('/tourschedule/:id',tourschedules.getById);
   router.get('/tour/:id',tourcontroller.getById);
   router.get('/hotel/:id',hotelcontroller.getById);
   router.get('/flight/:id',flightcontroller.getById);
   router.get('/order/',order.getAll);
   router.get('/order/:id',order.getById);
   router.post('/account',account.create);
   router.post('/accountrole',account.createrole);
  
   router.use(AuthMiddleWare.isAuth);
   router.delete('account/:id/:roleid',account.update)
   router.put('/tour/:id',tourcontroller.update);
   router.post('/tour',tourcontroller.create);
   router.delete('/tour/:id/:status',tourcontroller.delete);
   router.put('/hotel/:id',hotelcontroller.update);
   router.post('/hotel',hotelcontroller.create);
   router.delete('/hotel/:id/:status',hotelcontroller.delete);
   router.put('/flight/:id',flightcontroller.update);
   router.post('/flight',flightcontroller.create);
   router.delete('/flight/:id/:status',flightcontroller.delete);
   router.post('/tourdetail',TourDetails.create);
   router.put('/tourdetail/:id',TourDetails.update);
   router.post('/tourschedule',tourschedules.create);
   router.put('/tourschedule/:id',tourschedules.update);
   router.post('/order',order.create);
   router.put('/order/:id',order.update);
   router.delete('/order/:id/:status',order.delete);
   router.post('/orderdetail/:tourdetailid',orderdetail.create);
   router.put('/orderdetail/:orderid/:tourdetailid',orderdetail.update);
   router.post('/create_payment_url', order.redirtoryVNPay);
 
   // Sử dụng authMiddleware.isAuth trước những api cần xác thực

  //  router.use(AuthMiddleWare.isAuth);
   
   // router.get("/example-protect-api", ExampleController.someAction);
  router.get("/login",logincontroller.getAll);
   return app.use("/api/v1", router);
 }
 
 module.exports = initAPIs;