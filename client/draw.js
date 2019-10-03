const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale; 

var snake; 

(function setup() {
    snake = new Snake();
    fruit = new Fruit();
    badguy = new Badguy();
    badguy2 = new Badguy2();
    badguy3 = new Badguy3();
    badguy4 = new Badguy4();


    fruit.pickLocation();
    badguy.pickLocation();
    badguy2.pickLocation();
    badguy3.pickLocation();
    badguy4.pickLocation();
    
    
    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();
        badguy.draw();
        badguy.updateBG();
        badguy2.draw();
        badguy2.updateBG();
        badguy3.draw();
        badguy3.updateBG();
        badguy4.draw();
        badguy4.updateBG();

        if (snake.eat(fruit)) {
            fruit.pickLocation();
        }
        snake.checkCollision();
        snake.checkBadguy();
        snake.checkBadguy2();
        snake.checkBadguy3();
        snake.checkBadguy4();
        document.querySelector('.score')
            .innerText = snake.total;
        
    }, 250);
}()); 

window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction) 
})) 