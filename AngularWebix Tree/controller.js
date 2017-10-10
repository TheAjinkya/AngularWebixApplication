app.controller('addCtrl', function($scope){

    $scope.firstNum = 885;
    $scope.secondNum = 995;

})

app.controller('treeController', function($scope, $http){

    //    $http.get('data.json').then(function(response){
    //        
    //        $scope.content = response.data.treeData
    //        
    //    })



    treeData : [
        {
            value : 'One',
            webix_kids : false,
            id : '1',
            link :'about'

        },
        {
            value : 'Two',
            webix_kids : false,
            id : '2',

            data:[
                { id:"1.2.1", value:"Page 1" },
                { id:"1.2.2", value:"Page 2" },
                { id:"1.2.3", value:"Page 3" },
                { id:"1.2.4", value:"Page 4" },
                { id:"1.2.5", value:"Page 5" } ]
        },
        {
            value : 'Two',
            webix_kids : false,
            id : '2',

            data:[
                { id:"1.2.1", value:"Page 1" },
                { id:"1.2.2", value:"Page 2" },
                { id:"1.2.3", value:"Page 3" },
                { id:"1.2.4", value:"Page 4" },
                { id:"1.2.5", value:"Page 5" } ]
        },
        {
            value : 'Two',
            webix_kids : false,
            id : '2',

            data:[
                { id:"1.2.1", value:"Page 1" },
                { id:"1.2.2", value:"Page 2" },
                { id:"1.2.3", value:"Page 3" },
                { id:"1.2.4", value:"Page 4" },
                { id:"1.2.5", value:"Page 5" } ]
        },
        {
            value : 'Two',
            webix_kids : false,
            id : '2',

            data:[
                { id:"1.2.1", value:"Page 1" },
                { id:"1.2.2", value:"Page 2" },
                { id:"1.2.3", value:"Page 3" },
                { id:"1.2.4", value:"Page 4" },
                { id:"1.2.5", value:"Page 5" } ]
        },
        {
            value : 'Three',
            webix_kids : false,
            id : '3'

        }
    ]



    $scope.treeConfig = {
        
        view : 'tree',
        id : 'testTree',
        autoheight:true,
        autowidth:true,
        data : 'treeData'



    }  
})
