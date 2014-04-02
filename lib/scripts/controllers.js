var soundCloud = angular.module('soundCloud', ['ui.bootstrap']);
 
soundCloud.controller('scController', function ($scope, $timeout) {
  // SET VARIABLES

  
  //--- FUNCTIONS
  
 // $timeout($scope.toggleIntroScreen, 2000);
 
});

soundCloud.controller('ModalDemoCtrl', function ($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function () {
    console.log("woo!");
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

soundCloud.controller('ModalInstanceCtrl', function ($scope, $modalInstance ) {

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});