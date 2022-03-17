


function setup() {
  createCanvas(400,400);
//crear engine
  //Agregar world a engine
  
 
  
   
   
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //escribir una función rectangle para mostrar el suelo.
 


  
  
}

