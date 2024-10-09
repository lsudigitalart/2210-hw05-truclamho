let spacing = 7; 
let verticalProgress = 0; 
let horizontalProgress = 0; 

function setup() {
    createCanvas(800, 500);
    background(0);
    strokeWeight(1);
}

function draw() {
    background(0); 

    drawMovingVerticalLines();

    fill(0);  
    stroke(255); 
    strokeWeight(3);

    square((width / 2) - 340, (height / 2) - 150, 300);
    circle((width / 2) + 200, (height / 2), 300);

    drawGenerativeHorizontalLinesInSquare((width / 2) - 340, (height / 2) - 150, 300);
    drawGenerativeHorizontalLinesInCircle((width / 2) + 200, (height / 2), 300);
}

function drawMovingVerticalLines() {
    stroke(255);  
    strokeWeight(1);

    for (let x = -verticalProgress; x < width; x += spacing) {
        line(x, 0, x, height);  
    }

    // vertical speed and spacing 
    verticalProgress += 1;  
    if (verticalProgress >= spacing * 1) {
        verticalProgress = 0;  
    }
}

function drawGenerativeHorizontalLinesInSquare(xPos, yPos, size) {
    stroke(255);  
    strokeWeight(1);

    for (let y = 0; y < size; y += spacing * 1) {
        let drawPosX = (y + horizontalProgress) % size; 

        line(xPos, yPos + drawPosX, xPos + size, yPos + drawPosX); 
    }

    // horizontal speed and spacing 
    horizontalProgress += 0.05; 
    if (horizontalProgress >= spacing * 1) {
        horizontalProgress = 0; 
    }
}

function drawGenerativeHorizontalLinesInCircle(xPos, yPos, diameter) {
    stroke(255);  
    strokeWeight(1);
    let radius = diameter / 2;

    // loop inside circle from top
    for (let y = -radius; y < radius; y += spacing * 1) {       
        let drawPosY = (y + horizontalProgress) % (2 * radius); 
        let xOffset = sqrt(radius * radius - drawPosY * drawPosY);  

        line(xPos - xOffset, yPos + drawPosY, xPos + xOffset, yPos + drawPosY); 
    }

    // horizontal speed and spacing
    horizontalProgress += 0.05; 
    if (horizontalProgress >= spacing * 1) {
        horizontalProgress = 0; 
    }
}
