var cust, customer, custSitting;
var bg, background;
var chairX, chairY;

function preload(){
  //cust = loadAnimation("customer/standing.png", "customer/back.png", "customer/sitting.png", 
  //"customer/turn.png");
  cust = loadAnimation("customer/standing.png");
  custSitting = loadAnimation("customer/sitting.png")
  bg = loadImage("Restaurant.jpg");

}

function setup() {
  createCanvas(displayWidth-50, displayHeight-70);

  customer = createSprite(displayWidth-50, displayHeight/2, 50, 50);
  customer.addAnimation("walking", cust);
  customer.addAnimation("sitting", custSitting);
  customer.scale = 2;

  

}

function draw() {
  background(bg);
  //console.log(customer.x + "   "+ customer.y);  
  drawSprites();
}

function mouseClicked(){
  console.log(mouseX + "   " +mouseY);
  chairX = mouseX;
  chairY = mouseY;
  customer.x = chairX;
  customer.y = chairY;
  customer.changeAnimation("sitting", custSitting);
}