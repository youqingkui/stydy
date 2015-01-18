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
            },
            tags        : [
                'javascript', 'enterprise', 'nodejs', 'web', 'browser'
            ]
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
            },
            tags        : [
                'javascript', 'nodejs', 'web', 'realtime', 'socketio'
            ]
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
            },
            tags        : [
                'coffeescript', 'web'
            ]
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
        // Copy the array in order not to expose the internal data structure
        return angular.copy(srv._books);
    };

    srv.getTags = function() {
        var obj = {},
            tag;

        for (var i = 0, n = srv._books.length; i < n; i++) {
            for (var j = 0, m = srv._books[i].tags.length; j < m; j++) {
                tag = srv._books[i].tags[j];
                if (!obj.hasOwnProperty(tag)) {
                    obj[tag] = true;
                }
            }
        }

        return Object.keys(obj);
    };

    srv.storeBook = function(book) {
        srv._books.push(book);
    };

    srv.updateBook = function(book) {
        for (var i = 0, n = srv._books.length; i < n; i++) {
            if (book.isbn === srv._books[i].isbn) {
                angular.extend(srv._books[i], book);
                return;
            }
        }
    };

    srv.deleteBookByIsbn = function(isbn) {
        var i = srv._books.length;
        while (i--) {
            if (isbn === srv._books[i].isbn) {
                srv._books.splice(i, 1);
                return;
            }
        }
    };

    // Public API
    return {
        getBookByIsbn: function(isbn) {
            return srv.getBookByIsbn(isbn);
        },
        getBooks: function() {
            return srv.getBooks();
        },
        getTags: function() {
            return srv.getTags();
        },
        storeBook: function(book) {
            srv.storeBook(book);
        },
        updateBook: function(book) {
            srv.updateBook(book);
        },
        deleteBookByIsbn: function(isbn) {
            srv.deleteBookByIsbn(isbn);
        }
    };
});
