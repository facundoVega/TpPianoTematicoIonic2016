angular.module('app.controllers', [])
  
.controller('pianoCtrl', ['$scope', '$stateParams', '$cordovaVibration','$cordovaNativeAudio', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaVibration, $cordovaNativeAudio) {

	$scope.Imagen = function(quien)
	{
		try
		{
			$cordovaVibration.vibrate(100);

		}
		catch(err)
		{
			console.log("vibro");
		}

	
	
		try
		{
			$cordovaNativeAudio.play(quien);
		}
		catch(err)
		{
			console.log("sono: " + quien);
		}
	}

}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('informacionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 