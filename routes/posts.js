var express = require('express')
var router = express.Router()
var db = require('../db/api')

router.get('/', function(req, res) {
  db.getAllPosts().then(posts => {
    res.render('posts/posts', {posts: posts, title: 'Express Blog'})
  })
})

router.get('/new', function(req, res) {
  db.getAllUsers().then(users => {
    res.render('posts/new', {users: users, title: 'Express Blog'})
  })
})

router.get('/:id', function(req, res) {
  db.getPost(req.params.id).then(post => {
    res.render('posts/post', {post: post, title: 'Express Blog'})
  })
})

router.post('/', function(req, res) {
  db.createPost(req.body).then(() => {
    res.redirect('/posts')
  })
})

router.put('/:id', function(req, res) {
  console.log(req.body)
  db.updatePost(req.body).then(() => {
    res.json({'response': 'post updated'})
  })
})

router.delete('/:id', function(req, res) {
  db.deletePost(req.params.id).then(() => {
    res.json({'response': 'post deleted'})
  })
})

router.get('/:id/edit', function(req, res) {
  db.getPost(req.params.id).then(post => {
    res.render('posts/edit', {post: post, title: 'Express Blog'})
  })
})


module.exports = router
