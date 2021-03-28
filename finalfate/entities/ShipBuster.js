/**
 * ShipBuster.js
 * Contains the ShipBuster class which includes a really bad bomb.
 */


class ShipBuster extends Bomb {
    /**
     * Create a ship buster.
     * @param {type} middleX
     * @param {type} middleY
     * @returns {FogBomb}
     */
    constructor(middleX,middleY,limitSound){
        super(middleX,middleY,shipBuster_dimension,shipBuster_update,shipBuster_render,shipBuster_invalidateSpecial,100);
        this.limitSound = limitSound;
    }   
}
ShipBuster.prototype.alreadyPlayed = false;
//"Ship Buster" dimension function.
var shipBuster_dimension = meteor_dimension;

//"Ship Buster" update function.
var shipBuster_update = func_noOp

//Ship Buster rendering function
function shipBuster_render() {
    performFadeIn.call(this, 3, 13);
    simpleEnemy_render.call(this);
    context.globalAlpha = 1.0;
}

//"Ship Buster" special invalidation function.
function shipBuster_invalidateSpecial(){
    if(!this.limitSound ||
            this.limitSound && !ShipBuster.prototype.alreadyPlayed){
            simplyPlaySound(sfx1);
            ShipBuster.prototype.alreadyPlayed = true;
    }        
    if(player.skill === 0)player.health-=27;
    else if(player.skill === -1)player.health-=14;
    else if(player.skill === 1)player.health-=45;
    else player.health-=60;
    displayList.addElement(new Boom(),false);
}