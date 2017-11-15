app.controller('addCtrl', function($scope){

    $scope.firstNum = 885;
    $scope.secondNum = 995;

})

app.controller('treeController', function($scope, $http){

    var content;

    $http.get('data.json').then(function(response){

        content = response.data;
        console.log(content)

    })

    var newData = [

        {
        "value" : "One",
        "webix_kids" : false,
        "id" : "1",
        "link" :"about",
        "data":[
            { "id":"1.2.1", "value":"Page 1" },
            { "id":"1.2.2", "value":"Page 1" },
            { "id":"1.2.3", "value":"Page 1" },
            { "id":"1.2.4", "value":"Page 1" }
        ]
    }

    ]




    var treeData = [
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
            value : 'Three',
            webix_kids : false,
            id : '3',

            data:[
                { id:"3.2.1", value:"Page 1" },
                { id:"3.2.2", value:"Page 2" },
                { id:"3.2.3", value:"Page 3" },
                { id:"3.2.4", value:"Page 4" },
                { id:"3.2.5", value:"Page 5" } ]
        },
        {
            value : 'Four',
            webix_kids : false,
            id : '4',

            data:[
                { id:"1.2.1", value:"Page 1" },
                { id:"1.2.2", value:"Page 2" },
                { id:"1.2.3", value:"Page 3" },
                { id:"1.2.4", value:"Page 4" },
                { id:"1.2.5", value:"Page 5" } ]
        },
        {
            value : 'Five',
            webix_kids : false,
            id : '5',

            data:[
                { id:"1.2.1", value:"Page 1" },
                { id:"1.2.2", value:"Page 2" },
                { id:"1.2.3", value:"Page 3" },
                { id:"1.2.4", value:"Page 4" },
                { id:"1.2.5", value:"Page 5" } ]
        },
        {
            value : 'six',
            webix_kids : false,
            id : '6'

        }
    ]



    $scope.treeConfig = {

        view : 'tree',
        id : 'testTree',
        height : 500,
        autoheight:true,
        autowidth:true,
        on : {
            
            "onAfterRender" : webix.once(function(){
                
                $http.get('data.json').then(function(response){
                    
                    $$('testTree').parse(response.data, 'json');
                })
                
                
            })
            
        },
        


//                data : [{id:"1", value : "First", open:true, data : [{id:"1.1", value : "FirstObject", link : "product"},{id:"1.2", value : "FirstObject", link : "service"},
//                                                                                        {id:"1.3", value : "FirstObject",  link : "about"},
//                                                                                        {id:"1.4", value : "FirstObject" , link : "product"}],  link : "about" },
//                        {id:"2", value : "Second", open:true, data : [{id:"2.1", value : "FirstObject",  link : "about"},
//                                                                                         {id:"2.2", value : "FirstObject",  link : "product"},
//                                                                                         {id:"2.3", value : "FirstObject"},
//                                                                                         {id:"2.4", value : "FirstObject"}], link : "product" }
//                       ],
                template : "<span>{common.icon()}{common.folder()}<a href='##link#' ui-sref='#link#'>#value#</a></span>"

                 

    }
    

    
})
