document.querySelector('#inputs button').addEventListener('click', function (event) {
	event.preventDefault();
	let var_x, var_y, var_z, msg, fill_x, fill_y, space, cycle;
	var_x = parseInt(document.querySelector('.input_x').value);
	var_y = parseInt(document.querySelector('.input_y').value);
	var_z = parseInt(document.querySelector('.input_z').value);
	document.querySelector('#resultado table tbody').innerHTML = "";
	fill_x = 0;
	fill_y = 0;
	space = 0;
	cycle = 0;
	
	if(typeof var_x === 'number' && typeof var_y === 'number' && typeof var_z === 'number'){
		if( Math.abs(var_x - var_z) <= Math.abs(var_y - var_z) ){
			//alert("x");
			while(true){
				if(fill_x === 0){
					fill_x = var_x;
					add_row(fill_x, fill_y, "Fill bucket x");
				}else if(fill_y == var_y){
					fill_y = 0;
					add_row(fill_x, fill_y, "Fill bucket x");
					cycle++;
				}else{
					space = var_y - fill_y;
					if(fill_x <= space){
						fill_y += fill_x;
						fill_x = 0;
					}else{
						fill_y += space;
						fill_x = var_x - space;
					}
					if(fill_x === var_z || fill_y === var_z){
						add_row(fill_x, fill_y, "Transfer bucket x to bucket y. <b>Solved</b>");
						break;
					}else{
						add_row(fill_x, fill_y, "Transfer bucket x to bucket y.");
					}
				}
				if(cycle === 2){
					add_row(fill_x, fill_y, "No Solution");
					break;
				}
			}
		}else{
			//alert("y");
			while(true){
				if(fill_y === 0){
					fill_y = var_y;
					add_row(fill_x, fill_y, "Fill bucket y");
				}else if(fill_x == var_x){
					fill_x = 0;
					add_row(fill_x, fill_y, "Fill bucket y");
					cycle++;
				}else{
					space = var_x - fill_x;
					if(fill_y <= space){
						fill_x += fill_y;
						fill_y = 0;
					}else{
						fill_x += space;
						fill_y = var_y - space;
					}
					if(fill_x === var_z || fill_y === var_z){
						add_row(fill_x, fill_y, "Transfer bucket y to bucket x. <b>Solved</b>");
						break;
					}else{
						add_row(fill_x, fill_y, "Transfer bucket y to bucket x.");
					}
				}
				if(cycle === 2){
					add_row(fill_x, fill_y, "No Solution");
					break;
				}
			}
		}
	}
	
}, false);

function add_row(x, y, message){
	document.querySelector('#resultado table tbody').innerHTML += `<tr>
		<td>`+x+`</td>
		<td>`+y+`</td>
		<td>`+message+`</td>
	</tr>`;
}