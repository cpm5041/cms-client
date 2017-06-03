'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

// The following functions handled the events associated with creating, deleting, updating, and reading blogs
const checkForBlanks = function (data) {
  // check to see if user entered valid values in form fields
  const userTitle = (data.post.title).replace(/ +?/g, '')
  const userBody = (data.post.body).replace(/ +?/g, '')
  if ((userTitle.length === 0) || (userBody.length === 0)) {
    // if not valid - return true
    return true
  } else {
    // if valid - return false
    return false
  }
}

const onCreateBlog = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (checkForBlanks(data)) {
    // if invalid - notify user and do not send to API
    $('.updateerror').text('An error occurred. You must fill in all fields in order to create an item.')
    // user validation for blog creation fail
    $('#fail-blog-create-alert').alert()
    $('#fail-blog-create-alert').fadeTo(1500, 500).slideUp(500, () => {
      $('#fail-blog-create-alert').slideUp(500)
    })
    $('html, body').animate({ scrollTop: 0 }, 'fast')
  } else {
    api.createBlog(data)
      .then(ui.createBlogSuccess)
      .catch(ui.createBlogFailure)
  }
}
const onCreateComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(this).attr('data-id')
  // if (checkForBlanks(data)) {
  //   // if invalid - notify user and do not send to API
  //   $('.updateerror').text('An error occurred. You must fill in all fields in order to create an item.')
  //   // user validation for blog creation fail
  //   $('#fail-blog-create-alert').alert()
  //   $('#fail-blog-create-alert').fadeTo(1500, 500).slideUp(500, () => {
  //     $('#fail-blog-create-alert').slideUp(500)
  //   })
  //   $('html, body').animate({ scrollTop: 0 }, 'fast')
  // } else {
  console.log('in createCommentEvent, data is ', data)
  console.log('id is', id)
  api.createComment(data, id)
      .then(ui.createCommentSuccess)
      .catch(ui.createCommentFailure)
      .done(onGetBlogs)
  // }
}

const onGetVisitorBlogs = (event) => {
  api.getBlogs()
    .then(ui.getVisitorBlogsSuccess)
    .catch(ui.getBlogsfailure)
}
const onGetBlogs = (event) => {
  api.getBlogs()
    .then(ui.getBlogsSuccess)
    .catch(ui.getBlogsfailure)
}

const onGetCurrentUserBlogs = function () {
  api.getCurrentUserBlogs()
    .then(ui.getCurrentUserBlogsSuccess)
    .catch(ui.getCurrentUserBlogsFail)
}

const onUpdateCurrentUserBlogs = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (checkForBlanks(data)) {
    // if invalid - notify user and do not send to API
    $('.updateerror').text('An error occurred. You must fill in all fields in order to create an item.')
    $('#fail-blog-update-alert').alert()
    $('#fail-blog-update-alert').fadeTo(1500, 500).slideUp(500, () => {
      $('#fail-blog-update-alert').slideUp(500)
    })
    $('html, body').animate({ scrollTop: 0 }, 'fast')
  } else {
    const postId = $(this).attr('data-id')
    api.updateCurrentUserBlogs(postId, data)
      .then(ui.updateCurrentUserBlogsSuccess)
      .catch(ui.updateCurrentUserBlogsFail)
      .done(onGetCurrentUserBlogs)
  }
}

const onDeleteCurrentUserBlogs = function () {
  event.preventDefault()
  // makes sure that the data deleted is the data (blogs) of the current_user
  const data = $(this).attr('data-id')
  api.deleteCurrentUserBlogs(data)
    .then(ui.deleteCurrentUserBlogsSuccess)
    .catch(ui.deleteCurrentUserBlogsFail)
    .done(onGetCurrentUserBlogs)
}
const onDeleteCurrentUserComment = function () {
  event.preventDefault()
  // makes sure that the data deleted is the data (blogs) of the current_user
  const data = $(this).attr('data-id')
  const id = $(this).attr('data-toggle')
  console.log('in delete, data is ', data)
  console.log('id is', id)
  api.deleteCurrentUserComment(data, id)
    .then(ui.deleteCurrentUserCommentsSuccess)
    .catch(ui.deleteCurrentUserCommentsFail)
    .done(onGetCurrentUserBlogs)
    .done(onGetBlogs)
}

