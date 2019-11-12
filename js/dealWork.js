var debtEx = 0;
var debt = 0;
var bankList = [];
var statList = []; 

function chooseCompany(id,deal=0) {
	start = new Date();
	start = date2str(start);
	dotCompany = parseInt(id,10);
	console.log(id);
	z = x[1].getElementsByTagName("input");
	u = x[1].getElementsByTagName("select");
	a = x[1].getElementsByClassName("ads");
	t = x[1].getElementsByClassName("tech");
	f = x[2].getElementsByTagName('td');
	fetch('https://crm.corvus.ru/rest/47/7i7psg9pzq0nvc4p/crm.company.get/', {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({'ID': dotCompany})
	}).then((response) => {
		console.log(response);
		response.json().then((data) => {
			console.log(data.result);
			debt = parseInt(data.result.UF_CRM_1573297783135); 
			z[0].value = data.result.TITLE;
			z[1].value = data.result.UF_CRM_1570782495391;
			z[2].value = data.result.UF_CRM_1570782508776;
			z[3].value = data.result.UF_CRM_1570782547322;
			z[4].value = data.result.UF_CRM_1570782558183;
			z[5].value = data.result.UF_CRM_1570782576476;
			z[6].value = data.result.UF_CRM_1570782618822;
			z[7].value = data.result.UF_CRM_1571154547793;
			z[8].value = data.result.UF_CRM_1571154559289;
			
			p[0].innerHTML = data.result.UF_CRM_1570784659257;
			p[1].innerHTML = data.result.UF_CRM_1570786792232;
			p[2].innerHTML = data.result.UF_CRM_1570786820346;
			p[3].innerHTML = data.result.UF_CRM_1570786850687;
			p[4].innerHTML = data.result.UF_CRM_1570786883310;
			p[5].innerHTML = data.result.UF_CRM_1570786907271;
			p[6].innerHTML = data.result.UF_CRM_1573218549236;
			p[7].innerHTML = data.result.UF_CRM_1570786932666;
			p[8].innerHTML = data.result.UF_CRM_1570786968224;
			q[0].innerHTML = data.result.UF_CRM_1570786767223;
			q[1].innerHTML = data.result.UF_CRM_1570786802466;
			q[2].innerHTML = data.result.UF_CRM_1570786834351;
			q[3].innerHTML = data.result.UF_CRM_1570786860041;
			q[4].innerHTML = data.result.UF_CRM_1570786894287;
			q[5].innerHTML = data.result.UF_CRM_1570786917117;
			q[6].innerHTML = data.result.UF_CRM_1573218541208;
			q[7].innerHTML = data.result.UF_CRM_1570786960689;
			q[8].innerHTML = data.result.UF_CRM_1570786977002;
			
			f[64].innerHTML = debt; 
			
			companyName = data.result.TITLE; 
		
			dealID = parseInt(deal,10);
			console.log(dealID);
			if (contactID != "") {
				getPersonalBank();
			}
			lastDeal(dotCompany);
		});
	});
}

