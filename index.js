const cities = ["disc_agra","disc_aligarh","disc_lucknow"];

//Map starts
var selected_city = 'disc_agra';

function select_city(new_city) {
	// alert(selected_city + new_city);
	if(selected_city != new_city){
		document.getElementById(selected_city).setAttribute('class','unselected_city');
		document.getElementById(new_city).setAttribute('class','selected_city');
		selected_city = new_city;
		update_progress_bar(new_city);
	}
	
}
//Map ends


//progress bar starts

const progress = ["20%","40%","80%"];

function update_progress_bar(new_city){
	let position = cities.indexOf(new_city);
	// document.getElementById('progress').setAttribute('style','background-color: rgb(156, 211, 98); border-radius: 20px; height: 16px; width:80%');
	document.getElementById('progress').style.width = progress[position];
	document.getElementById('progress_percentage').innerHTML = progress[position];
}

//progress bar ends

window.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:5000/api/linechart-data')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('lineChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.labels,
                    datasets: data.datasets
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true
                        },
                        title: {
                            display: true,
                            text: 'Project Costs Over Time'
                        }
                    }
                }
            });
        });
});