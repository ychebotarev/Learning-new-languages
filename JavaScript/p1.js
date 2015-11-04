/*
Binary Search
*/

var bisearch = function(ar,val)
{
    var lo = 0
    var hi = ar.length-1
    while(lo<hi){
        var mid = (lo+hi)/2
        if(ar[mid]==val){
            return true;
        }
        if(ar[mid]>val)
            hi=mid-1;
        else
            lo=mid+1;
    }
	return ar[lo]==val? true : false;
};

var input_array = [1,2,3,6,7];
r = bisearch(input_array,5);

document.getElementById('output').innerHTML = "input: ";
document.getElementById('output').innerHTML += JSON.stringify(input_array);
document.getElementById('output').innerHTML += "<br/>";
document.getElementById('output').innerHTML += "result: ";
document.getElementById('output').innerHTML += JSON.stringify(r);