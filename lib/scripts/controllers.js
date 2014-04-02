var soundCloud = angular.module('soundCloud', ['ui.bootstrap']);
 
soundCloud.controller('scController', function ($scope, $timeout) {
  // SET VARIABLES
  $scope.hasPro = false;
  
  //--- FUNCTIONS
  
 // $timeout($scope.toggleIntroScreen, 2000);
 
});

soundCloud.controller('Modal1Ctrl', function ($scope, $modal, $log) {

  $scope.open = function () {
    var modalInstance1 = $modal.open({
      templateUrl: 'modal1Content.html',
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

soundCloud.controller('Modal1InstanceCtrl', function ($rootScope, $scope, $modal, $modalInstance ) {

  $scope.openNext = function (planType) {
    $rootScope.selectedPlan = planType;
    
    $modalInstance.close();
    var modalInstance2 = $modal.open({
      templateUrl: 'modal2Content.html',
      controller: 'Modal2InstanceCtrl',
      windowClass: 'modal-upgrade-checkout',
      resolve: {
      }
    });
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

soundCloud.controller('Modal2InstanceCtrl', function ($rootScope, $scope, $modalInstance ) {
  if ($rootScope.selectedPlan == 'pro') {
    $rootScope.payCycle = 6;
  } else {
    $rootScope.payCycle = 15;
  }

  $scope.togglePlan = function(planType) {
    $rootScope.selectedPlan = planType;
    
    if ($rootScope.selectedPlan == 'pro') {
      $rootScope.payCycle = 6;
    } else {
      $rootScope.payCycle = 15;
    }
  }
  
  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});