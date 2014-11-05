var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'home': 'home',
    'users': 'users',
    'submissions': 'submissions',
    'comments': 'comments',
    'about': 'about'
  },

  home: function() {
    $('#content').empty();

    $.ajax({
      url: 'https://ig-hacker-news.herokuapp.com/submissions',
      type: 'GET'
    }).done(function(response) {
      console.log(response);

      var template = Handlebars.compile($("#submissionsTemplate").html());
      $('#content').html(template({
        submissionsList: response
      }));
    });
  },

    users: function() {
        $('#content').empty();
        $.ajax({
            url: 'https://ig-hacker-news.herokuapp.com/users',
            type: 'GET'
        }).done(function(response) {
            console.table(response);
        });
    },

    submissions: function() {
        $('#content').empty();
        $.ajax({
            url: 'https://ig-hacker-news.herokuapp.com/submissions',
            type: 'GET'
        }).done(function(response) {
            console.table(response);
        });
    },

    comments: function() {
        $('#content').empty();
        $.ajax({
            url: 'https://ig-hacker-news.herokuapp.com/comments',
            type: 'GET'
        }).done(function(response) {
            console.table(response);
        });
    },

    about: function() {
        $('#content').empty();
        var template = Handlebars.compile($("#aboutTemplate").html());
        $('#content').html(template({
            name: 'Ilja'
        }));
    }

});

var router = new Router();

Backbone.history.start();


// $.ajax({
//   url: 'https://blooming-inlet-9113.herokuapp.com/users',
//   type: 'GET'
// }).done(function(response) {
//   console.log("Users:")
//   console.table(response);
// })


// $.ajax({
//   url: 'https://blooming-inlet-9113.herokuapp.com/submissions',
//   type: 'GET'
// }).done(function(response) {
//   console.log("Submissions:")
//   console.table(response);
// })
