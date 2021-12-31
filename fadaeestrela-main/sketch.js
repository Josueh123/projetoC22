var starImg,bgImg;
var star, starBody;
var fadaImg;
var vozFada;
var fada;

//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    fadaImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    vozFada = loadSound("sound/joyMusic.mp3"); 

}

function setup() {

    createCanvas(800, 750);

    

    //escrever código para tocar o som vozFada

    vozFada.playSound;

    //criar sprite de fada e adicionar animação para fada

    fada = createSprite(100,470,10,10);
    fada.addAnimation("fadaVoando",fadaImg);
    fada.scale = 0.3;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

   

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw(){

    background(bgImg);

    if(star.y > 470 && starBody.postition.y> 470){

        Matter.Body.setStatic(starBody,true);

    } 

    if(keyDown("RIGHT_ARROW")){

    fada.x = fada.x + 5;

    }

    if(keyDown("LEFT_ARROW")){

        fada.x = fada.x -5;

    }

    if(keyWentDown("DOWN_ARROW")){

        Matter.Body.setStatic(starBody,false);

    }

    drawSprites();
}