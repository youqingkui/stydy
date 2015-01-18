"use strict";

bmApp.factory('BookDataService', function() {
    var srv = {};

    srv._books = [
        {
            title       : 'JavaScript for Enterprise Developers',
            subtitle    : 'Professional Programming in the Browser and on the Server',
            isbn        : '978-3-89864-728-1',
            abstract    : 'JavaScript is no longer only interesting to classic web programmers.',
            numPages    : 302,
            author      : 'Oliver Ochs',
            publisher   : {
                name: 'dpunkt.verlag',
                url : 'http://dpunkt.de/'
            }
        },
        {
            title       : 'Node.js & Co.',
            subtitle    : 'Developing scalable, high-performance and real-time web applications in JavaScript',
            isbn        : '978-3-89864-829-5',
            abstract    : 'After the browser, JavaScript is now conquering the web server.',
            numPages    : 334,
            author      : 'Golo Roden',
            publisher   : {
                name: 'dpunkt.verlag',
                url : 'http://dpunkt.de/'
            }
        },
        {
            title       : 'CoffeeScript',
            subtitle    : 'Easy JavaScript',
            isbn        : '978-3-86490-050-1',
            abstract    : 'CoffeeScript is a young, small programming language that is compiled to JavaScript.',
            numPages    : 200,
            author      : 'Andreas Schubert',
            publisher   : {
                name: 'dpunkt.verlag',
                url : 'http://dpunkt.de/'
            }
        }
    ];

    // Service implementation
    srv.getBookByIsbn = function(isbn) {
        for (var i = 0, n = srv._books.length; i < n; i++) {
            if (isbn === srv._books[i].isbn) {
                return angular.copy(srv._books[i]);
            }
        }

        return null;
    };

    srv.getBooks = function() {
        // Copy the array in order not to expose internal data structures
        return angular.copy(srv._books);
    };

    // Public API
    return {
        getBookByIsbn: function(isbn) {
            return srv.getBookByIsbn(isbn);
        },
        getBooks: function() {
            return srv.getBooks();
        }
    };
});
