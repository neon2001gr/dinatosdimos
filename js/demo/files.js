
var date_time = "12:00";
var enswmatwsi = 10;
var pososta = [10, 33, 44, 55, 77, 55,99] 
var pososta_ana_eklogiko = [42, 53, 62, 500, 98, 14];

var dinatosdimos_apotelesmata_dimotika	= [	{ y: 243, label: "1ο Σαλαμίνας" },
											{ y: 236, label: "2ο Σαλαμίνας" },
											{ y: 243, label: "Αιαντείου" },
											{ y: 273, label: "Αμπελακίων" },
											{ y: 269, label: "Σελήνια" }];

var nisi_apotelesmata_dimotika 			= [	{ y: 243, label: "1ο Σαλαμίνας" },
											{ y: 236, label: "2ο Σαλαμίνας" },
											{ y: 243, label: "Αιαντείου" },
											{ y: 273, label: "Αμπελακίων" },
											{ y: 269, label: "Σελήνια" }];
var konta_apotelesmata_dimotika 		= [	{ y: 243, label: "1ο Σαλαμίνας" },
											{ y: 236, label: "2ο Σαλαμίνας" },
											{ y: 243, label: "Αιαντείου" },
											{ y: 273, label: "Αμπελακίων" },
											{ y: 269, label: "Σελήνια" }];
var protovoulia_apotelesmata_dimotika 	= [	{ y: 243, label: "1ο Σαλαμίνας" },
											{ y: 236, label: "2ο Σαλαμίνας" },
											{ y: 243, label: "Αιαντείου" },
											{ y: 273, label: "Αμπελακίων" },
											{ y: 269, label: "Σελήνια" }];
var anasygkrotisi_apotelesmata_dimotika = [	{ y: 243, label: "1ο Σαλαμίνας" },
											{ y: 236, label: "2ο Σαλαμίνας" },
											{ y: 243, label: "Αιαντείου" },
											{ y: 273, label: "Αμπελακίων" },
											{ y: 269, label: "Σελήνια" }];
var vima_apotelesmata_dimotika 			= [	{ y: 243, label: "1ο Σαλαμίνας" },
											{ y: 236, label: "2ο Σαλαμίνας" },
											{ y: 243, label: "Αιαντείου" },
											{ y: 273, label: "Αμπελακίων" },
											{ y: 269, label: "Σελήνια" }];
var laiki_apotelesmata_dimotika 		= [	{ y: 243, label: "1ο Σαλαμίνας" },
											{ y: 236, label: "2ο Σαλαμίνας" },
											{ y: 243, label: "Αιαντείου" },
											{ y: 273, label: "Αμπελακίων" },
											{ y: 269, label: "Σελήνια" }];
var dinatosdimos_apotelesmata_topika 	= [	{ y: 243, label: "1ο Σαλαμίνας" },
											{ y: 236, label: "2ο Σαλαμίνας" },
											{ y: 243, label: "Αιαντείου" },
											{ y: 273, label: "Αμπελακίων" },
											{ y: 269, label: "Σελήνια" }];
var nisi_apotelesmata_topika 			= [	{ y: 243, label: "1ο Σαλαμίνας" },
											{ y: 236, label: "2ο Σαλαμίνας" },
											{ y: 243, label: "Αιαντείου" },
											{ y: 273, label: "Αμπελακίων" },
											{ y: 269, label: "Σελήνια" }];
var konta_apotelesmata_topika 			= [	{ y: 243, label: "1ο Σαλαμίνας" },
											{ y: 236, label: "2ο Σαλαμίνας" },
											{ y: 243, label: "Αιαντείου" },
											{ y: 273, label: "Αμπελακίων" },
											{ y: 269, label: "Σελήνια" }];
var protovoulia_apotelesmata_topika 	= [	{ y: 243, label: "1ο Σαλαμίνας" },
											{ y: 236, label: "2ο Σαλαμίνας" },
											{ y: 243, label: "Αιαντείου" },
											{ y: 273, label: "Αμπελακίων" },
											{ y: 269, label: "Σελήνια" }]
var anasygkrotisi_apotelesmata_topika 	= [	{ y: 243, label: "1ο Σαλαμίνας" },
											{ y: 236, label: "2ο Σαλαμίνας" },
											{ y: 243, label: "Αιαντείου" },
											{ y: 273, label: "Αμπελακίων" },
											{ y: 269, label: "Σελήνια" }];
var vima_apotelesmata_topika 			= [	{ y: 243, label: "1ο Σαλαμίνας" },
											{ y: 236, label: "2ο Σαλαμίνας" },
											{ y: 243, label: "Αιαντείου" },
											{ y: 273, label: "Αμπελακίων" },
											{ y: 269, label: "Σελήνια" }]
var laiki_apotelesmata_topika 			= [	{ y: 243, label: "1ο Σαλαμίνας" },
											{ y: 236, label: "2ο Σαλαμίνας" },
											{ y: 243, label: "Αιαντείου" },
											{ y: 273, label: "Αμπελακίων" },
											{ y: 269, label: "Σελήνια" }];
var travlos_apotelesmata_topika 		= [	{ y: 243, label: "1ο Σαλαμίνας" },
											{ y: 236, label: "2ο Σαλαμίνας" },
											{ y: 243, label: "Αιαντείου" },
											{ y: 273, label: "Αμπελακίων" },
											{ y: 269, label: "Σελήνια" }];


											
document.getElementById("dinatos_dimos_pososto").innerHTML 	 = String(pososta[0])+'%';
document.getElementById("nisi_pososto").innerHTML       	 = String(pososta[1])+'%';
document.getElementById("konta_dimoti_pososto").innerHTML 	 = String(pososta[2])+'%';
document.getElementById("prwtoboulia_pososto").innerHTML 	 = String(pososta[3])+'%';
document.getElementById("anasygkrotisi_pososto").innerHTML 	 = String(pososta[4])+'%';
document.getElementById("vima_pososto").innerHTML 			 = String(pososta[5])+'%';
document.getElementById("laiki_pososto").innerHTML 			 = String(pososta[6])+'%';
document.getElementById("date_time").innerHTML 			     = "Τελευταία Ενημέρωση: Κυριακή 26.05.2019, " + date_time ;
document.getElementById("enswmatwsi").innerHTML 			 = "Ενσωμάτωση: " + enswmatwsi + "%";
document.getElementById("date_time_charts").innerHTML 		 = "Τελευταία Ενημέρωση: Κυριακή 26.05.2019, " + date_time ;
document.getElementById("enswmatwsi_charts").innerHTML 		 = "Ενσωμάτωση: " + enswmatwsi + "%";