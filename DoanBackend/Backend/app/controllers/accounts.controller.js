var account = require('../models/account.model');
var model = new account();
const url = require('url');
const querystring = require('querystring');
// exports.getAll = async function(req,res){
//     //Select * from student
//     var query = url.parse(req.url,true).query;
//     model.getAll(query.page,query.limit,function(err,data){
//         if(!err){
//             const count = data.recordsets[1][0];
//             console.log(count);
//             sumpage = count.Total / query.limit;
//             page = parseInt(query.page);
//             limit = parseInt(query.limit)
//             var totalpage;
//             if(parseFloat(sumpage)){
//                 totalpage = Math.ceil(sumpage);
//                 console.log(totalpage);
//             }
//             const tours = { 
//                 records: data.recordsets[0],
//                 page: page,
//                 limit: limit,
//                 filtered: count.Filtered,
//                 totalItems: count.Total,
//                 totalPages: totalpage
//             };
//             res.send(tours);
//         }else{
//             res.send({result:null,error: err});
//         }
//     });
        
//     }
exports.getAll = async function(req,res){
    //Select * from student
    var query = url.parse(req.url,true).query;
    model.getAll(query.page,query.limit,function(err,data){
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
    exports.update = async function(req,res){
        model.update(req.params.id,req.params.roleid,function(err,data){
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
                res.send({result:null,error: err});
            }
        })
    }
    exports.createrole =async function(req,res){
      model.createrole(req.body,function(err,data){
          if(!err){
              res.send({result:data});
          }else{
              res.send({result:null,error: err});
          }
      })
  }
