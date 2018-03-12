   scotchApp.controller('loginController', function($scope,$http) {
       $scope.login=function(){
    	   var data = $scope.loginProp;
		   var jsObj = angular.fromJson(data);
    	  
  
				 console.log(2);
				var request = {
					useLegacyPromiseExtensions : false,
					method : 'POST',
					url : '/Meria_Test/security_check',
					data : jsObj,

					headers : {
						'Content-Type' : 'application/x-www-form-urlencoded'
					},
			
					 

					transformRequest : function(obj) {
						 console.log(3);
						var str = [];
						for ( var p in obj)
							str
									.push(encodeURIComponent(p)
											+ "="
											+ encodeURIComponent(obj[p]));
						

						return str.join("&");
						
					},

					 

				};
			

				$http(request)
						.then(function (response,Headers) {
									 console.log(5);
									
									var headers = login ? {authorization : "Basic "
								        + ($scope.uname + ":" + $scope.upwd)
								        //+ btoa(login.uname + ":" + login.upwd)
								    } : {};
		
								  

								}),function errorCallback(response) {
					 console.log("here22");
									 $scope.error=true;
									 $scope.errorChange=false;
									 $scope.errorCust=false;
								}
		
							
		
		
   		
       }
   		
   		
   	
    });
