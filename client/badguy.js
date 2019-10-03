function Badguy() {
    this.x;
    this.y;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;

    this.pickLocation = function() {
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    }

    this.draw = function() {
        ctx.fillStyle = "#FDFEFE";
        ctx.fillRect(this.x, this.y, scale, scale)
    }
    this.updateBG = function() {
        
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > canvas.width) {
            this.x = 0;
        }
        if (this.y > canvas.height) {
            this.y = 0;
        }
        if (this.x < 0) {
            this.x = canvas.width;
        }
        if (this.y < 0) {
            this.y = canvas.height;
        }
    }
}
function Badguy2() {
    this.x;
    this.y;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;

    this.pickLocation = function() {
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    }

    this.draw = function() {
        ctx.fillStyle = "#FDFEFE";
        ctx.fillRect(this.x, this.y, scale, scale)
    }
    this.updateBG = function() {
        
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > canvas.width) {
            this.x = 0;
        }
        if (this.y > canvas.height) {
            this.y = 0;
        }
        if (this.x < 0) {
            this.x = canvas.width;
        }
        if (this.y < 0) {
            this.y = canvas.height;
        }
    }
}
function Badguy3() {
    this.x;
    this.y;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;

    this.pickLocation = function() {
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    }

    this.draw = function() {
        ctx.fillStyle = "#FDFEFE";
        ctx.fillRect(this.x, this.y, scale, scale)
    }
    this.updateBG = function() {
        
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > canvas.width) {
            this.x = 0;
        }
        if (this.y > canvas.height) {
            this.y = 0;
        }
        if (this.x < 0) {
            this.x = canvas.width;
        }
        if (this.y < 0) {
            this.y = canvas.height;
        }
    }
}
function Badguy4() {
    this.x;
    this.y;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;

    this.pickLocation = function() {
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    }

    this.draw = function() {
        ctx.fillStyle = "#FDFEFE";
        ctx.fillRect(this.x, this.y, scale, scale)
    }
    this.updateBG = function() {
        
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > canvas.width) {
            this.x = 0;
        }
        if (this.y > canvas.height) {
            this.y = 0;
        }
        if (this.x < 0) {
            this.x = canvas.width;
        }
        if (this.y < 0) {
            this.y = canvas.height;
        }
    }
}


