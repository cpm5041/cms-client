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

const getCurrentUserBlogs = function () {
  console.log(store.user.id)
  return $.ajax({
    url: config.apiOrigin + '/userposts/' + store.user.id, // "http://book-json.herokuconfig.com/books"
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateCurrentUserBlogs = (postId, data) => {
  return $.ajax({
    url: config.apiOrigin + '/posts/' + postId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteCurrentUserBlogs = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/posts/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createBlog,
  getBlogs,
  getCurrentUserBlogs,
  updateCurrentUserBlogs,
  deleteCurrentUserBlogs
}
