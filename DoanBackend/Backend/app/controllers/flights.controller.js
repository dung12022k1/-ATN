var Tours = require('../models/flights.model');
const url = require('url');
const querystring = require('querystring');
var model = new Tours();
exports.getAll = async function(req,res){
    //Select * from student
    var query = url.parse(req.url,true).query;
    model.getAll(query.page,query.limit,query.search,query.orderby,query.orderdir,query.price,query.price1,query.departureat,query.returnat,query.departure,query.destination,function(err,data){
        if(!err){
            const count = data.recordsets[1][0];
            console.log(count);
            const tours = { 
                records: data.recordsets[0],
                page: query.page,
                limit: data.recordset.length,
                filtered: count.Filtered,
                totalrecords: count.Total,
            };
            res.send(tours);
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
exports.update = async function(req,res){
    model.update(req.params.id,req.body,function(err,data){
        if(!err){
            res.send({result:data});
        }else{
            res.send({result:null,error: err});
        }
    })
    
}
exports.create =async function(req,res){
    model.create(req.body,function(err,data){
        if(!err){
            res.send({result:data});
        }else{
            console.log(data)
            res.send({result:null,error: err});
        }
    })
}
exports.delete = async function(req,res){
    model.delete(req.params.id,req.params.status,function(err,data){
        if(!err){
            res.send({result:data});
        }else{
            res.send({result:null,error: err});
        }
    })
}