var quantity = [1, 1, 1];
var price=[1.99,3.99, 1.25];

document.addEventListener("DOMContentLoaded", function(event) { 
  
	for(var i = 0; i < quantity.length; ++i){
		checkDeletedCookie(3);
		checkCookie(i);
		if (getCookie('rowDelete'+(i+1)) != 'false'){
			var itemIdString = "row" + (i+1) + "quantity";
			document.getElementById(itemIdString).innerHTML=quantity[i];
			changeSinglePrice(i+1);
		}
  }
  theprice();
});

function delete_row(num){
	document.getElementById("row"+num+"").innerHTML="";
	setCookie('rowDelete'+num,'false');
	quantity[num-1]=0;
	theprice();
}

function changeSinglePrice(itemid){
    var productQuantity = quantity[itemid-1];
    var unitPrice = price[itemid-1];
    var productPrice = Math.floor(productQuantity * unitPrice *100)/100;
    document.getElementById("row" +itemid+ "price").innerHTML='$' + productPrice;
}

function theprice() {
	var row1= quantity[0];
	var row2= quantity[1];
	var row3= quantity[2];
	
	
	
	var itemcount=row1+row2+row3;
	document.getElementById("itemnb").innerHTML = "<h2>"+itemcount+" Items</h2>";
	
	var total=1.99*row1+3.99*row2+1.25*row3;
	var qst=total*0.0975;
	var gst=total*0.05;
	var tax=total+qst+gst;
	
	total=Math.floor(total* 100) / 100;
	qst=Math.floor(qst* 100) / 100;
	gst=Math.floor(gst* 100) / 100;
	tax=Math.floor(tax* 100) / 100;
	
	document.getElementById("total").innerHTML = total+"$";
	document.getElementById("qst").innerHTML = qst+"$";
	document.getElementById("gst").innerHTML = gst+"$";
	document.getElementById("tax").innerHTML = tax+"$";
}

function add(itemId){
	
	quantity[itemId - 1]++;
	var itemIdString = "row" + itemId + "quantity";
	document.getElementById(itemIdString).innerHTML=quantity[itemId - 1];
	theprice();
    changeSinglePrice(itemId);
	setCookie('cart'+itemId, quantity[itemId - 1]);
}
function sub(itemId){
	quantity[itemId - 1]--;
	if (quantity[itemId - 1] < 1)
		quantity[itemId - 1] = 1;

	var itemIdString = "row" + itemId + "quantity";
	document.getElementById(itemIdString).innerHTML=quantity[itemId - 1];
	theprice();
    changeSinglePrice(itemId);
	setCookie('cart'+itemId, quantity[itemId - 1]);
}

function checkCookie(j) {
	var i = j+1;
	if (getCookie('rowDelete'+i) == 'false') {
			quantity[j]=0;
			setCookie('cart'+i, 0);
			delete_row(i);
		} else if (getCookie('rowDelete'+i) != 'true') {
			setCookie('rowDelete'+i,'true');
		} else{ 
			
			if (getCookie('cart'+i) != 'NaN' && getCookie('cart'+i) != '') {
				quantity[j]=getCookie('cart'+i)-0;
			}
			else{
				setCookie('cart'+i,1);
				quantity[j]=1;
			}
	}
  
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



function checkDeletedCookie(nbProducts) {
	for(var j=1; j<=nbProducts;j++){
		if (getCookie('rowDelete'+j) == 'false') {
			quantity[j-1]=0;
			setCookie('cart'+j, 0);
			delete_row(j);
		} else if (getCookie('rowDelete'+j) != 'true') {
			setCookie('rowDelete'+j,'true');
		}
	}
}

function goback(){
	window.history.back();
}

/*
function delete_row(no){
	setCookie('rowDelete'+no,'false');
    document.getElementById("row"+no+"").outerHTML="";
}
*/