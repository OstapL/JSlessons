function max(n1, n2) {
  if (n1 > n2) {
   return n1;
}
  else if (n1 < n2) {
    return n2;
  }
  else {
   return n1;
  }
};

function max_of_three(n1, n2, n3) {
	var twoMax = max(n1, n2);
  console.log('twoMax- ', twoMax, '500');
  if (twoMax !== '500') {
    console.log('!=');
  }
	var result = max(twoMax, n3);
  console.log(result);

};

function max_of_f(n1, n2, n3, n4) {
  var threeMax = max_of_three(n1, n2, n3);
  var result = max(threeMax, n4);
  console.log(result);

};

function min(n1, n2) {
  if (n1 > n2) {
    return n2;
  }
  else if (n1 < n2) {
    return n1;
  }
  else {
    return n1;
  }
};

function min_of_three(n1, n2, n3) {
  var twoMin = min(n1, n2);
  var result = min(twoMin, n3);
  console.log(result);
}

function min_of_f(n1, n2, n3, n4) {
  var threeMin = min_of_three(n1, n2, n3);
  var result = min(threeMin, n4);
  console.log(result);
}

/*
function max_of_three(n1, n2, n3)
    {
        var m = Number.NEGATIVE_INFINITY;
        for(var i = 0; i < arguments.length; i++)
            if (arguments[i] > m) m = arguments[i];
        return m;
    }

function max_of_three(n1, n2, n3) {
	if (n1 > n2 && n1 > n3) {
		return 'Max number is ' + n1;
	}
	else if (n2 > n3 && n2 > n1) {
		return 'Max number is ' + n2;
	}
	else if (n3 > n1 && n3 > n2) {
		return 'Max number is ' + n3;
	}
}

*/

function length(wold) {
  for (var i = 0; i < wold.length; i++) {
  }
  console.log(i);
  if (Array.isArray(wold) == true )  {
   return 'its Array';
  }
  else {
    return 'its string';
  }
};
function vowel(argument) {
  var vowels = ["i", "y", "e", "j"];
  if (vowels.indexOf(argument) == -1 ) {
    console.log('its not vowel');
  }
  else {
    console.log('its vowel');
  }
}

//REVERSsssssSSSS

function reverse(argument){
var s = "";
for (var i = argument.length - 1; i >= 0; i--){
    s = s + argument[i];
}
return s;
};


console.log('this is vlad/test branch');
