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
        window.alert("EXCEPTION OCCURED IN TITLE SCREEN!! \n" + "Exception name:" + error.name + "\n" + "Exception message:" + error.message + "\n" + "Stack Trace:" + error.stack);

    }

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
    context.fillText("GAME (C) 2019-2020 Manuel Engel", 220, 580);
}