function lastDeal(id) {
	var y = x[3].getElementsByTagName("input");
	fetch('https://crm.corvus.ru/rest/47/7i7psg9pzq0nvc4p/crm.deal.list/', {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({
			order: { "ID": "ACS" }, 
			filter: { "COMPANY_ID": parseInt(id), "STAGE_ID":"C1:WON"}, 
			select: [
				'UF_CRM_1570787405723',
				'UF_CRM_1570787420746',
				'UF_CRM_1570787435391',
				'UF_CRM_1570787447197',
				'UF_CRM_1570787460572',
				'UF_CRM_1570787594044',
				'UF_CRM_1570787608705',
				'UF_CRM_1570787615600',
				'UF_CRM_1570787629867',
				'UF_CRM_1570787638387',
				'UF_CRM_1570787652487',
				'UF_CRM_1570787659875',
				"UF_CRM_1571143357822",
				"UF_CRM_1571143472291",
				"UF_CRM_1571169173469",
				"UF_CRM_1571169183950",
				"UF_CRM_1571169238291",
				"UF_CRM_1571169247623",
				"UF_CRM_1571169283552",
				"UF_CRM_1571169297457",
				"UF_CRM_1571418112930",
				"UF_CRM_1573221542354",
				"UF_CRM_1573221531645",
				"UF_CRM_1573221555622",
				'COMMENTS',
				'ID'
			]
		})
	}).then((response) => {
		console.log(response);
		response.json().then((data) => {
			console.log(data.result);
			if (data.result.length != 0) {
				for (var i = 0; i < data.result[0].UF_CRM_1571143357822.length; i++) {
					switch(data.result[0].UF_CRM_1571143357822[i]) {
						case 46:
							adsInput[0].checked = true;
							break;
						case 47:
							adsInput[2].checked = true;
							break;
						case 48:
							adsInput[4].checked = true;
							break;
						case 49:
							adsInput[6].checked = true;
							break;
						case 50:
							adsInput[8].checked = true;
							break;
						case 51:
							adsInput[10].checked = true;
							break;
						case 52:
							adsInput[12].checked = true;
							break;
					}
				}
				for (var i = 0; i < data.result[0].UF_CRM_1571143472291.length; i++) {
					switch(data.result[0].UF_CRM_1571143472291[i]) {
						case 56:
							adsInput[1].checked = true;
							break;
						case 57:
							adsInput[3].checked = true;
							break;
						case 58:
							adsInput[5].checked = true;
							break;
						case 59:
							adsInput[7].checked = true;
							break;
						case 60:
							adsInput[9].checked = true;
							break;
						case 61:
							adsInput[11].checked = true;
							break;
						case 62:
							adsInput[13].checked = true;
							break;
					}
				}
			
				console.log('test');
				if (data.result.UF_CRM_1571418112930 == '1') {
					adsInput[14].checked = true;
				} 
				
				y[0].value = data.result[0].UF_CRM_1570787405723;
				y[1].value = data.result[0].UF_CRM_1570787420746;
				y[2].value = data.result[0].UF_CRM_1571169173469;
				y[3].value = data.result[0].UF_CRM_1570787435391;
				y[4].value = data.result[0].UF_CRM_1570787447197;
				y[5].value = data.result[0].UF_CRM_1571169183950;
				y[6].value = data.result[0].UF_CRM_1570787460572;
				y[7].value = data.result[0].UF_CRM_1570787594044;
				y[8].value = data.result[0].UF_CRM_1571169238291;
				y[9].value = data.result[0].UF_CRM_1570787608705; 
				y[10].value = data.result[0].UF_CRM_1570787615600;
				y[11].value = data.result[0].UF_CRM_1571169247623;
				y[12].value = data.result[0].UF_CRM_1570787629867;
				y[13].value = data.result[0].UF_CRM_1570787638387;
				y[14].value = data.result[0].UF_CRM_1571169283552;
				y[15].value = data.result[0].UF_CRM_1570787652487; 
				y[16].value = data.result[0].UF_CRM_1570787659875;
				y[17].value = data.result[0].UF_CRM_1571169297457;
				y[18].value = data.result[0].UF_CRM_1573221531645; 
				y[19].value = data.result[0].UF_CRM_1573221542354;
				y[20].value = data.result[0].UF_CRM_1573221555622;
				ta[0].innerHTML = data.result[0].COMMENTS;
			}
		});
	});
}

function getPersonalBank() {
	fetch('https://crm.corvus.ru/rest/47/7i7psg9pzq0nvc4p/crm.contact.get/', {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({
			'ID':parseInt(contactID)
		})
	}).then((response) => {
		console.log(response);
		response.json().then((data) => {
			console.log(data.result);
			bankList = [
				parseInt(data.result.UF_CRM_1573311099815),
				parseInt(data.result.UF_CRM_1573311046657),
				parseInt(data.result.UF_CRM_1573311030935),
				parseInt(data.result.UF_CRM_1573311062519),
				parseInt(data.result.UF_CRM_1573311052711),
				parseInt(data.result.UF_CRM_1573311074464),
				parseInt(data.result.UF_CRM_1573311086798),
				parseInt(data.result.UF_CRM_1573310996682),
				parseInt(data.result.UF_CRM_1573311018736)
			]
			statList = [
				parseInt(data.result.UF_CRM_1573488704002),
				parseInt(data.result.UF_CRM_1573488714451),
				parseInt(data.result.UF_CRM_1573488722882),
			]
		});
	});
}

function updateBank() {
	u = x[2].getElementsByTagName("input");  
	sale = parseInt(f[61].innerHTML);
	
	fetch('https://crm.corvus.ru/rest/47/7i7psg9pzq0nvc4p/crm.contact.update/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({
			'ID':parseInt(contactID),
			'FIELDS':{
				'UF_CRM_1573488704002':(statList[0]+sale),
				'UF_CRM_1573488714451':(statList[1]+sale),
				'UF_CRM_1573488722882':(statList[2]+sale),
				'UF_CRM_1573311099815':(bankList[0]-parseInt(u[1].value,10)),
				'UF_CRM_1573311046657':(bankList[1]-parseInt(u[3].value,10)),
				'UF_CRM_1573311030935':(bankList[2]-parseInt(u[5].value,10)),
				'UF_CRM_1573311062519':(bankList[3]-parseInt(u[7].value,10)),
				'UF_CRM_1573311052711':(bankList[4]-parseInt(u[9].value,10)),
				'UF_CRM_1573311074464':(bankList[5]-parseInt(u[11].value,10)),
				'UF_CRM_1573311086798':(bankList[6]-parseInt(u[13].value,10)),
				'UF_CRM_1573310996682':(bankList[7]-parseInt(u[15].value,10)),
				'UF_CRM_1573311018736':(bankList[8]-parseInt(u[17].value,10))
			}
		})
	}).then((response) => {
		console.log(response);
		response.json().then((data) => {
			
		});
	});
}

