'use strict'

const config = require('../config')
const store = require('../store')

// The following functions are used to send various CRUD requests to our API

// post request to create a blog
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
// post request to create a comment
const createComment = (data, id) => {
  return $.ajax({
    url: config.apiOrigin + '/posts/' + id + '/comments',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// get request to read all blogs
const getBlogs = function () {
  return $.ajax({
    url: config.apiOrigin + '/posts',
    method: 'GET'
  })
}

// get request to read blogs for the current_user
const getCurrentUserBlogs = function () {
  return $.ajax({
    url: config.apiOrigin + '/userposts/' + store.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// patch request to update a blog created by the current user
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

// delete request to destroy a blog created by the current user
const deleteCurrentUserBlogs = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/posts/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// delete request to destroy a blog created by the current user
const deleteCurrentUserComment = (data, id) => {
  return $.ajax({
    url: config.apiOrigin + '/posts/' + data + '/comments/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// patch request to update a comment created by the current user
const updateCurrentUserComments = (data, postId, commentId) => {
  return $.ajax({
    url: config.apiOrigin + '/posts/' + postId + '/comments/' + commentId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
module.exports = {
  createBlog,
  getBlogs,
  getCurrentUserBlogs,
  updateCurrentUserBlogs,
  deleteCurrentUserBlogs,
  createComment,
  deleteCurrentUserComment,
  updateCurrentUserComments
}
