var background_imageTag, rover_imageTag
roverX= 10
roverY= 10
canvas= document.getElementById("myCanvas")
ctx= canvas.getContext("2d")
nasa_images= ["93574.jpg","mars-surface.jpg","dreamstime_xxl_18549657","mars.jpg"]
random_num= Math.floor(Math.random()*5)
console.log(random_num-1)
background_image=nasa_images[random_num-1]
rover_height=100
rover_width=100
rover_image= "rover.png"

function add(){
    background_imageTag=new Image()
background_imageTag.onload= uploadBackground
background_imageTag.src=background_image

rover_imageTag=new Image();
rover_imageTag.onload= uploadRover
rover_imageTag.src=rover_image
}

function uploadBackground(){
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height)
}

function uploadRover(){
    ctx.drawImage(rover_imageTag, roverX, roverY, rover_width, rover_height)
}


    window.addEventListener("keydown", my_keydown )
    function my_keydown(e){
        key_pressed = e.keyCode;
       if (key_pressed=='38') {
        up()
       }
       if (key_pressed=='40') {
        down()
       }
       if (key_pressed=='37') {
        left()
       }
       if (key_pressed=='39') {
        right()
       }
    }
    function up(){
        if (roverY>0) {
            roverY= roverY-10
            uploadBackground()
            uploadRover()   
        }
       
    }
    function down(){
        if (roverY<=600) {
            roverY= roverY+10
            uploadBackground()
            uploadRover()    
        }
        
    }

    function right(){
       if (roverX<=800) {
        roverX= roverX+10
        uploadBackground()
        uploadRover()
       }
       
    }

    function left(){
        if (roverX>0) {
          roverX= roverX-10
        uploadBackground()
        uploadRover()  
        }
        
    }

