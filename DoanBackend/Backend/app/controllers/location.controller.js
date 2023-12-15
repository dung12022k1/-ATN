var Location = require('../models/location.model');
const url = require('url');
const querystring = require('querystring');
var model = new Location();
exports.getAll = async function(req,res){
    //Select * from student
    model.getAll(req.params.page,function(err,data){
        if(!err){
            const count = data.recordsets[1][0];
            console.log(count);
            const locations = { 
                records: data.recordsets[0],
                page: req.params.page,
                total: data.recordset.length,
                totalrecords: count.Total,
            };
            res.send(locations);
        }else{
            res.send({result:null,error: err});
        }
    });
        
    }
exports.getById = async function(req,res){
    var query = url.parse(req.url,true).query;
    model.getById(query.id,function(err,data){
        if(!err){
            res.send({result:data});
        }else{
            
            res.send({result:null,error: err});
        }
    });
}