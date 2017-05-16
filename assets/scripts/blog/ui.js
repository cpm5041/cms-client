'use strict'

// const store = require('../store')
// const api = require('./api')
// const showItemsTemplate = require('../templates/item-listing-grid.handlebars')

const createBlogSuccess = (data) => {
  console.log('create blog success')
}

const createBlogFailure = (error) => {
  console.log('create blog fail')
  console.log(error)
}

module.exports = {
  createBlogSuccess,
  createBlogFailure

}
