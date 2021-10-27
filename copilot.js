//a function fibonacci
function fibonacci(n) {
    if (n <= 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
//bubble sort the array of numbers and return the sorted array  
function bubbleSort(array) {
    var length = array.length;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}