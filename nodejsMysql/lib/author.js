const db = require('./db');
const template = require('./template.js');
const url = require('url');
const qs = require('querystring');
const path = require('path');
const { authorSelect } = require('./template.js');

exports.home = function (request, response) {
  db.query('SELECT * FROM topic', function(error, topics){
    db.query('SELECT * FROM author', function(error2, authors){
      
      const title = 'author';
      const list = template.list(topics);
      const html = template.HTML(title, list,
          `
          
            ${template.authorTable(authors)}
          <style>
            table {
              border-collapse: collapse;
            }
            td { border: 1px solid black;}
          </style>

          <form action="/author/create_process" method="post">
            <p>
                <input type="text" name="name" placeholder="name">
            </p>
            <p>
                <textarea name="profile" placeholder="description"></textarea>
            </p>
            <p>
                <input type="submit">
            </p>
        </form>
          `,
          ``
      );
      response.writeHead(200);
      response.end(html);
    });
  });
}

exports.create_process = function (request, response) {
  var body = '';
  request.on('data', function(data){
      body = body + data;  
  });
  request.on('end', function(){
      var post = qs.parse(body);
      db.query('INSERT INTO author (name, profile) VALUES(?, ?)',
        [post.name, post.profile, post.author],
        function(error, result) {
          if(error) {
            throw error;
          }
          response.writeHead(302, {Location: `/author`});
          response.end();
        }
      
      )
  });
};