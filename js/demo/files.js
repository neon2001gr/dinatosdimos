
var date_time = "12:00";
var enswmatwsi = 10;
var pososta = [10, 33, 44, 55, 77, 55,99] 
var pososta_ana_eklogiko = [42, 53, 62, 500, 98, 14];

dynatos = { 
			'dimotika':{
					'sal_1o':200, 
					'sal_2o':200, 
					'aianteio':200, 
					'ampelakia':200, 
					'selinia':200, 
					  },
			'koinwtika':{
					'sal_1o':200, 
					'sal_2o':200, 
					'aianteio':200, 
					'ampelakia':200, 
					'selinia':200, 
					  }
					  
		  }

var dinatosdimos_apotelesmata_dimotika	= [	{ y: dynatos['dimotika']['sal_1o'], label: "1ο Σαλαμίνας" },
											{ y: dynatos['dimotika']['sal_2o'], label: "2ο Σαλαμίνας" },
											{ y: dynatos['dimotika']['aianteio'], label: "Αιαντείου" },
											{ y: dynatos['dimotika']['ampelakia'], label: "Αμπελακίων" },
											{ y: dynatos['dimotika']['selinia'], label: "Σελήνια" }];

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


											

