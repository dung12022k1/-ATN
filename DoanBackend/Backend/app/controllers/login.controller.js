var TourCategories = require('../models/login.model');
var model = new TourCategories();
exports.getAll = async function(req,res){
    //Select * from student
    const friends = [
        {
          name: "Cat: Russian Blue",
        },
        {
          name: "Cat: Maine Coon",
        },
        {
          name: "Cat: Balinese",
        },
      ];
      return res.status(200).json(friends);    
    }
