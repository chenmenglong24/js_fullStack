var express = require('express')
var router = express.Router()
var mysql = require('mysql')

var data = {
  code: 200,
  msg: 'success'
}

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123123',
  database: 'trip'
})

// 开始请求