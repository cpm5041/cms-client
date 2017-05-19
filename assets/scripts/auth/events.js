'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  // assign input from form fields to data
  const data = getFormFields(event.target) // 'this' is reffering to event.target
  // prevent default action
  event.preventDefault()
  // send ajax request
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  // prevent default action
  event.preventDefault()
  //  assign input from form fields to data
  const data = getFormFields(event.target) // 'this' is reffering to event.target
  // send ajax request
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  // prevent default action
  event.preventDefault()
  // send ajax request
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  // prevent default action
  event.preventDefault()
  // assign input information to data
  const data = getFormFields(event.target)
  // send ajax request
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// event handlers for auth events
const addAuthHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-up-modal-trigger-link').on('click', function () {
    $('#sign-in-modal').modal('hide')
  })
  $('#change-password-modal-link').on('click', function () {
    $('.change-password-input').val('')
  })
}

module.exports = {
  addAuthHandlers
}
