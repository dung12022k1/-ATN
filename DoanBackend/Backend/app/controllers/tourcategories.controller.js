var TourCategories = require('../models/tourcategories.model');
var model = new TourCategories();
exports.getAll = async function(req,res){
    //Select * from student
    model.getAll(function(err,data){
        if(!err){
            res.send({result:data});
        }else{
            res.send({result:null,error: err});
        }
    });     
    }
exports.getById = async function(req,res){
    model.getById(req.params.id,function(err,data){
        if(!err){
            res.send({result:data});
        }else{
            res.send({result:null,error: err});
        }
    });
}