var hour,min,sec,hourAngle,minangle,secangle

function setup() {
  createCanvas(400,400);
angleMode(DEGREES)
}

function draw() {
background(0)
translate(200,200)
rotate(-90)
hour=hour()
hourAngle=map(hour%12,0,12,0,360)
push()
rotate(hourAngle)
stroke("blue")
strokeWeight(7)
line(0,0,50,0)
pop()
}