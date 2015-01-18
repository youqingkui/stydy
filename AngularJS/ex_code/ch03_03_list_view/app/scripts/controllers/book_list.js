"use strict";

bmApp.controller('BookListCtrl', function ($scope, $filter) {
    $scope.getBookOrder = function(book) {
        return book.title;
    };

    $scope.books = [
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

    // This is just to demonstrate the programmatic usage of a filter
    var orderBy = $filter('orderBy');

    var titles = $scope.books.map(function(book) {
        return {title: book.title};
    });

    console.log('titles before ordering', titles);

    // This is the actual invocation of the filter
    titles = orderBy(titles, 'title');

    console.log('titles after ordering', titles);
});
