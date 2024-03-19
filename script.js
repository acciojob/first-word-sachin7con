function firstWord(s) {
  //SGN your code here

let fw = '';
	s = s.trim();
	
		if(s.charAt(0) == " " || s.length < 1){
			fw = '';
		}else{
			for (let i = 0; i < s.length; i++) {
				if(s.charAt(i)== " "){
					fw = s.substring(0, i);
					break;
				}else {
					fw = s;
				}
			}
		}
	
	return fw;
}

// Do not change the code below


const s = prompt("Enter String:");
alert(firstWord(s));
