var weekDays = document.getElementsByClassName('wDay');
var a1 = 0; 
var a2 = 0; 
var a3 = 0; 
var a4 = 0;
var a5 = 0;

function count(elem) {
	var f = [];
	switch(elem) {
		case 'SP':
			f = document.getElementsByTagName("input");
			break;
		case 'SM':
			f = document.getElementsByClassName("company");
			break;
	}
	for (var i = 0; i<f.length; i++) {
		switch(f[i].dataset.day) {
			case '0':
				if (f[i].style.backgroundColor == 'red' || f[i].checked) {
					a1 += 1;
				}
				break;
			case '1':
				if (f[i].style.backgroundColor == 'red' || f[i].checked) {
					a2 += 1;
				}
				break;
			case '2':
				if (f[i].style.backgroundColor == 'red' || f[i].checked) {
					a3 += 1;
				}
				break;
			case '3':
				if (f[i].style.backgroundColor == 'red' || f[i].checked) {
					a4 += 1;
				}
				break;
			case '4':
				if (f[i].style.backgroundColor == 'red' || f[i].checked) {
					a5 += 1;
				}
				break;
			default: 
				break;
		}
		weekDays[0].innerHTML = a1; 
		weekDays[1].innerHTML = a2; 
		weekDays[2].innerHTML = a3; 
		weekDays[3].innerHTML = a4; 
		weekDays[4].innerHTML = a5; 
	}
}
