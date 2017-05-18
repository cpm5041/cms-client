module.exports = function (value, options) {
  const $el = $('<select />').html(options.fn(this))
  $el.find('[value="' + value + '"]').attr({'selected': 'selected'})
  return $el.html()
}
