'use strict'

const showVisitorBlogsTemplate = require('../templates/visitor-blog-listing.handlebars')
const showBlogsTemplate = require('../templates/blog-listing.handlebars')
const showUserBlogs = require('../templates/user-blogs.handlebars')
const store = require('../store')
const showSingleBlogTemplate = require('../templates/single-blog-listing.handlebars')
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
const createCommentSuccess = data => {
  console.log('in createCommentSuccess', data)
}
const createCommentFailure = data => {
  console.log('in createCommentFailure, data is ', data)
}
const updateCurrentUserComments = data => {
  console.log('in updateCommentSuccess', data)
}
const updateCurrentUserCommentsFail = data => {
  console.log('in updateCommentFailure, data is ', data)
}
const createBlogFailure = () => {
    // user feedback messages
  $('#fail-blog-create-alert').alert()
  $('#fail-blog-create-alert').fadeTo(1500, 500).slideUp(500, () => {
    $('#fail-blog-create-alert').slideUp(500)
  })
  $('html, body').animate({ scrollTop: 0 }, 'fast')
}
// const commentEditable = function (posts) {
//   console.log('posts are', posts)
//   return posts.forEach(post => {
//     post.comments.forEach(comment => {
//       if (comment.postedByEmail === store.user.email) {
//         comment.editComment = true
//       } else {
//         comment.editComment = false
//       }
//     })
//   }
//   )
// }

const getVisitorBlogsSuccess = (data) => {
  const showVisitorBlogsHtml = showVisitorBlogsTemplate({
    posts: data.posts
  })
  $('.visitorBlogDiv2').html(showVisitorBlogsHtml)
}

const getBlogsSuccess = (data) => {
  data.posts.forEach(post => {
    post.comments.forEach(comment => {
      if (comment.postedByEmail === store.user.email) {
        comment.editComment = true
      } else {
        comment.editComment = false
      }
    })
  }
  )
  console.log('data. posts are', data.posts)
  const showBlogsHtml = showBlogsTemplate({
    posts: data.posts,
    email: store.user.email
  })
  console.log('email is', store.user.email)
  $('.visitorBlogDiv').html(showBlogsHtml)
  $(`.commentListShow`).hide()
  $('.updateForm').hide()
  $('.updateComment').val('')
}
const getBlogsCreateSuccess = (data) => {
  data.posts.forEach(post => {
    post.comments.forEach(comment => {
      if (comment.postedByEmail === store.user.email) {
        comment.editComment = true
      } else {
        comment.editComment = false
      }
    })
  }
  )
  console.log('data. posts are', data.posts)
  const showBlogsHtml = showBlogsTemplate({
    posts: data.posts,
    email: store.user.email
  })
  console.log('email is', store.user.email)
  $('.visitorBlogDiv').html(showBlogsHtml)
  $('.updateComment').val('')
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
const deleteCurrentUserCommentsSuccess = (data) => {
  console.log(data)
}
const deleteCurrentUserCommentsFail = (data) => {
  console.log(data)
}
const showSingleBlogSuccess = data => {
  console.log('ui success', data)
  // const showSingleBlogsHtml = showSingleBlogTemplate({
  //   post: data.post,
  //   email: store.user.email
  // })
  console.log('email is', store.user.email)
  // $('.visitorBlogDiv').html(showSingleBlogsHtml)
  // $('.updateComment').val('')
}
module.exports = {
  createBlogSuccess,
  createBlogFailure,
  getBlogsSuccess,
  getCurrentUserBlogsSuccess,
  getCurrentUserBlogsFail,
  updateCurrentUserBlogsSuccess,
  updateCurrentUserBlogsFail,
  deleteCurrentUserBlogsSuccess,
  createCommentSuccess,
  createCommentFailure,
  deleteCurrentUserCommentsSuccess,
  deleteCurrentUserCommentsFail,
  updateCurrentUserComments,
  updateCurrentUserCommentsFail,
  getVisitorBlogsSuccess,
  showSingleBlogSuccess,
  showSingleBlogTemplate,
  getBlogsCreateSuccess
}
