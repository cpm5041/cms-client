'use strict'

const config = require('../config')
const store = require('../store')

const createBlog = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/posts',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getBlogs = function () {
  return $.ajax({
    url: config.apiOrigin + '/posts', // "http://book-json.herokuconfig.com/books"
    method: 'GET'
  })
}

module.exports = {
  createBlog,
  getBlogs
}
