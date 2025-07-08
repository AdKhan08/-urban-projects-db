const cities = ["Agra","Aligarh","Lucknow"];

//Map starts
var selected_city = 'Agra';

function select_city(new_city) {
	// alert(selected_city + new_city);
	if(selected_city != new_city){
		document.getElementById(selected_city).setAttribute('class','unselected_city');
		document.getElementById(new_city).setAttribute('class','selected_city');
		selected_city = new_city;
		update_progress_bar(new_city);
		update_city_title(new_city);
	}
	
}
//Map ends


//progress bar starts (Intelligent Traffic Management System Junctions)

const var1_progress = ["60%","80%","90%"];
const var2_progress = ["80%","90%","100%"];

function update_progress_bar(new_city){
	let position = cities.indexOf(new_city);
	// document.getElementById('progress').setAttribute('style','background-color: rgb(156, 211, 98); border-radius: 20px; height: 16px; width:80%');
	document.getElementById('progress').style.width = var1_progress[position];
	document.getElementById('progress_percentage').innerHTML = var1_progress[position];

	document.getElementById('progress1').style.width = var2_progress[position];
	document.getElementById('progress_percentage1').innerHTML = var2_progress[position];
}

//progress bar ends (Intelligent Traffic Management System Junctions)


//progress bar starts (Monitoring of Water Supply in ABD Area)

const var3_progress = ["90%","80%","90%"];
const var4_progress = ["90%","90%","100%"];
const var5_progress = ["100%","90%","100%"];

function update_progress_bar(new_city){
	let position = cities.indexOf(new_city);
	// document.getElementById('progress').setAttribute('style','background-color: rgb(156, 211, 98); border-radius: 20px; height: 16px; width:80%');
	document.getElementById('progress2').style.width = var3_progress[position];
	document.getElementById('progress_percentage2').innerHTML = var3_progress[position];

	document.getElementById('progress3').style.width = var4_progress[position];
	document.getElementById('progress_percentage3').innerHTML = var4_progress[position];

	document.getElementById('progress4').style.width = var5_progress[position];
	document.getElementById('progress_percentage4').innerHTML = var5_progress[position];
}

//progress bar ends (Monitoring of Water Supply in ABD Area)

function update_city_title(new_city){
	document.getElementById('city_title_1').innerHTML = new_city;
}