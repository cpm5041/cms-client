'use strict'

const showBlogsTemplate = require('../templates/blog-listing.handlebars')
const showUserBlogs = require('../templates/user-blogs.handlebars')

// handles success and fail of blog create, read, update, and destroy

const createBlogSuccess = (data) => {
  // resets form fields to be blank after success
  $('#blogTitleBox').val('')
  $('#blogBodyBox').val('')
  $('#success-blog-create-alert').alert()
  $('#success-blog-create-alert').fadeTo(1500, 500).slideUp(500, () => {
    $('#success-blog-create-alert').slideUp(500)
  })
  $('html, body').animate({ scrollTop: 0 }, 'fast')
}

const createBlogFailure = (error) => {
  console.error(error)
    // user feedback messages
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
  // if logic to handle showing a message to the user if they have posted no blogs
  if (data.posts.length === 0) {
    $('#userHandlebarBody-blog').html('You have not posted any blogs')
    // else condition to show blogs
  } else {
    const showUserBlogsHtml = showUserBlogs({
      posts: data.posts
    })
    $('#userHandlebarBody-blog').html(showUserBlogsHtml)
  }
}

const getCurrentUserBlogsFail = (data) => {

}

const updateCurrentUserBlogsSuccess = (data) => {
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('#success-blog-update-alert').alert()
  $('#success-blog-update-alert').fadeTo(1500, 500).slideUp(500, () => {
    $('#success-blog-update-alert').slideUp(500)
  })
  $('html, body').animate({ scrollTop: 0 }, 'fast')
}

const updateCurrentUserBlogsFail = (data) => {
  $('#fail-blog-update-alert').alert()
  $('#fail-blog-update-alert').fadeTo(1500, 500).slideUp(500, () => {
    $('#fail-blog-update-alert').slideUp(500)
  })
  $('html, body').animate({ scrollTop: 0 }, 'fast')
}

const deleteCurrentUserBlogsSuccess = (data) => {
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
