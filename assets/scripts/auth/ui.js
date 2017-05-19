'use strict'

const store = require('../store')
const api = require('./api')
// const showItemsTemplate = require('../templates/item-listing-grid.handlebars')

const signUpSuccess = (data) => {
  // store user information
  store.user = data.user
  console.log('signup success')
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
  console.log('sign up fail')
  console.log(error)
  // clear input values
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirmation').val('')
  // notify user of issue
  $('#sign-up-error').text('You may have entered invalid credentials, please try again.')
  // $('#sign-up-status').show()
}

const signInSuccess = (data) => {
  console.log('sign in success, data: ', data)
  // store user data
  const userEmail = data.user.email
  console.log(userEmail)
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
}

const signInFailure = (error) => {
  console.log('sign in fail')
  // clear input fields
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
  // notify user of sign in failure with message
  $('#sign-in-error').text('You may have entered invalid credentials, please try again.')
  console.log(error)
  // $('#sign-in-status').show()
}

const signOutSuccess = () => {
  // clear user data from store
  store.user = null
  // remove user welcome message
  $('#welcomeEmail').html('')
  console.log('sign out success')
  // adjust hidden classes
  $('.visitor-view').removeClass('hidden')
  $('.user-view').addClass('hidden')
  $('#recent-blogs').text('Click the tab to view recent content')
  $('#recent-blogs').addClass('active')
  $('#showBlogButton').addClass('active')
  $('#recent-pages').text('')
  $('#recent-pages').removeClass('active')
  $('#showPageButton').removeClass('active')
  // $('#toggleClass').addClass('active')
  // $('.visitorPageDiv').removeClass('active')

  // $('.splash-jumbo').show()
  // $('nav').hide()
  // $('.item-jumbo').hide()
  // $('#bs-example-navbar-collapse-1').collapse('hide')
  // $('#collapseTwo').collapse('hide')
  // $('.item_input').val('')
  // ADD THE TABS ID TO THE HTML ELEMENT!!!!
  $('#tabs a[href="#create-blog"]').tab('show')
  $('#tabs a[href="#recent-blogs"]').tab('show')
}

const signOutFailure = (error) => {
  console.log('sign out fail')
  console.log(error)
}

const changePasswordSuccess = (data) => {
  console.log('change pass success')
  // clear input fields
  $('#old-password').val('')
  $('#new-password').val('')
  // toggle change password modal
  $('#change-password-modal').modal('toggle')
}

const changePasswordFailure = (error) => {
  console.log('change pass fail')
  // notify user of unsuccessful password change with message
  $('#change-password-failure').text('You may have an invalid password, please try again.')
  console.log(error)
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
