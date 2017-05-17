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

const addPageHandlers = () => {
  $('#create-page-form').on('submit', onCreatePage)
  $('#showPageButton').on('click', onGetPages)
}

module.exports = {
  addPageHandlers,
  onGetPages
}
