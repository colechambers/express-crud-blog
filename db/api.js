'use strict'

var knex = require('./knex')

module.exports = {
  getAllUsers() {
    return knex('users')
  },

  getUser(id) {
    return knex('users')
    .where('users.id', id).first()
  },

  createUser(user) {
    return knex('users')
    .where('users.id', id).first()
  },

  updateUser(user) {
    return knex('users')
    .where('users.id', user.id)
    .update(user)
  },

  deleteUser(id) {
    return knex('users')
    .where('users.id',id)
    .del()
  },

  getAllPosts() {
    return knex('posts')
    .join('users', 'posts.user_id', 'users.id')
  }
}
