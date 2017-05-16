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

module.exports = {
  createBlog
}
