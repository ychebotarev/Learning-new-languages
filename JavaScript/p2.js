/*
You have an unordered array X of n integers. 
Find the array M containing n elements where Mi is the product of all integers in X except for Xi. 
You may not use division. 
You can use extra memory.
*/

var all_products = function(ar)
{
    
    var output_array = new Array(ar.length);
    output_array[0]=1;
    var res=ar[0]
 	for (var i = 1; i < ar.length; ++i) {
        output_array[i]=res;
        res*=ar[i];
    }
    
    res=ar[ar.length-1]
    for (var i = ar.length -2; i >=0; --i) {
        output_array[i]*=res
        res*=ar[i]
    }
    
    return output_array;
    
}

var input_array = [1,2,3,4,5];
r = all_products(input_array);
document.getElementById('output').innerHTML = "input: ";
document.getElementById('output').innerHTML += JSON.stringify(input_array);
document.getElementById('output').innerHTML += "<br/>";
document.getElementById('output').innerHTML += "result: ";
document.getElementById('output').innerHTML += JSON.stringify(r);