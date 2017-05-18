module.exports = function (createdAt) {
  const date = createdAt.split('T')[0]
  return date
}
