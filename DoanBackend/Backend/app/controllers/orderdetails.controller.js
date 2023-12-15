var OrderDetails = require('../models/orderdetails.model');
var model = new OrderDetails();
const url = require('url');
exports.create =async function(req,res){
    model.create(req.params.tourdetailid,req.body,function(err,data){
        if(!err){
            res.send({result:data});
        }else{
            res.send({result:null,error: err});
        }
    })
}
exports.update =async function(req,res){
    model.update(req.params.orderid,req.params.tourdetailid,req.body,function(err,data){
        if(!err){
            res.send({result:data});
        }else{
            res.send({result:null,error: err});
        }
    })
}