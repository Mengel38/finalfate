/* 
 * AlienShipAlt.js
 * A space ship which can shoot projectiles and come after the player.
 */

class AlienShipAlt extends EnemyAlternate {

    constructor(posX, posY, damage = 46) {
        super(posX, posY, 0, 0, alienShipAlt_update, alienShipAlt_render);
        this.parts = new Array(3);
        this.parts[0] = {posX: posX, posY: posY, height: 160, width: 40};
        this.parts[1] = {posX: posX, posY: posY, height: 40, width: 160};
        this.parts[2] = {posX: posX + 158, posY: posY, height: 160, width: 40};
    }

}
/**
 * Update routine for the placeholder class.
 * @returns {undefined}
 */
function alienShipAlt_update() {

}

/**
 * Render routine for the placeholder class.
 * @returns {undefined}
 */
function alienShipAlt_render() {
    context.fillStyle = "silver";
    context.fillRect(this.parts[0].posX,this.parts[0].posY,this.parts[0].width,this.parts[0].height);
    context.fillRect(this.parts[1].posX,this.parts[1].posY,this.parts[1].width,this.parts[1].height);
    context.fillRect(this.parts[2].posX,this.parts[2].posY,this.parts[2].width,this.parts[2].height);
}