# AsyncIterator #

An asynchronous iterator that uses requestAnimationFrame to batch process large datasets without locking up the UI.

    // The dataset
    var myArr = [];
    // Number of operations per call
    var batchSize = 1000;
    // The actual processing method
    function work(item, index) {
        // Do something for each item
    }
    
    // Start iterator, it will return a promise
    var promise = asyncIterator(myArr, work, batchSize);
    
    // When promise is resolved, output results
    promise.done(
        function(results){
            console.log('Done processing', results);
        }
    );