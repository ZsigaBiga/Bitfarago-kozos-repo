var primT = [];

function prim(beszam){
	var i=2	 
	while( i*i<=beszam && beszam%i>0 )  i++
	return i*i<=beszam ? false : true
}  

function kiir(){
    let idx = 0;
    for( i=3; i<=100; i++ )
	{
		if( prim(i) ){
            primT[idx] = i;
            idx++;
        }
	}

    let x = 0; let y = 1;

    while(y != primT.length){
        document.getElementById("kiir").innerText += "( " + primT[x] + ", " + primT[y] + " ), ";
        x++;
        y++;
    }
}