var Orders = require('../models/order.model');
const url = require('url');
const querystring = require('querystring');
const { parse } = require('path');
const { error } = require('console');
var model = new Orders();
exports.getAll = async function(req,res){
    //Select * from student
    var query = url.parse(req.url,true).query;
    model.getAll(query.page,query.limit,query.search,query.orderby,query.orderdir,query.unitprice,query.unitprice1,query.totalprice,query.totalprice1,query.departureat,query.status,function(err,data){
        if(!err){
            const count = data.recordsets[1][0];
            console.log(count);
            sumpage = count.Total / query.limit;
            page = parseInt(query.page);
            limit = parseInt(query.limit)
            var totalpage;
            if(parseFloat(sumpage)){
                totalpage = Math.ceil(sumpage);
                console.log(totalpage);
            }
            const orders = { 
                records: data.recordsets[0],
                page: page,
                limit: limit,
                filtered: count.Filtered,
                totalItems: count.Total,
                totalPages: totalpage
            };
            res.send(orders);
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


exports.redirtoryVNPay = async function (req, res) {
    let date = new Date();
    let tmnCode = "OIFD7VEQ";
    let secretKey = "AEHKWTAAPJIICYONXAIAIQALJUNEBDVA";
    let vnpUrl = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
    //let returnUrl = "http://localhost:8080/order/vnpay_return";
    let returnUrl = "http://localhost:8080/historycart";

                    //http://localhost:8080/order/vnpay_return
    let amount = req.body.amount;
    // let bankCode = "TechComBank";
    let locale = 'vn';
    let currCode = 'VND';
    let vnp_Params = {};
    const firstOrder = 'Thanh toan cho ma GD:';
    const secondOrder = req.body.orderID;
    var orderIDName =  firstOrder + secondOrder;
    vnp_Params['vnp_Version'] = '2.1.0';
    vnp_Params['vnp_Command'] = 'pay';
    vnp_Params['vnp_TmnCode'] = tmnCode;
    vnp_Params['vnp_Locale'] = locale;
    vnp_Params['vnp_CurrCode'] = currCode;
    vnp_Params['vnp_TxnRef'] = req.body.orderID;
    vnp_Params['vnp_OrderInfo'] = orderIDName;
    vnp_Params['vnp_OrderType'] = 'other';
    vnp_Params['vnp_Amount'] = amount * 2300000;
    vnp_Params['vnp_ReturnUrl'] = returnUrl;
    vnp_Params['vnp_IpAddr'] = '127.0.0.1';
    vnp_Params['vnp_CreateDate'] = req.body.vnpCreateDate;
    // if(bankCode !== null && bankCode !== ''){
    //     vnp_Params['vnp_BankCode'] = '';
    // }

    vnp_Params = sortObject(vnp_Params);

    let querystring = require('qs');
    let signData = querystring.stringify(vnp_Params, { encode: false });
    let crypto = require("crypto");
    let hmac = crypto.createHmac("sha512", secretKey);
    let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");
    vnp_Params['vnp_SecureHash'] = signed;
    vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });
    res.send({result:vnpUrl});
}

function sortObject(obj) {
	let sorted = {};
	let str = [];
	let key;
	for (key in obj){
		if (obj.hasOwnProperty(key)) {
		str.push(encodeURIComponent(key));
		}
	}
	str.sort();
    for (key = 0; key < str.length; key++) {
        sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
    }
    return sorted;
}