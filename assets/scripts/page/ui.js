'use strict'

// const store = require('../store')
// const api = require('./api')
// const showItemsTemplate = require('../templates/item-listing-grid.handlebars')
// const showPageTemplate = require('../templates/page-listing.handlebars')
const showUserPages = require('../templates/user-pages.handlebars')
const showOthersPages = require('../templates/see-others-pages.handlebars')

const createPageSuccess = (data) => {
  // clear values in fields
  $('#create-page-title').val('')
  $('#create-page-body').val('')
  $('#create-page-footer').val('')
  $('#create-page-template').val('defaultTemplate')
  $('#success-page-create-alert').alert()
  $('#success-page-create-alert').fadeTo(1500, 500).slideUp(500, () => {
    $('#success-page-create-alert').slideUp(500)
  })
  $('html, body').animate({ scrollTop: 0 }, 'fast')
}

const createPageFailure = () => {
  $('#fail-page-create-alert').alert()
  $('#fail-page-create-alert').fadeTo(1500, 500).slideUp(500, () => {
    $('#fail-page-create-alert').slideUp(500)
  })
  $('html, body').animate({ scrollTop: 0 }, 'fast')
}

const getPagesSuccess = (data) => {
  const showPagesHtml = showOthersPages({
    pages: data.pages
  })
  $('.visitorPageDiv').html(showPagesHtml)
}

const getCurrentUserPagesSuccess = (data) => {
  if (data.pages.length === 0) {
    $('#userHandlebarBody-page').html('You have not published any pages')
  } else {
    const showUserPagesHtml = showUserPages({
      pages: data.pages
    })
    $('#userHandlebarBody-page').html(showUserPagesHtml)
  }
}

const getCurrentUserPagesFail = (data) => {
}

const updateCurrentUserPagesSuccess = (data) => {
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('#success-page-update-alert').alert()
  $('#success-page-update-alert').fadeTo(1500, 500).slideUp(500, () => {
    $('#success-page-update-alert').slideUp(500)
  })
  $('html, body').animate({ scrollTop: 0 }, 'fast')
}

const updateCurrentUserPagesFail = (data) => {
  $('#fail-page-update-alert').alert()
  $('#fail-page-update-alert').fadeTo(1500, 500).slideUp(500, () => {
    $('#fail-page-update-alert').slideUp(500)
  })
  $('html, body').animate({ scrollTop: 0 }, 'fast')
}

const deleteCurrentUserPagesSuccess = (data) => {
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('.page-delete-alert-success').alert()
  $('.page-delete-alert-success').fadeTo(1500, 500).slideUp(500, () => {
    $('.page-delete-alert-success').slideUp(500)
  })
  $('html, body').animate({ scrollTop: 0 }, 'fast')
}

const getOthersPagesSuccess = (data) => {
  const showOthersPagesHtml = showOthersPages({
    pages: data.pages
  })
  $('#all-pages').html(showOthersPagesHtml)
}

module.exports = {
  createPageSuccess,
  createPageFailure,
  getPagesSuccess,
  getCurrentUserPagesSuccess,
  getCurrentUserPagesFail,
  updateCurrentUserPagesSuccess,
  updateCurrentUserPagesFail,
  deleteCurrentUserPagesSuccess,
  getOthersPagesSuccess
}
