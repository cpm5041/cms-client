'use strict'

// const store = require('../store')
// const api = require('./api')
// const showItemsTemplate = require('../templates/item-listing-grid.handlebars')
// const showPageTemplate = require('../templates/page-listing.handlebars')
const showUserPages = require('../templates/user-pages.handlebars')
const showOthersPages = require('../templates/see-others-pages.handlebars')

const createPageSuccess = (data) => {
  console.log('create page success')
  $('#create-page-title').val('')
  $('#create-page-body').val('')
  $('#create-page-footer').val('')
  $('#create-page-template').val('defaultTemplate')
}

const createPageFailure = (error) => {
  console.log('create page fail')
  console.log(error)
}

const getPagesSuccess = (data) => {
  console.log('inside get page, data is', data)
  const showPagesHtml = showOthersPages({
    pages: data.pages
  })
  $('.visitorPageDiv').html(showPagesHtml)
}

const getCurrentUserPagesSuccess = (data) => {
  console.log('current user blog. data is:', data)
  const showUserPagesHtml = showUserPages({
    pages: data.pages
  })
  $('#userHandlebarBody-page').html(showUserPagesHtml)
}

const getCurrentUserPagesFail = (data) => {
  console.log('current user blog fail')
}

const updateCurrentUserPagesSuccess = (data) => {
  console.log('update page success')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

const updateCurrentUserPagesFail = (data) => {
  console.log('update page fail')
}

const deleteCurrentUserPagesSuccess = (data) => {
  console.log('delete blog success')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
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
