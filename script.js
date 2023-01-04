
 let darkicon = document.querySelector('.icon');
 darkicon.addEventListener('click', function () {
     let body = document.body;
     body.classList.toggle('dark-mode')
 })
//console.log(darkicon)

let reset = document.querySelector('.reset');
reset.addEventListener('click', function() {
    window.location.reload()
})

//This class holds the array that will hold the alienships 

class SpaceShip {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy
    }
    attack(enemyShip) {
        enemyShip.hull -= this.firepower
       
   
}
    // attacked(MainShip) {
    //     if (fleet[i].accuracy)> Math.random()
        
   // }
}

//Alien Class Start 
class Aliens{
    constructor() {
        this.defeated = false;
        this.ships = [];
    }
    // Function to generate random number 
    randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    } 

    //Function to Generate Random Decimal
    randomDeci(min, max) { 
    return +(Math.random() * (max - min) + min).toFixed(1);
} 
    addAlienShip(name) {
        
        let newAlien = new SpaceShip(this.randomNumber(3, 6), this.randomNumber(2, 4), this.randomDeci(.6, .8));
        
        this.ships.push(newAlien)
    }
    

}
//Alien Class End 
//Alen Ships

const  enemies = new Aliens();
    enemies.addAlienShip()
    enemies.addAlienShip()
    enemies.addAlienShip()
    enemies.addAlienShip()
    enemies.addAlienShip()
    enemies.addAlienShip()
//console.log(enemies.ships)    
  

//console.log(levels)
// MainShip
let HelloWorld = new SpaceShip(20, 5, 0.7)

//Function

const fightBattle = () => {
    let fleet = enemies.ships;
    
    for (let i = 0; i < fleet.length; i++) {
          
        if (HelloWorld.hull < 1) {
            break
        }
       
        while (HelloWorld.hull > 0 || fleet[i].hull > 0) {
              
            if (Math.random() < HelloWorld.accuracy) {
                console.log(`Enemy Ship ${i} have been hit!`);
                HelloWorld.attack(fleet[i])
            }
            if (fleet[i].hull < 1) {
                
                break
            }
            if (Math.random() < fleet[i].accuracy) {
                console.log('USS have been hit!');
                fleet[i].attack(HelloWorld)
                document.getElementById("usso-data").innerText-= 5
                
            }
            if (HelloWorld.hull < 1) {
                break
            }
        }
        
           
 
    }
     
    //         //Loop End 
   

    
    //     //Function End 
}



//fightBattle()

let btn = document.querySelector('.btn')
btn.addEventListener('click', fightBattle )
 
//on webpage will call fight battle
//I want the numbers  to generate on the main page for hull
//i want to have the first loop be USSo and the second loop be each spaceship