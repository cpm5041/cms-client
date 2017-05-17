'use strict'

// const store = require('../store')
// const api = require('./api')
// const showItemsTemplate = require('../templates/item-listing-grid.handlebars')
const showPageTemplate = require('../templates/page-listing.handlebars')

const createPageSuccess = (data) => {
  console.log('create page success')
}

const createPageFailure = (error) => {
  console.log('create page fail')
  console.log(error)
}

const getPagesSuccess = (data) => {
  console.log('inside get page, data is', data)
  const showPagesHtml = showPageTemplate({
    pages: data.pages
  })
  $('.visitorPageDiv').html(showPagesHtml)
}

module.exports = {
  createPageSuccess,
  createPageFailure,
  getPagesSuccess

}
