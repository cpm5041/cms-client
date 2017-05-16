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

const addPageHandlers = () => {
  $('#create-page-form').on('submit', onCreatePage)
}

module.exports = {
  addPageHandlers
}
