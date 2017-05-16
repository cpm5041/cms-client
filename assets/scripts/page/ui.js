'use strict'

// const store = require('../store')
// const api = require('./api')
// const showItemsTemplate = require('../templates/item-listing-grid.handlebars')

const createPageSuccess = (data) => {
  console.log('create page success')
}

const createPageFailure = (error) => {
  console.log('create page fail')
  console.log(error)
}

module.exports = {
  createPageSuccess,
  createPageFailure

}
