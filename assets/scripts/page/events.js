'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const checkForBlanks = function (data) {
  // check to see if user entered valid values in form fields
  if ((data.page.title === '') || (data.page.body === '')) {
    // if not valid - return true
    return true
  } else {
    // if valid - return false
    return false
  }
}

const onCreatePage = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target) // same as this
  if (checkForBlanks(data)) {
    // if invalid - notify user and do not send to API
    $('.updateerror').text('An error occurred. You must fill in all fields in order to create an item.')
  } else {
    api.createPage(data)
      .then(ui.createPageSuccess)
      .catch(ui.createPageFailure)
      // .done(onGetPages)
  }
}

const onGetPages = (event) => {
  // event.preventDefault()
  api.getPages()
    .then(ui.getPagesSuccess)
    .catch(ui.getPagesfailure)
}

const onGetCurrentUserPages = function () {
  console.log('get current user blogs click is heard')
  api.getCurrentUserPages()
    .then(ui.getCurrentUserPagesSuccess)
    .catch(ui.getCurrentUserPagesFail)
}

const onUpdateCurrentUserPages = function (event) {
  event.preventDefault()
  console.log(' update user pages click is heard')
  const data = getFormFields(event.target)
  if (checkForBlanks(data)) {
    // if invalid - notify user and do not send to API
    $('.updateerror').text('An error occurred. You must fill in all fields in order to create an item.')
  } else {
    const pageId = $(this).attr('data-id')
    api.updateCurrentUserPages(pageId, data)
      .then(ui.updateCurrentUserPagesSuccess)
      .catch(ui.updateCurrentUserPagesFail)
      .done(onGetCurrentUserPages)
  }
}

const onDeleteCurrentUserPages = function () {
  event.preventDefault()
  console.log('remove current user pages click is heard')
  const data = $(this).attr('data-id')
  api.deleteCurrentUserPages(data)
    .then(ui.deleteCurrentUserPagesSuccess)
    .catch(ui.deleteCurrentUserPagesFail)
    .done(onGetCurrentUserPages)
}

const refreshUpdatePageModal = function () {
  onGetCurrentUserPages()
}

const addPageHandlers = () => {
  $('#create-page-form').on('submit', onCreatePage)
  $('#showPageButton').on('click', onGetPages)
  $('#cur-user-pages').on('click', onGetCurrentUserPages)
  $(document).on('submit', '.update-page', onUpdateCurrentUserPages)
  $(document).on('submit', '.remove-page', onDeleteCurrentUserPages)
  $(document).on('hidden.bs.modal', '.update-page-modal', refreshUpdatePageModal)
  $('#all-pages-tab').on('click', onGetPages)
}

module.exports = {
  addPageHandlers,
  onGetPages,
  onGetCurrentUserPages,
  onUpdateCurrentUserPages,
  onDeleteCurrentUserPages
}