function updateCompany() {
	y = x[1].getElementsByTagName("input");
	u = x[2].getElementsByTagName("input");
	fetch('https://crm.corvus.ru/rest/47/7i7psg9pzq0nvc4p/crm.company.update/', {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({
		'ID': dotCompany, 
		'FIELDS':{
			'TITLE':y[0].value,
			'UF_CRM_1570782495391':y[1].value,
			'UF_CRM_1570782508776':y[2].value,
			'UF_CRM_1570782547322':y[3].value, 
			'UF_CRM_1570782558183':y[4].value,
			'UF_CRM_1570782576476':y[5].value,
			'UF_CRM_1570782618822':y[6].value,
			'UF_CRM_1571154547793':y[7].value,
			'UF_CRM_1571154559289':y[8].value, 
			'UF_CRM_1570784659257':parseInt(u[0].value,10),
			'UF_CRM_1570786792232':parseInt(u[2].value,10),
			'UF_CRM_1570786820346':parseInt(u[4].value,10),
			'UF_CRM_1570786850687':parseInt(u[6].value,10),
			'UF_CRM_1570786883310':parseInt(u[8].value,10),
			'UF_CRM_1570786907271':parseInt(u[10].value,10),
			'UF_CRM_1573218549236':parseInt(u[12].value,10),
			'UF_CRM_1570786932666':parseInt(u[14].value,10),
			'UF_CRM_1570786968224':parseInt(u[16].value,10),
			'UF_CRM_1570786767223':parseInt(u[1].value,10),
			'UF_CRM_1570786802466':parseInt(u[3].value,10),
			'UF_CRM_1570786834351':parseInt(u[5].value,10),
			'UF_CRM_1570786860041':parseInt(u[7].value,10),
			'UF_CRM_1570786894287':parseInt(u[9].value,10),
			'UF_CRM_1570786917117':parseInt(u[11].value,10),
			'UF_CRM_1573218541208':parseInt(u[13].value,10),
			'UF_CRM_1570786960689':parseInt(u[15].value,10),
			'UF_CRM_1570786977002':parseInt(u[17].value,10),
			'UF_CRM_1573297783135':(debt+debtEx)
			}
		})
	}).then((response) => {
		console.log(response);
		response.json().then((data) => {
			console.log(data.result);
			console.log(p[0].value);
			window.location.reload();
		});
	});
}

function addGoods(dealID) {
	y = x[2].getElementsByTagName("input");
	console.log(y);
	fetch('https://crm.corvus.ru/rest/47/7i7psg9pzq0nvc4p/crm.deal.productrows.set/', {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({
		'ID': dealID, 
		'ROWS':[
		{'PRODUCT_ID':200,'PRICE':checkGoods(0), 'QUANTITY':parseInt(y[1].value,10)},
		{'PRODUCT_ID':201,'PRICE':checkGoods(2), 'QUANTITY':parseInt(y[3].value,10)},
		{'PRODUCT_ID':202,'PRICE':checkGoods(4), 'QUANTITY':parseInt(y[5].value,10)},
		{'PRODUCT_ID':203,'PRICE':checkGoods(6), 'QUANTITY':parseInt(y[7].value,10)},
		{'PRODUCT_ID':204,'PRICE':checkGoods(8), 'QUANTITY':parseInt(y[9].value,10)},
		{'PRODUCT_ID':205,'PRICE':checkGoods(10), 'QUANTITY':parseInt(y[11].value,10)},
		{'PRODUCT_ID':291,'PRICE':checkGoods(12), 'QUANTITY':parseInt(y[13].value,10)},
		{'PRODUCT_ID':206,'PRICE':checkGoods(14), 'QUANTITY':parseInt(y[15].value,10)},
		{'PRODUCT_ID':207,'PRICE':checkGoods(16), 'QUANTITY':parseInt(y[17].value,10)}
		]})
	}).then((response) => {
		console.log(response);
		response.json().then((data) => {
			console.log(data.result);
			updateCompany();
			if (contactID != "") {
				updateBank();
			}
			window.location.reload();
		});
	});
	alert('Визит успешен!');
}

function checkGoods(num) {
	if (y[num+1].value != "") {
		console.log(y[num].value);
		return parseInt(y[num].value);
	} else {
		return ''; 
	}
}

function calculate(className, count, num) {
	y = x[2].getElementsByTagName('tr');
	l = y[10].getElementsByTagName('td');
	z = y[num].getElementsByTagName('td');
	g = 0;
	switch(className) {
		case 'price':
			priceList[num-1] = count; 
			break;
		case 'quantity':
			quantityList[num-1] = count; 
			break;
	}
	z[5].innerHTML = (priceList[num-1]*quantityList[num-1]); 
	for (var i = 0; i < priceList.length; i++) {
		g += priceList[i]*quantityList[i]; 
	}
	l[1].innerHTML = g;
}

function checkSale(a) {
	y = x[2].getElementsByTagName("input");
	if (!a) {
		sle = 'C1:1';
		for (var i = 0; i < y.length; i++) {
			y[i].disabled = true;
		}
	} else {
		sle = 'C1:WON';
		for (var i = 0; i < y.length; i++) {
			y[i].disabled = false;
		}
	}
}

function computeDebt(a) {
	debtEx = (parseInt(f[61].innerHTML)-parseInt(a));
}