const refreshUpdatePostModal = function () {
  onGetCurrentUserBlogs()
}

const blogFieldListener = function (event) {
  if (event.which === 13) {
    event.preventDefault()
  }
}
const onUpdateComment = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  // if (checkForBlanks(data)) {
  //   // if invalid - notify user and do not send to API
  //   $('.updateerror').text('An error occurred. You must fill in all fields in order to create an item.')
  //   $('#fail-blog-update-alert').alert()
  //   $('#fail-blog-update-alert').fadeTo(1500, 500).slideUp(500, () => {
  //     $('#fail-blog-update-alert').slideUp(500)
  //   })
  //   $('html, body').animate({ scrollTop: 0 }, 'fast')
  // } else {
  const data = getFormFields(event.target)
  const postId = $(this).attr('data-id')
  const commentId = $(this).attr('data-toggle')
  console.log('in update, data is ', data)
  console.log('id is', postId)
  console.log('commentId', commentId)
  api.updateCurrentUserComments(data, postId, commentId)
      .then(ui.updateCurrentUserComments)
      .catch(ui.updateCurrentUserCommentsFail)
      .done(onGetBlogs)
  // }
}
const onUpdateCommentClick = function (event) {
  event.preventDefault()
  const commentId = $(this).attr('data-id')
  const postId = $(this).attr('data-toggle')
  console.log(commentId)
  console.log(postId)
  console.log('update buton clicked')
  // console.log($(".updateComment[data-id='commentId']").get())
  $('.updateForm' + commentId).show()
}
// event listeners
const onUpdateCommentHide = function (event) {
  event.preventDefault()
  const commentId = $(this).attr('data-id')
  $('.updateForm' + commentId).hide()
}
const onShowBlog = function (event) {
  event.preventDefault()
  const postId = $(this).attr('data-id')
  // $('.showBlog' + postId).hide()
  console.log('postId', postId)
  $('.hideBlogClass').not(`.this${postId}`).hide()
  $(`.this${postId} .commentListShow`).show()
  api.showBlog(postId)
  .then(ui.showSingleBlogSuccess)
  .catch(ui.showSingleBlogFail)
}
const addBlogHandlers = () => {
  $('#blogCreateForm').on('submit', onCreateBlog)
  $('#showBlogButton').on('click', onGetVisitorBlogs)
  $('#cur-user-blogs').on('click', onGetCurrentUserBlogs)
  $('.blogfield').keypress(blogFieldListener)
  $(document).on('keypress', '.blogfield', blogFieldListener)
  $(document).on('submit', '.update-post', onUpdateCurrentUserBlogs)
  $(document).on('submit', '.remove-post', onDeleteCurrentUserBlogs)
  $(document).on('hidden.bs.modal', '.update-post-modal', refreshUpdatePostModal)
  $('#all-blogs-tab').on('click', onGetBlogs)
  $(document).on('submit', '.add-comment', onCreateComment)
  $(document).on('click', '.removeComment', onDeleteCurrentUserComment)
  $(document).on('submit', '.updateComment', onUpdateComment)
  $(document).on('click', '.updateCommentButton', onUpdateCommentClick)
  $(document).on('click', '.updateCommentButtonHide', onUpdateCommentHide)
  $(document).on('click', '.showBlog', onShowBlog)
}

module.exports = {
  addBlogHandlers,
  onGetBlogs,
  onDeleteCurrentUserComment,
  onUpdateComment,
  onUpdateCommentClick,
  onUpdateCommentHide,
  onShowBlog
}
