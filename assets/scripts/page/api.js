'use strict'

const config = require('../config')
const store = require('../store')

const createPage = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/pages',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createPage
}
