"use strict";

bmApp.controller('AdminNewBookCtrl', function ($scope, $location, BookDataService) {
    $scope.book = {};
    $scope.submitBtnLabel = 'Create book';

    $scope.submitAction = function() {
        BookDataService.storeBook($scope.book);
        goToAdminListView();
    };

    $scope.cancelAction = function() {
        goToAdminListView();
    };

    var goToAdminListView = function() {
        $location.path('/admin/books');
    };
});
