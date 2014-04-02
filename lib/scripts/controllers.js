var soundCloud = angular.module('soundCloud', ['ui.bootstrap']);
 
soundCloud.controller('scController', function ($scope, $timeout) {
  // SET VARIABLES

  
  //--- FUNCTIONS
  
 // $timeout($scope.toggleIntroScreen, 2000);
 
});

soundCloud.controller('Modal1Ctrl', function ($scope, $modal, $log) {

  $scope.open = function () {
    console.log("woo!");
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'Modal1InstanceCtrl',
      windowClass: 'modal-upgrade-sell',
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

soundCloud.controller('Modal1InstanceCtrl', function ($scope, $modalInstance ) {

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});