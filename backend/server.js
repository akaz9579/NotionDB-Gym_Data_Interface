const express = require('express');
const {Client} = require('@notionhq/client');
const cors = require('cors');
require('dotenv').config();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const app = express();

app.use(cors());

const PORT  = 4000;
const HOST = 'localhost'

const notion = new Client({ auth: process.env.NOTION_TOKEN });

const databaseID = "1f0b99c6873380f3bccae6c03718d7f3";


app.get("/api/test",(req,res)=>  {
    res.status(200).send('You got 5 notes')
});  

//set up server on host 
app.listen(4000, () => {
    console.log("Server started on PORT:4000")
});
