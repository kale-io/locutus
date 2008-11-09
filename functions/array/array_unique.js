function array_unique( array ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
    // +      input by: duncan
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Nate
    // *     example 1: array_unique(['Kevin','Kevin','van','Zonneveld','Kevin']);
    // *     returns 1: ['Kevin','van','Zonneveld']
    // *     example 2: array_unique({'a': 'green', 0: 'red', 'b': 'green', 1: 'blue', 2: 'red'});
    // *     returns 2: {'a': 'green', 0: 'red', 1: 'blue'}
    
    var key = '', tmp_arr1 = {}, tmp_arr2 = {};
    var val = '';
    tmp_arr1 = array;
    
	var __array_search = function (needle, haystack, strict) {
        var fkey = '';
	    var strict = !!strict;
	    for (fkey in haystack) {
	        if ((strict && haystack[fkey] === needle) || (!strict && haystack[fkey] == needle) ) {
	            return fkey;
	        }
	    }
	    return false;
	}    
	
    for (key in tmp_arr1) {
        val = tmp_arr1[key];
        if (false === __array_search(val, tmp_arr2)) {
            tmp_arr2[key] = val;
        }
        
        delete tmp_arr1[key];
    }
    
    return tmp_arr2;
}