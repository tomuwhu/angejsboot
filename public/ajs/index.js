angular
  .module( 'a', ['ui.bootstrap'] )
  .controller( 'c', ($scope,$http) => {
    $scope
      .getcsapatok = () => {
          $http
            .get('/req/csapatok')
            .then( resp => $scope.csapatok=resp.data )
      }
  } )
