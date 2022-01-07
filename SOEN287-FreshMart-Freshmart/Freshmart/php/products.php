<html>
<body>

<?php 
//Opening the file for reading and writing
$productfile = fopen("productList.txt", "r+");

//Counting the number of lines in the file.
$linecount=0;
while(!feof($productfile)){
  $line = fgets($productfile);
  $linecount++;
  
//Getting the serial number.
$productNum=(int)($_POST['serialNum']);
}
//Checking the serial number to know if there is already a line with that number (assuming they are ordered)
if($linecount<$productNum){
	//If that line dosent exist it'll create it
	fwrite($productfile,json_encode($_POST));
}
//Missing code, in the case that the line exists, it needs to overwrite it.

//Once the writing is done, it needs to send the user back to another page.
 ?>
Saving...

</body>
</html> 
