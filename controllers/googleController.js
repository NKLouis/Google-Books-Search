const axios = require ("axios");
const db = require("../models");

module.exports = {


    findAll: function(req, res){

        const{query: params} = req 

        axios.get("https://www.googleapis.com/books/v1/volumes", {params})
        .then(results => results.data.items.filter(
            result =>
            result.volumeInfo.title &&  
            result.volumeInfo.author &&
            result.volumeInfo.description &&  
            result.volumeInfo.image &&  
            result.volumeInfo.link  

        ))


    }


}