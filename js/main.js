angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchQuery   = '';     // set the default search/filter term
  
  // create the list of techList 
  $scope.techList = [
    { name: 'Angular', type: 'Framework', category: 'MVC',gitURL:'https://github.com/angular/angular.js/',actions:'RUN JOB' },
    { name: 'jQuery', type: 'Library', category: 'DOM&CSS',gitURL:'https://github.com/jquery/jquery' ,actions:'RUN JOB'},
    { name: 'ember', type: 'Framework', category: 'MVC' ,gitURL:'https://github.com/emberjs/ember.js/',actions:'RUN JOB'},
    { name: 'React', type: 'Library', category: 'DOM&CSS' ,gitURL:'https://github.com/facebook/react',actions:'RUN JOB'},
    { name: 'Backbone', type: 'Framework', category: 'MVC',gitURL:'https://github.com/jashkenas/backbone',actions:'RUN JOB'},
    { name: 'React', type: 'Library', category: 'Utility',gitURL:'https://github.com/jashkenas/backbone',actions:'RUN JOB'}
  ];
  
});