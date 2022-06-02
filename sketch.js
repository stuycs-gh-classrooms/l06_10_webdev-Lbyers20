function setup() {
  createCanvas(400, 400);
  background(100);
  fill(255);
  
  let radius = 30;
  let xSpeed = random(1, 5);
  let ySpeed = random(1, 5);
  let = random(width/4, 3*width/4);
  let = random(height/4, 3*height/4);

  background(100);
  circle(x, y, 2* radius);
  x += xSpeed;
  y += ySpeed;
   
  if(x >= width - radius || x <= radius){
    xSpeed *= -1;
  }
  else if(y >= height - radius || y <= radius){
    ySpeed *= -1;
  }
}
