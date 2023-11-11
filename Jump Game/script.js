score = 0
cross = true

audioJump = new Audio("marioJump.mp3")
audioGO = new Audio("GameOver.wav")
audio = new Audio("mario2.mp3")

setTimeout(() => {
    audio.play()
}, 10);

document.onkeydown = (e)=>{
    console.log("Key Code is: ", e.keyCode)
    if(e.keyCode==38){
        mario = document.querySelector('.mario')
        mario.classList.add('animateMario')
        
        audioJump.play()

        setTimeout(() => {
            mario.classList.remove('animateMario')
        }, 700);
    }
    if(e.keyCode==39){
        mario = document.querySelector('.mario')
        marioX = parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'))

        mario.style.left = marioX + 100 + "px"
    }
    if(e.keyCode==37){
        mario = document.querySelector('.mario')
        marioX = parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'))

        mario.style.left = marioX - 40 + "px"
    }
}

setInterval(() => {
    mario = document.querySelector('.mario')
    gameOver = document.querySelector('.gameOver')
    bowser = document.querySelector('.bowser')

    dx = parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'))
    dy = parseInt(window.getComputedStyle(mario,null).getPropertyValue('top'))

    bx = parseInt(window.getComputedStyle(bowser,null).getPropertyValue('left'))
    by = parseInt(window.getComputedStyle(bowser,null).getPropertyValue('top'))

    offsetX = Math.abs(dx-bx)
    offsetY = Math.abs(dy-by)

    // console.log(offsetX,offsetY)
    if (offsetX<65 && offsetY<92) {
        gameOver.innerHTML = 'GAME OVER - Reload to Play Again'
        bowser.classList.remove('bowserAni')
        audioGO.play()
        setTimeout(() => {
            audioGO.pause()
            audio.pause()
        }, 1000);
    }
    else if(offsetX<125 && cross){
        score += 1
        updateScore(score)
        cross = false
        setTimeout(() => {
            cross = true
        }, 1000);
    }
    setTimeout(() => {
        aniDur = parseFloat(window.getComputedStyle(bowser,null).getPropertyValue('animation-duration'))
        newDur = aniDur - 0.001
        bowser.style.animationDuration = newDur + 's'
    }, 500);


}, 10);


function updateScore(score){
    scoreCont.innerHTML = "your Score: " + score
}