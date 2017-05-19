'use strict'

// const store = require('../store')
// const api = require('./api')
const showBlogsTemplate = require('../templates/blog-listing.handlebars')
const showUserBlogs = require('../templates/user-blogs.handlebars')

const createBlogSuccess = (data) => {
  console.log('create blog success')
  $('#blogTitleBox').val('')
  $('#blogBodyBox').val('')
  $('#success-blog-create-alert').alert()
  $('#success-blog-create-alert').fadeTo(1500, 500).slideUp(500, () => {
    $('#success-blog-create-alert').slideUp(500)
  })
  $('html, body').animate({ scrollTop: 0 }, 'fast')
}

const createBlogFailure = (error) => {
  console.log('create blog fail')
  console.log(error)
  $('#fail-blog-create-alert').alert()
  $('#fail-blog-create-alert').fadeTo(1500, 500).slideUp(500, () => {
    $('#fail-blog-create-alert').slideUp(500)
  })
  $('html, body').animate({ scrollTop: 0 }, 'fast')
}
const getBlogsSuccess = (data) => {
  console.log('inside get blogs, data is', data)
  const showBlogsHtml = showBlogsTemplate({
    posts: data.posts
  })
  $('.visitorBlogDiv').html(showBlogsHtml)
}

const getCurrentUserBlogsSuccess = (data) => {
  if (data.posts.length === 0) {
    $('#userHandlebarBody-blog').html('You have not posted any blogs')
  } else {
    const showUserBlogsHtml = showUserBlogs({
      posts: data.posts
    })
    $('#userHandlebarBody-blog').html(showUserBlogsHtml)
  }
}

const getCurrentUserBlogsFail = (data) => {
  console.log('current user blog fail')
}

const updateCurrentUserBlogsSuccess = (data) => {
  console.log('update blog success')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('#success-blog-update-alert').alert()
  $('#success-blog-update-alert').fadeTo(1500, 500).slideUp(500, () => {
    $('#success-blog-update-alert').slideUp(500)
  })
  $('html, body').animate({ scrollTop: 0 }, 'fast')
}

const updateCurrentUserBlogsFail = (data) => {
  console.log('current user blog fail')
  $('#fail-blog-update-alert').alert()
  $('#fail-blog-update-alert').fadeTo(1500, 500).slideUp(500, () => {
    $('#fail-blog-update-alert').slideUp(500)
  })
  $('html, body').animate({ scrollTop: 0 }, 'fast')
}

const deleteCurrentUserBlogsSuccess = (data) => {
  console.log('delete blog success')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('.blog-delete-alert-success').alert()
  $('.blog-delete-alert-success').fadeTo(1500, 500).slideUp(500, () => {
    $('.blog-delete-alert-success').slideUp(500)
  })
  $('html, body').animate({ scrollTop: 0 }, 'fast')
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
