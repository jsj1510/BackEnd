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
          `,
          `<a href="/create">create</a>`
      );
      response.writeHead(200);
      response.end(html);
    
    });
   
  });

}