'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateBlog = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target) // same as this
  api.createBlog(data)
    .then(ui.createBlogSuccess)
    .catch(ui.createBlogFailure)
    // .done(onGetPosts)
}
const onGetBlogs = (event) => {
  // event.preventDefault()
  api.getBlogs()
    .then(ui.getBlogsSuccess)
    .catch(ui.getBlogsfailure)
}
const addBlogHandlers = () => {
  $('#create-blog-form').on('submit', onCreateBlog)
  $('#showBlogButton').on('click', onGetBlogs)
}

module.exports = {
  addBlogHandlers,
  onGetBlogs
}
