var express = require('express');
var Post = require('../models/post');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Post.find(function(err, posts) {
      if (err) return res.status(500).send(err);

      var post = posts.map(function(data) {
        return {"id": data.id, "title": data.title, "categories": data.categories};
      })
      res.send(post)
    })
  })
  .post(function(req, res) {
    Post.create(req.body, function(err, post) {
      if (err) return res.status(500).send(err);
      res.send(post)
    })
  })

router.route('/:id')
  .get(function(req, res) {
    Post.findById(req.params.id, function(err, post) {
      if (err) return res.send({status: "404", error: "Not found"});
      res.send(post);
    })
  })
  .delete(function(req, res) {
    Post.remove({_id: req.params.id}, function(err) {
      if (err) return res.send({message: "No post found"});
      res.send({message: "Post deleted"});
    });
  });

  module.exports = router;