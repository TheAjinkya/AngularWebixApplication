            app.controller('addCtrl', function($scope){

                $scope.firstNum = 885;
                $scope.secondNum = 995;

            })

            app.controller('treeController', function($scope, $http){
                
                $http.get('data.json').then(function(response){
                    
                    $scope.content = response.data.treeData;
                })
                
             
                

                $scope.tree_config = {
                    view : 'tree',
                    id : 'testTree',
                    link :"",
                    
                    data:angular.toJson($scope.content)
                }  
            })
