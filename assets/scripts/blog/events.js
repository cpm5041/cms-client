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

const addBlogHandlers = () => {
  $('#create-blog-form').on('submit', onCreateBlog)
}

module.exports = {
  addBlogHandlers
}
