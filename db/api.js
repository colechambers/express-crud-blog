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
    .select('posts.id as postId', 'users.id as userId', 'users.first_name as firstName', 'users.last_name as lastName', 'posts.title as title', 'posts.body as postBody', 'created_at as createdAt')
    .where('posts.id', id).fist()
  },
  getPost(id) {
    return knex('posts')
    .join('users', 'posts.user_id', 'users.id')
    .select('posts.id as postId', 'users.id as userId', 'users.first_name as firstName', 'users.last_name as lastName', 'posts.title as title', 'posts.body as postBody', 'createed_at as createdAt')
    .where('posts.id', id).first()
  },
  createPost(post) {
    return knex('posts').insert(post)
  },
  updatePost(post) {
    return knex('posts')
    .where('posts.id', post.id)
    .update(post)
  },
  deletePost(id) {
    return knex('posts').del()
    .where('posts.id', id)
  }
};
