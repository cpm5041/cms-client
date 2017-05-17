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

const getPages = function () {
  return $.ajax({
    url: config.apiOrigin + '/pages', // "http://book-json.herokuconfig.com/books"
    method: 'GET'
  })
}

const getCurrentUserPages = function () {
  console.log(store.user.id)
  return $.ajax({
    url: config.apiOrigin + '/userpages/' + store.user.id, // "http://book-json.herokuconfig.com/books"
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateCurrentUserPages = (pageId, data) => {
  return $.ajax({
    url: config.apiOrigin + '/pages/' + pageId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createPage,
  getPages,
  getCurrentUserPages,
  updateCurrentUserPages
}
