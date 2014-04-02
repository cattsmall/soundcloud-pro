var soundCloud = angular.module('soundCloud', ['ui.bootstrap']);
 
soundCloud.controller('scController', function ($scope, $rootScope, $timeout) {
  // SET VARIABLES
  $rootScope.hasPro = false;
  
  $rootScope.user = {
    firstname: 'Catherine',
    lastname: 'Small',
    company: '',
    country: 'United States',
    card: []
  }
  
  $rootScope.user.card.name = $rootScope.user.firstname + ' ' + $rootScope.user.lastname;
  
  $rootScope.user.name = $rootScope.user.card.name;
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

soundCloud.controller('Modal2InstanceCtrl', function ($rootScope, $scope, $modal, $modalInstance ) {
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
  
  $scope.openNext = function () {
    $modalInstance.close();
    $rootScope.hasPro = true;
    var modalInstance3 = $modal.open({
      templateUrl: 'modal3Content.html',
      controller: 'Modal3InstanceCtrl',
      windowClass: 'modal-upgrade-success',
      resolve: {
      }
    });
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

soundCloud.controller('Modal3InstanceCtrl', function ($rootScope, $scope, $modalInstance, $timeout ) {
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
  
  $timeout($scope.cancel, 2500);
});