var depID = getCookie('depID');
var access = getCookie('access');
var userID = getCookie('userID');
var contactID = getCookie('contactID');

function setCookie(name, value) {
  options = {
	path: '/',
	expires: 'Tue, 19 Jan 2038 03:14:07 GMT'
  };

  if (options.expires.toUTCString) {
	options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
	updatedCookie += "; " + optionKey;
	let optionValue = options[optionKey];
	if (optionValue !== true) {
	  updatedCookie += "=" + optionValue;
	}
  }

  document.cookie = updatedCookie;
}


function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
	"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
  setCookie(name, "", {
	'max-age': -1
  })
}		