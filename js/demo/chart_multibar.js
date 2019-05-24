var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Συγκεντρωτικά Στοιχεία"
	},
	axisY: {
		title: "Medals"
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
		dataPoints: [
			{ y: 243, label: "1ο Σαλαμίνας" },
			{ y: 236, label: "2ο Σαλαμίνας" },
			{ y: 243, label: "Αιαντείου" },
			{ y: 273, label: "Αμπελακίων" },
			{ y: 269, label: "Σελήνια" }
		]
	},
	{
		type: "bar",
		showInLegend: true,
		name: "Silver",
		color: "silver",
		dataPoints: [
			{ y: 243, label: "1ο Σαλαμίνας" },
			{ y: 236, label: "2ο Σαλαμίνας" },
			{ y: 243, label: "Αιαντείου" },
			{ y: 273, label: "Αμπελακίων" },
			{ y: 269, label: "Σελήνια" }
		]
	},
	{
		type: "bar",
		showInLegend: true,
		name: "asd",
		color: "red",
		dataPoints: [
			{ y: 243, label: "1ο Σαλαμίνας" },
			{ y: 236, label: "2ο Σαλαμίνας" },
			{ y: 243, label: "Αιαντείου" },
			{ y: 273, label: "Αμπελακίων" },
			{ y: 269, label: "Σελήνια" }
		]
	},
	{
		type: "bar",
		showInLegend: true,
		name: "Bronze",
		color: "#A57164",
		dataPoints: [
			{ y: 243, label: "1ο Σαλαμίνας" },
			{ y: 236, label: "2ο Σαλαμίνας" },
			{ y: 243, label: "Αιαντείου" },
			{ y: 273, label: "Αμπελακίων" },
			{ y: 269, label: "Σελήνια" }
		]
	}]
});
chart.render();

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
	chart.render();
}

