'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreatePage = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target) // same as this
  api.createPage(data)
    .then(ui.createPageSuccess)
    .catch(ui.createPageFailure)
    // .done(onGetPages)
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
  const pageId = $(this).attr('data-id')
  api.updateCurrentUserPages(pageId, data)
    .then(ui.updateCurrentUserPagesSuccess)
    .catch(ui.updateCurrentUserPagesFail)
    .done(onGetCurrentUserPages)
}

const addPageHandlers = () => {
  $('#create-page-form').on('submit', onCreatePage)
  $('#showPageButton').on('click', onGetPages)
  $('#cur-user-pages').on('click', onGetCurrentUserPages)
  $(document).on('submit', '.update-page', onUpdateCurrentUserPages)
}

module.exports = {
  addPageHandlers,
  onGetPages,
  onGetCurrentUserPages,
  onUpdateCurrentUserPages
}
