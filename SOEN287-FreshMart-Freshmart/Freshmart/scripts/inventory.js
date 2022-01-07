//Both the list of products and the product edit page use this code.


//For displaying images. Check HTML.
var loadFile = function(event) {
	var image = document.getElementById('preview');
	image.src = URL.createObjectURL(event.target.files[0]);
	
};

//Recives a certain serial number and sets a cookie to retain the information. Will display the information of the product with that number.
function productEdit(serialNum){
	setCookie('inventoryNum',serialNum)
	window.location.href = "product-edit.html";
		
}

//Modifies the input values of the html by those already existing in the file, or leaves them blank (if we are adding a new entry).
function setEdit(){
	num=getCookie('inventoryNum');
	//-1 indicates a new entry, it can be anything really.
	
	//Missing code, for now only the serial numbers of the page are changed, it will need to modify all input values in the future.
	if(num='-1'){
		
		document.getElementById('productTitle').innerHTML="Product #P - 000013";
		document.getElementById('serialNum').value="000013";
	} else if (num<10){
		document.getElementById('productTitle').innerHTML="Product #P - 00000"+num;
		document.getElementById('serialNum').value="00000"+num;
	} else if (num<100){
		document.getElementById('productTitle').innerHTML="Product #P - 0000"+num;
		document.getElementById('serialNum').value="0000"+num;
	}

}

//Use these to create/set cookies, and read them. they can be copied as is.

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