//Create a reference for canvas 
canvas= document.getElementById('myCanvas');
ctx= canvas.getContext("2d");


//Give specific height and width to the car image
car2_width= 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
car2_x= 10;
car2_y= 10;

function add() {
	//upload car, and background images on the canvas.
	background_imgTag= new Image();
    background_imgTag.onload= parkingLot.jpg;
    background_imgTag.src= background_image;

    greencar_imageTag= new Image();
    greencar_imageTag.onload= car2.png;
    greencar_imageTag.src= car2_image;    
}


function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imageTag,greencar_x,greencar_y,greencar_width,greencar_heigth);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (car2_y >=0)
    {
        car2_y=car2_y-10;
        console.log("up arrow pressed x="+car2_x+",y="+car2_y);
        uploadBackground();
        uploadgreencar();

    }
}

function down()
{
	if (car2_y <=500)
	{
		car2_y= car2_y+10;
		console.log("down arrow pressed x="+car2_x+",y="+car2_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if (car2_x >=0)
	{
		car2_x=car2_x-10;
		console.log("left arrow pressed x="+rover_x+",y="+rover_y);
		uploadBackground
		uploadgreencar
	}
}

function right()
{
	if (car2_x <=700)
	{
		car2_x=car2_x+10;
		console.log("right arrow pressed x="+car2_x+",y="+car2_y);
	}
}
