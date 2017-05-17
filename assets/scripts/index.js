'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const blogEvents = require('./blog/events.js')
const pageEvents = require('./page/events.js')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addAuthHandlers()
  blogEvents.addBlogHandlers()
  pageEvents.addPageHandlers()
})

// upon click of sign in/up button; clear errors and input fields in modals
$(() => {
  $('#sign-in-modal-btn').on('click', function () {
    $('#sign-in-error').text('')
    $('#sign-up-error').text('')
    $('#sign-in').find('input:text, input:password, input:password, select, textarea').val('')
    $('#sign-up').find('input:text, input:password, input:password, select, textarea').val('')
  })
})

// upon click of change password button, clear error and input fields in modal
$(() => {
  $('#change-password-modal-link').on('click', function () {
    $('#change-password-failure').text('')
    $('#change-password').find('input:text, input:password, input:password, select, textarea').val('')
  })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
