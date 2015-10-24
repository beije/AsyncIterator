(function(){

    // Create a dataset with n amount of items
    var myArr = [];
    for(var i = 0; i < 500000; i++) {
        myArr.push(i)
    }
    
    $('#run-for').on(
        'click',
        function() {
            var startTime = new Date();
            var res;
            for(var i = 0; i < myArr.length; i++) {
                res = myArr[i] * Math.PI;
                $('#for-status').html(Math.round((i/myArr.length)*100) + '%');
            }
            $('#for-time').html(new Date() - startTime);
        }
    );
    
    $('#run-lift').on(
        'click',
        function() {
            var startTime = new Date();
            
            // Initiate the iterator
            var promise = asyncIterator(
                myArr,
                function(num, index){
                    $('#async-lift-status').html(Math.round((index/myArr.length)*100) + '%');
                    return num * Math.PI;
                }, 
                1
            );
            
            // Console log the results when it's done
            promise.done(
                function(results){
                    var endTime = new Date();
                    $('#async-lift-time').html(new Date() - startTime);
                }
            );
        }
    );
    
    $('#run-batched').on(
        'click',
        function() {
            var startTime = new Date();
            // Initiate the iterator
            var promise = asyncIterator(
                myArr,
                function(num, index){
                    $('#async-batched-lift-status').html(Math.round((index/myArr.length)*100) + '%');
                    
                    return num * Math.PI;
                }, 
                1000
            );
            
            promise.done(
                function(results){
                    $('#async-batched-lift-time').html(new Date() - startTime);
                }
            );
        }
    );
    
    $('#run-int').on(
        'click',
        function() {
            var startTime = new Date();
            
            // Initiate the iterator
            var promise = asyncIteratorInterval(
                myArr,
                function(num, index){
                    $('#async-int-status').html(Math.round((index/myArr.length)*100) + '%');
                    return num * Math.PI;
                }, 
                1
            );
            
            // Console log the results when it's done
            promise.done(
                function(results){
                    var endTime = new Date();
                    $('#async-int-time').html(new Date() - startTime);
                }
            );
        }
    );
    
    $('#run-int-batched').on(
        'click',
        function() {
            var startTime = new Date();
            // Initiate the iterator
            var promise = asyncIteratorInterval(
                myArr,
                function(num, index){
                    $('#async-batched-int-status').html(Math.round((index/myArr.length)*100) + '%');
                    
                    return num * Math.PI;
                }, 
                1000
            );
            
            promise.done(
                function(results){
                    $('#async-batched-int-time').html(new Date() - startTime);
                }
            );
        }
    );
    
})();
