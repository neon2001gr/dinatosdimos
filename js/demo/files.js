
var date_time = "12:00";
var enswmatwsi = 10;
var pososta = [10, 33, 44, 55, 77, 55,99] 
var pososta_ana_eklogiko = [42, 53, 62, 500, 98, 14];




document.getElementById("dinatos_dimos_pososto").innerHTML 	 = String(pososta[0])+'%';
document.getElementById("nisi_pososto").innerHTML       	 = String(pososta[1])+'%';
document.getElementById("konta_dimoti_pososto").innerHTML 	 = String(pososta[2])+'%';
document.getElementById("prwtoboulia_pososto").innerHTML 	 = String(pososta[3])+'%';
document.getElementById("anasygkrotisi_pososto").innerHTML 	 = String(pososta[4])+'%';
document.getElementById("vima_pososto").innerHTML 			 = String(pososta[5])+'%';
document.getElementById("laiki_pososto").innerHTML 			 = String(pososta[6])+'%';
document.getElementById("date_time").innerHTML 			     = "Τελευταία Ενημέρωση: Κυριακή 26.05.2019, " + date_time ;
document.getElementById("enswmatwsi").innerHTML 			 = "Ενσωμάτωση: " + enswmatwsi + "%";