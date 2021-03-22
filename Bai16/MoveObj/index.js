function MainChar(image, top,left,size){
    this.image= image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.getPosition = function(){
        return `<img width = "${this.size}" height = "${this.size}" src="${this.image}"
                    style="top:${this.top}px; left:${this.left}px;position:absolute"
                />`
    }
    this.moveLeft = function(){
        this.left = this.left -50;
    };
    this.moveRight = function(){
        this.left = this.left + 50;
    };
    this.moveUp = function(){
        this.top = this.top -50;
    };
    this.moveDown = function(){
        this.top = this.top +50;
    };
}

let mainChar = new MainChar('car.png',20,30,300);
function startMoving(){
    // addEventListener('keyup',function(event){
    //     switch(event.keyCode){
    //         case 37:
    //             mainChar.moveLeft()
    //             console.log(mainChar);
    //             break;
    //         case 38:
    //             mainChar.moveUp()
    //             break;
    //         case 39:
    //             mainChar.moveRight()
    //             break;
    //         case 40:
    //             mainChar.moveDown()
    //             break;
    //     }
    //     console.log(mainChar.getPosition());
    //     document.getElementById("game").innerHTML = mainChar.getPosition();
    //     })
    //
    //
    // })
    if(mainChar.left < window.innerWidth - mainChar.size&& mainChar.left>0){
        mainChar.moveLeft();
    }
    // else if(mainChar.left <0 ){
    //     mainChar.moveRight()
    // }
    document.getElementById("game").innerHTML = mainChar.getPosition();
    setTimeout(startMoving, 100)
}
startMoving();