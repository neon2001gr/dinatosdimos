var chartDimotika = new CanvasJS.Chart("chartDimotika", {
	animationEnabled: true,
	title:{
		//text: "Συγκεντρωτικά Στοιχεία"
	},
	axisY: {
		//title: "Medals"
	},
	legend: {
		cursor:"pointer",
		itemclick : toggleDataSeries
	},
	toolTip: {
		shared: true,
		content: toolTipFormatter
	},
	data: [{
		type: "bar",
		showInLegend: true,
		name: "Δυνατός Δήμος",
		color: "blue",
		dataPoints: dinatosdimos_apotelesmata_dimotika
	},
	{
		type: "bar",
		showInLegend: true,
		name: "Το Νησί μας",
		color: "yellow",
		dataPoints: nisi_apotelesmata_dimotika
	},
	{
		type: "bar",
		showInLegend: true,
		name: "Κοντά στον Δημότη",
		color: "grey",
		dataPoints: konta_apotelesmata_dimotika
	},
	{
		type: "bar",
		showInLegend: true,
		name: "Πρωτοβουλία Πολιτών",
		color: "green",
		dataPoints: protovoulia_apotelesmata_dimotika
	},
	{
		type: "bar",
		showInLegend: true,
		name: "Ανασυγκρότηση Σαλαμίνας",
		color: "#00FFFF",
		dataPoints: anasygkrotisi_apotelesmata_dimotika
	},
	{
		type: "bar",
		showInLegend: true,
		name: "Βήμα στους Πολίτες",
		color: "orange",
		dataPoints: vima_apotelesmata_dimotika
	},
	{
		type: "bar",
		showInLegend: true,
		name: "Λαική Συσπείρωση",
		color: "red",
		dataPoints: laiki_apotelesmata_dimotika
	},
	]
});


var chartTopika = new CanvasJS.Chart("chartTopika", {
	animationEnabled: true,
	title:{
		//text: "Συγκεντρωτικά Στοιχεία"
	},
	axisY: {
		//title: "Medals"
	},
	legend: {
		cursor:"pointer",
		itemclick : toggleDataSeries
	},
	toolTip: {
		shared: true,
		//content: toolTipFormatter
	},
	data: [{
		type: "bar",
		showInLegend: true,
		name: "Δυνατός Δήμος",
		color: "blue",
		dataPoints: dinatosdimos_apotelesmata_topika
	},
	{
		type: "bar",
		showInLegend: true,
		name: "Το Νησί μας",
		color: "yellow",
		dataPoints: nisi_apotelesmata_topika
	},
	{
		type: "bar",
		showInLegend: true,
		name: "Κοντά στον Δημότη",
		color: "grey",
		dataPoints: konta_apotelesmata_topika
	},
	{
		type: "bar",
		showInLegend: true,
		name: "Πρωτοβουλία Πολιτών",
		color: "green",
		dataPoints: protovoulia_apotelesmata_topika
	},
	{
		type: "bar",
		showInLegend: true,
		name: "Ανασυγκρότηση Σαλαμίνας",
		color: "#00FFFF",
		dataPoints: anasygkrotisi_apotelesmata_topika
	},
	{
		type: "bar",
		showInLegend: true,
		name: "Βήμα στους Πολίτες",
		color: "orange",
		dataPoints: vima_apotelesmata_topika
	},
	{
		type: "bar",
		showInLegend: true,
		name: "Λαική Συσπείρωση",
		color: "red",
		dataPoints: laiki_apotelesmata_topika
	},
	{
		type: "bar",
		showInLegend: true,
		name: "Τραυλός",
		color: "red",
		dataPoints: travlos_apotelesmata_topika
	},
	]
});


chartDimotika.render();
chartTopika.render();




function toolTipFormatter(e) {
	var str = "";
	var total = 0 ;
	var str3;
	var str2 ;
	for (var i = 0; i < e.entries.length; i++){
		var str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\">" + e.entries[i].dataSeries.name + "</span>: <strong>"+  e.entries[i].dataPoint.y + "</strong> <br/>" ;
		total = e.entries[i].dataPoint.y + total;
		str = str.concat(str1);
	}
	str2 = "<strong>" + e.entries[0].dataPoint.label + "</strong> <br/>";
	str3 = "<span style = \"color:Tomato\">Total: </span><strong>" + total + "</strong><br/>";
	return (str2.concat(str)).concat(str3);
}

function toggleDataSeries(e) {
	if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else {
		e.dataSeries.visible = true;
	}
	chartDimotika.render();
	chartTopika.render();;
}

