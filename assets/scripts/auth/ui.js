'use strict'

const store = require('../store')
const api = require('./api')
// const showItemsTemplate = require('../templates/item-listing-grid.handlebars')

const signUpSuccess = (data) => {
  store.user = data.user
  const credentials = {
    email: $('#sign-up-email').val(),
    password: $('#sign-up-password').val()
  }
  api.signIn({ credentials })
    .then(signInSuccess)
    .catch(signInFailure)
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirmation').val('')

  $('#sign-up-modal').modal('hide')
  $('#sign-in-modal').modal('show')
}

const signUpFailure = (error) => {
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirmation').val('')
  // $('#sign-up-status').show()
}

const signInSuccess = (data) => {
  store.user = data.user // this stores the entire user object
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
  $('#sign-in-modal').modal('toggle')
  // $('nav').show()
  // $('.splash-jumbo').hide()
  // $('.item-jumbo').show()
}

const signInFailure = (error) => {
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
  // $('#sign-in-status').show()
}

const signOutSuccess = () => {
  store.user = null

  // $('.splash-jumbo').show()
  // $('nav').hide()
  // $('.item-jumbo').hide()
  // $('#bs-example-navbar-collapse-1').collapse('hide')
  // $('#collapseTwo').collapse('hide')
  // $('.item_input').val('')
}

const signOutFailure = (error) => {

}

const changePasswordSuccess = (data) => {
  $('#old-password').val('')
  $('#new-password').val('')
  $('#change-password-modal').modal('toggle')
}

const changePasswordFailure = (error) => {
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
