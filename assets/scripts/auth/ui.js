'use strict'

const store = require('../store')
const api = require('./api')

const signUpSuccess = (data) => {
  // store user information
  store.user = data.user
  // store values from sign up input fields
  const credentials = {
    email: $('#sign-up-email').val(),
    password: $('#sign-up-password').val()
  }
  // use credentials to sign user in
  api.signIn({ credentials })
    .then(signInSuccess)
    .catch(signInFailure)
  // clear input fields
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirmation').val('')
  // hide modals
  $('#sign-up-modal').modal('hide')
  $('#sign-in-modal').modal('show')
}

const signUpFailure = (error) => {
  // clear input values
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirmation').val('')
  // notify user of issue
  $('#sign-up-error').text('You may have entered invalid credentials, please try again.')
}

const signInSuccess = (data) => {
  // store user data
  const userEmail = data.user.email
  store.user = data.user // this stores the entire user object
  // welcome user message
  $('#welcomeEmail').html('Welcome ' + userEmail)
  // clear input fields
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
  // toggle modal
  $('#sign-in-modal').modal('toggle')
  // show user view
  $('.visitor-view').addClass('hidden')
  $('.user-view').removeClass('hidden')
  $('.signedInComment').removeClass('hidden')
}

const signInFailure = (error) => {
  // clear input fields
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
  // notify user of sign in failure with message
  $('#sign-in-error').text('You may have entered invalid credentials, please try again.')
}

const signOutSuccess = () => {
  // clear user data from store
  store.user = null
  // remove user welcome message
  $('#welcomeEmail').html('')
  // adjust hidden classes
  $('.visitor-view').removeClass('hidden')
  $('.user-view').addClass('hidden')
  $('#recent-blogs').text('Click the tab to view content')
  $('#recent-blogs').addClass('active')
  $('#showBlogButton').addClass('active')
  $('#recent-pages').text('')
  $('#recent-pages').removeClass('active')
  $('#showPageButton').removeClass('active')
  $('#tabs a[href="#create-blog"]').tab('show')
  $('#tabs a[href="#recent-blogs"]').tab('show')
  $('#blogCreateForm').trigger('reset')
  $('#create-page-form').trigger('reset')
  $('.signedInComment').addClass('hidden')
}

const signOutFailure = (error) => {

}

const changePasswordSuccess = (data) => {
  // clear input fields
  $('#old-password').val('')
  $('#new-password').val('')
  // toggle change password modal
  $('#change-password-modal').modal('toggle')
}

const changePasswordFailure = (error) => {
  // notify user of unsuccessful password change with message
  $('#change-password-failure').text('You may have an invalid password, please try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure
}
