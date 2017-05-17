'use strict'

// const store = require('../store')
// const api = require('./api')
const showBlogsTemplate = require('../templates/blog-listing.handlebars')
const showUserBlogs = require('../templates/user-blogs.handlebars')

const createBlogSuccess = (data) => {
  console.log('create blog success')
}

const createBlogFailure = (error) => {
  console.log('create blog fail')
  console.log(error)
}
const getBlogsSuccess = (data) => {
  console.log('inside get blogs, data is', data)
  const showBlogsHtml = showBlogsTemplate({
    posts: data.posts
  })
  $('.visitorBlogDiv').html(showBlogsHtml)
}

const getCurrentUserBlogsSuccess = (data) => {
  console.log('current user blog. data is:', data)
  const showUserBlogsHtml = showUserBlogs({
    posts: data.posts
  })
  $('#userHandlebarBody').html(showUserBlogsHtml)
}

const getCurrentUserBlogsFail = (data) => {
  console.log('current user blog fail')
}

const updateCurrentUserBlogsSuccess = (data) => {
  console.log('update blog success')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}
const updateCurrentUserBlogsFail = (data) => {
  console.log('current user blog fail')
}
const deleteCurrentUserBlogsSuccess = (data) => {
  console.log('delete blog success')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

module.exports = {
  createBlogSuccess,
  createBlogFailure,
  getBlogsSuccess,
  getCurrentUserBlogsSuccess,
  getCurrentUserBlogsFail,
  updateCurrentUserBlogsSuccess,
  updateCurrentUserBlogsFail,
  deleteCurrentUserBlogsSuccess
}
