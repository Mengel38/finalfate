/**
 * titleScreen.js
 * Contains the rendering cycle for the difficulty selection and additional
 * data used for it.
 */

/*
 * Render the title screen.
 */
function titleScreen() {
    title_and_copyright_render();
    //Fix for a potential menu glitch.
    loadSelected = undefined;
    try {
        if (aniCount % 5 === aniCount % 10) {
            context.font = "23px Nonserif";
            context.fillStyle = "gold";
            context.fillText("PRESS SPACE TO START", 230, 520);
            //Let the show begin!
            //Disabled game pad functionality.
            //if (shoot === 5 || pollButtonMemory()) {
            if (keyboard) {
                clearInterval(gamepad_handle);
                shootReleased = false;
            }
            if (gamepad !== false) {
                window.removeEventListener("keydown", getKeyPress);
                window.removeEventListener("keyup", getKeyRelease);
                clearInterval(gamepad_handle);
                gamepad_handle = setInterval(gamepadPoll, FRAME_RATE);
                shootReleased = false;
            }
            if (keyboard || gamepad !== false) {
                if (storageStatus === false) {
                    simplyPlaySound(sfx4);
                    exchangeRenderLoop(skillPrompt);
                }
                else if (storageStatus === null){
                    simplyPlaySound(sfx4);
                    exchangeRenderLoop(loadFail);
                }
                else {
                    shootReleased = false;
                    simplyPlaySound(sfx4);
                    exchangeRenderLoop(loadPrompt);
                }

            }
        }
    } catch (error) {
        //Code for title screen.
        crashCauseSet = 3;
        errorObject = error;
       exchangeRenderLoop(crashHandler);
    }

}

/**
 * Volume text.
 * @type String
 */
var volumeText = "VOLUME";
var volumeTitle = "(change with up / down / 'm' to mute the music)";
var volumePause = "(change with left / right)";
/**
 * Volume display render.
 * @returns {undefined}
 */
function volume_prompt_render(){
    context.fillStyle = "white";
    var volumeControls = renderFunction === skillPrompt ||
            renderFunction === loadPrompt;
    if (volumeControls) {
        context.fillText(volumeText + " " + volumeTitle + ": " + masterVolume + " %", 195, 530);
        if (up && masterVolume < 100)
            masterVolume = masterVolume + 1;
        else if (down && masterVolume > 0)
            masterVolume = masterVolume - 1;
    } else {
        context.fillText(volumeText + " " + volumePause + ": " + masterVolume + " %", 390, 580);
        if (left && masterVolume < 100)
            masterVolume = masterVolume + 1;
        else if (right && masterVolume > 0)
            masterVolume = masterVolume - 1;
    }
    bgm.volume = masterVolume / 100;
}


/**
 * Renders "THE FINAL FATE" and the copyright info.
 * @returns {undefined}
 */
function title_and_copyright_render() {
    context.fillStyle = "black";
    context.fillRect(0, 0, 800, 600);
    context.font = "60px Serif";
    context.fillStyle = "red";
    context.fillText("THE FINAL FATE", 120, 150);
    context.font = "17px Nonserif";
    context.fillStyle = "white";
    context.fillText("GAME (C) 2019-2021 Manuel Engel", 220, 580);
}