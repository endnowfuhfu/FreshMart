
var quantity;
var product;

//Waits for page to fully load before changing part of the html. It s a consequence of having a seperate script file.
//Make sure to add what needs to be updated when the page loads.
document.addEventListener("DOMContentLoaded", function(event) { 
  product="quantity"+document.getElementById('ckname').innerHTML;
  product=product.split(' ').join('')
  checkCookie();
  document.getElementById('quantity').innerHTML=quantity;
  setSubtotal();
  
});

	
function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
	
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Expand"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Collapse"; 
    moreText.style.display = "inline";
  }
}
function add(){
	quantity++;
	document.getElementById('quantity').innerHTML=quantity;
	setCookie(product, quantity)
	setSubtotal();
}
function sub(){
	quantity--;
	if (quantity<0)
		quantity=0;
	document.getElementById('quantity').innerHTML=quantity;
	setCookie(product, quantity)
	setSubtotal();
}

function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";";
}

function getCookie(cname) {
  var name = cname + "=";
  name=name.split(' ').join('');
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  
  if (getCookie(product) != 'NaN' && getCookie(product) != '') {
	quantity=getCookie(product)-0;
	
  }
  else{
	setCookie(product,0);
	quantity=0;
  }
}

function setSubtotal(){
	var pricestr = document.getElementById("price").textContent.substring(2);
	var priceflt = parseFloat(pricestr);
	var numitems = document.getElementById("quantity").textContent;
	function subtotal (num, price) {
		return (num * price);
	}
	var multiply = subtotal(numitems, priceflt);
	multiply = Math.floor(multiply* 100) / 100;
	document.getElementById("subtotal").innerHTML = "$" + multiply;
}

/*document.addEventListener("DOMContentLoaded", function(event) { 
  checkCookie(3);
});

function delete_row(no){
	setCookie('row'+no,'false');
 document.getElementById("row"+no+"").outerHTML="";
}

function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";";
}

function getCookie(cname) {
  var name = cname + "=";
  name=name.split(' ').join('');
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(nbProducts) {
	//
	for(var j=1; j<=nbProducts;j++){
		if (getCookie('row'+j) == 'false') {
			delete_row(j);
		} else if (getCookie('row'+j) != 'true') {
			setCookie('row'+j,'true');
		}
	}
}*/
