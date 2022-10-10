///level_construction\\\

//part of rendering levels and huds

//Side / Sidescroll Levels
class Forest {
    constructor({player, bg}) {
        //player's definition
        this.player = new Player_SideScroll(player)

        //background definition
        if (bg != undefined) this.bg = bg
        else this.bg = [
            new Scenery_obj({
                src: 'sprites/bg/sunset/sunset_1.png',
                srcsize: { x: 800, y: 600 },
                update: function () {
                    ctx.drawImage(this.img, 0, 0, this.imgsize.x, this.imgsize.y, this.pos1.x, this.pos1.y, 800, 600)
                    this.span + 1 > 60 ? this.span = 0 : this.span++
                    if (this.span == 60) {
                        this.initialframe + 1 > 3 ? this.initialframe = 1 : this.initialframe++
                        this.img.src = 'sprites/bg/sunset/sunset_' + this.initialframe + '.png'
                    }
                }
            }),
            new Scenery_obj({
                src: 'sprites/bg/sunset/sunset_clouds_1.png',
                srcsize: { x: 800, y: 600 },
                pos1: { x: 0, y: 0 },
                pos2: { x: 800, y: 0 },
                update: function () {
                    ctx.drawImage(this.img, 0, 0, this.imgsize.x, this.imgsize.y, this.pos1.x, this.pos1.y, 800, 600)
                    ctx.drawImage(this.img, 0, 0, this.imgsize.x, this.imgsize.y, this.pos2.x, this.pos2.y, 800, 600)
                    this.span + 1 > 50 ? this.span = 0 : this.span++
                    this.pos1.x + 800 <= 0 ? this.pos1.x = 800 : this.span == 50 ? this.pos1.x -= 2.5 : false
                    this.pos2.x + 800 <= 0 ? this.pos2.x = 800 : this.span == 50 ? this.pos2.x -= 2.5 : false
                }
            }),
            new Scenery_obj({
                src: 'sprites/bg/sunset/sunset_clouds_2.png',
                srcsize: { x: 800, y: 600 },
                pos1: { x: 0, y: 0 },
                pos2: { x: 800, y: 0 },
                update: function () {
                    ctx.drawImage(this.img, 0, 0, this.imgsize.x, this.imgsize.y, this.pos1.x, this.pos1.y, 800, 600)
                    ctx.drawImage(this.img, 0, 0, this.imgsize.x, this.imgsize.y, this.pos2.x, this.pos2.y, 800, 600)
                    this.span + 1 > 40 ? this.span = 0 : this.span++
                    this.pos1.x + 800 <= 0 ? this.pos1.x = 800 : this.span == 40 ? this.pos1.x -= 5 : false
                    this.pos2.x + 800 <= 0 ? this.pos2.x = 800 : this.span == 40 ? this.pos2.x -= 5 : false
                }
            })
        ]

        //foreground definition
        this.fg = [
            new Scenery_obj({
                src: 'sprites/bg/sunset/sunset_palm_tree.png',
                srcsize: { x: 800, y: 600 },
                update: function () {
                    ctx.drawImage(this.img, 0, 0, this.imgsize.x, this.imgsize.y, this.pos1.x, this.pos1.y, 800, 600)
                }
            })
        ]

        //game entities definition
        this.entities = [
            new Scenery_obj({
                src: 'sprites/bg/sunset/hq.png',
                srcsize: { x: 400, y: 264 },
                pos1: {x: -100, y: 336},
                update: function () {
                    ctx.drawImage(this.img, 0, 0, this.imgsize.x, this.imgsize.y, this.pos1.x, this.pos1.y, this.imgsize.x, this.imgsize.y)
                }
            })
        ]

        this.fade = 1
        this.unload = false
    }
    update() {

        //collisions
        if (this.player.position.x + this.player.size.x / 2 > 800) {
            this.unload = true
            lvlLoad = new Sunset_Road0({
                player: {
                    size: { x: 97, y: 144 },
                    position: { x: -this.player.size.x / 2, y: this.player.position.y },
                    velocity: { x: this.player.velocity.x, y: this.player.velocity.y },
                    gravity: 1,
                    src: 'sprites/entities/dan/dan_side_spritesheet.png',
                    srcsize: { x: 97, y: 144 },
                    faceright: true,
                    isGrounded: this.isGrounded
                },
                bg: this.bg
            })
        }
        if (this.player.position.x + this.player.velocity.x <= 0) {
            this.player.velocity.x = 0
            this.player.position.x = 0
        }
        if (this.player.position.y + this.player.size.y + this.player.velocity.y >= 600) {
            this.player.velocity.y = 0
            this.player.position.y = 600 - this.player.size.y
        }
        if (this.player.position.y + this.player.velocity.y <= 0) {
            this.player.velocity.y = 0
            this.player.position.y = 0
            this.player.isGrounded.bool = true
        }

        this.player.position.y + this.player.size.y >= 600 ? this.player.isGrounded = true : false
    }
}
class Sunset {
    constructor({player, bg}) {
        //player's definition
        this.player = new Player_SideScroll(player)

        //background definition
        if (bg != undefined) this.bg = bg
        else this.bg = [
            new Scenery_obj({
                src: 'sprites/bg/sunset/sunset_1.png',
                srcsize: { x: 800, y: 600 },
                update: function () {
                    ctx.drawImage(this.img, 0, 0, this.imgsize.x, this.imgsize.y, this.pos1.x, this.pos1.y, 800, 600)
                    this.span + 1 > 60 ? this.span = 0 : this.span++
                    if (this.span == 60) {
                        this.initialframe + 1 > 3 ? this.initialframe = 1 : this.initialframe++
                        this.img.src = 'sprites/bg/sunset/sunset_' + this.initialframe + '.png'
                    }
                }
            }),
            new Scenery_obj({
                src: 'sprites/bg/sunset/sunset_clouds_1.png',
                srcsize: { x: 800, y: 600 },
                pos1: { x: 0, y: 0 },
                pos2: { x: 800, y: 0 },
                update: function () {
                    ctx.drawImage(this.img, 0, 0, this.imgsize.x, this.imgsize.y, this.pos1.x, this.pos1.y, 800, 600)
                    ctx.drawImage(this.img, 0, 0, this.imgsize.x, this.imgsize.y, this.pos2.x, this.pos2.y, 800, 600)
                    this.span + 1 > 50 ? this.span = 0 : this.span++
                    this.pos1.x + 800 <= 0 ? this.pos1.x = 800 : this.span == 50 ? this.pos1.x -= 2.5 : false
                    this.pos2.x + 800 <= 0 ? this.pos2.x = 800 : this.span == 50 ? this.pos2.x -= 2.5 : false
                }
            }),
            new Scenery_obj({
                src: 'sprites/bg/sunset/sunset_clouds_2.png',
                srcsize: { x: 800, y: 600 },
                pos1: { x: 0, y: 0 },
                pos2: { x: 800, y: 0 },
                update: function () {
                    ctx.drawImage(this.img, 0, 0, this.imgsize.x, this.imgsize.y, this.pos1.x, this.pos1.y, 800, 600)
                    ctx.drawImage(this.img, 0, 0, this.imgsize.x, this.imgsize.y, this.pos2.x, this.pos2.y, 800, 600)
                    this.span + 1 > 40 ? this.span = 0 : this.span++
                    this.pos1.x + 800 <= 0 ? this.pos1.x = 800 : this.span == 40 ? this.pos1.x -= 5 : false
                    this.pos2.x + 800 <= 0 ? this.pos2.x = 800 : this.span == 40 ? this.pos2.x -= 5 : false
                }
            })
        ]

        //foreground definition
        this.fg = [
            new Scenery_obj({
                src: 'sprites/bg/sunset/sunset_palm_tree.png',
                srcsize: { x: 800, y: 600 },
                update: function () {
                    ctx.translate(-lvlLoad.camera.x, -lvlLoad.camera.y)
                    ctx.drawImage(this.img, 0, 0, this.imgsize.x, this.imgsize.y, this.pos1.x, this.pos1.y, 800, 600)
                    ctx.translate(lvlLoad.camera.x, lvlLoad.camera.y)
                }
            }),
            new Scenery_obj({
                src: 'sprites/bg/sunset/sunset_grass_1.png',
                srcsize: { x: 800, y: 600 },
                pos1: {x: 800, y: 0},
                update: function () {
                    ctx.translate(-lvlLoad.camera.x, -lvlLoad.camera.y)
                    ctx.drawImage(this.img, 0, 0, this.imgsize.x, this.imgsize.y, this.pos1.x, this.pos1.y, this.imgsize.x, this.imgsize.y)
                    ctx.drawImage(this.img, 0, 0, this.imgsize.x, this.imgsize.y, 2*this.pos1.x, this.pos1.y, this.imgsize.x, this.imgsize.y)
                    ctx.drawImage(this.img, 0, 0, this.imgsize.x, this.imgsize.y, 3*this.pos1.x, this.pos1.y, this.imgsize.x, this.imgsize.y)
                    ctx.translate(lvlLoad.camera.x, lvlLoad.camera.y)
                }
            })
        ]

        //game entities definition
        this.entities = [
            new Scenery_obj({
                src: 'sprites/bg/sunset/hq.png',
                srcsize: { x: 400, y: 264 },
                pos1: {x: -100, y: 336},
                update: function () {
                    ctx.translate(-lvlLoad.camera.x, -lvlLoad.camera.y)
                    ctx.drawImage(this.img, 0, 0, this.imgsize.x, this.imgsize.y, this.pos1.x, this.pos1.y, this.imgsize.x, this.imgsize.y)
                    ctx.translate(lvlLoad.camera.x, lvlLoad.camera.y)
                }
            }),
            new Enemy_SideScroll({
                size: { x: 97, y: 144 },
                position: { x: 800, y: 456 },
                velocity: { x: 0, y: 0 },
                gravity: 1,
                src: 'sprites/entities/dan/dan_side_spritesheet.png',
                srcsize: { x: 97, y: 144 },
                faceright: false,
                isGrounded: true,
                update: function() {
                    ctx.translate(-lvlLoad.camera.x, -lvlLoad.camera.y)

                    ctx.drawImage(this.img, 0, 0, this.imgsize.x, this.imgsize.y, this.position.x, this.position.y, this.size.x, this.size.y)
                    
                    this.position.x += this.velocity.x
                    this.position.y += this.velocity.y

                    this.chase = false

                    if(this.position.x + 250 >= lvlLoad.player.position.x)
                    if(this.position.x - 250 <= lvlLoad.player.position.x)
                    if(this.position.y - 200 <= lvlLoad.player.position.y)
                    if(this.position.y + 200 >= lvlLoad.player.position.y)
                        this.chase = true

                    if(
                        (lvlLoad.player.position.x + lvlLoad.player.velocity.x < this.position.x | lvlLoad.player.position.x + lvlLoad.player.size.x + lvlLoad.player.velocity.x > this.position.x)
                        && (lvlLoad.player.position.y + lvlLoad.player.velocity.y < this.position.y | lvlLoad.player.position.y + lvlLoad.player.size.y + lvlLoad.player.velocity.y > this.position.y)
                    ) console.log('touched')

                    if(this.chase) {
                        if(lvlLoad.player.position.x > this.position.x) this.velocity.x < 8 ? this.velocity.x++ : false
                        else if (lvlLoad.player.position.x < this.position.x) this.velocity.x > -8 ? this.velocity.x-- : false
                        else this.velocity.x = 0

                        if(Math.abs(lvlLoad.player.position.x - this.position.x) <= 64) this.velocity.x = 0
                    }
                    else {
                        this.velocity.x < 0 ? this.velocity.x++ : false
                        this.velocity.x > 0 ? this.velocity.x-- : false
                    }
                    ctx.translate(lvlLoad.camera.x, lvlLoad.camera.y)
                }
            })
        ]

        //camera definition
        this.camera = { x: 0, y: 0 }

        this.gameBorder = { x: 1600, y: 600 }

        this.fade = 1
        this.unload = false
    }
    update() {
        //collisions
        if (this.player.position.x + this.player.size.x / 2 > this.gameBorder.x) {
            this.unload = true
            lvlLoad = new Sunset_Path_0({
                player: {
                    size: { x: 97, y: 144 },
                    position: { x: -this.player.size.x / 2, y: this.player.position.y },
                    velocity: { x: this.player.velocity.x, y: this.player.velocity.y },
                    gravity: 1,
                    src: 'sprites/entities/dan/dan_side_spritesheet.png',
                    srcsize: { x: 97, y: 144 },
                    faceright: true,
                    isGrounded: this.isGrounded
                },
                bg: this.bg
            })
        }
        if (this.player.position.x + this.player.velocity.x <= 0) {
            this.player.velocity.x = 0
            this.player.position.x = 0
        }
        if (this.player.position.y + this.player.velocity.y >= 600 - this.player.size.y) {
            this.player.velocity.y = 0
            this.player.position.y = 600 - this.player.size.y
            this.player.isGrounded = true
            this.player.jumpCooldown > 0 ? this.player.jumpCooldown-- : false
        }
        if (this.player.position.y + this.player.velocity.y <= 0) {
            this.player.velocity.y = 0
            this.player.position.y = 0
        }
        
        //camera chase properties
        if(this.player.position.x + this.player.size.x/2 < 400)
            this.camera.x = 0
        else if(this.player.position.x + this.player.size.x/2 > this.gameBorder.x - 400)
            this.camera.x = this.gameBorder.x - 800
        else
            this.camera.x += (this.player.position.x + this.player.size.x / 2 - 400 - this.camera.x)/2
    }
}
//Isometric Levels
class Home_PlayerRoom extends LvlSet_Isometric {
    constructor({ size, position, velocity, src, srcsize }) {
        super({
            size: size,
            position: position,
            velocity: velocity,
            src: src,
            srcsize: srcsize
        })

        this.bg = new Image()
        this.bg.src = 'sprites/levels/home_player_room.png'

        this.fade = 1

        this.entities = {
            //door
            0: new gameObject({
                size: { x: 104, y: 181 },
                position: { x: 250, y: 70 },
                velocity: { x: 0, y: 0 },
                src: 'sprites/misc/door',
                srcsize: { x: 128, y: 250 }
            })
        }
        this.unload = false
    }
    update() {
        ctx.drawImage(this.bg, 0, 0, 800, 600, 0, 0, 800, 600)
        this.entities[0].update()
        this.player.update()

        ctx.fillStyle = 'rgba(0, 0, 0, ' + this.fade + ')'
        ctx.fillRect(0, 0, 800, 600)

        //colisões
        if (this.player.position.x + this.player.size.x + this.player.velocity.x >= 650) {
            this.player.velocity.x = 0
            this.player.position.x = 650 - this.player.size.x
        }
        if (this.player.position.x + this.player.velocity.x <= 150) {
            this.player.velocity.x = 0
            this.player.position.x = 150
        }
        if (this.player.position.y + this.player.size.y + this.player.velocity.y >= 595) {
            this.player.velocity.y = 0
            this.player.position.y = 595 - this.player.size.y
        }
        if (this.player.position.y + this.player.velocity.y <= 105) {
            this.player.velocity.y = 0
            this.player.position.y = 105
        }

        if (this.unload && this.fade < 1) {
            this.fade += 0.05
            if (this.fade >= 1)
                lvlLoad = new Home_PlayerRoom({
                    size: { x: 128, y: 160 },
                    position: { x: 300, y: 300 },
                    velocity: { x: 0, y: 0 },
                    src: 'sprites/entities/dan/dan_spritesheet.png',
                    srcsize: { x: 128, y: 160 }
                })
        }
        else if (this.fade > 0) this.fade -= 0.1
    }
}

//level loading
let lvlLoad = new Sunset({
    player: {
        size: { x: 97, y: 144 },
        position: { x: 200, y: 556 },
        velocity: { x: 0, y: 0 },
        gravity: 1,
        src: 'sprites/entities/dan/dan_side_spritesheet.png',
        srcsize: { x: 97, y: 144 },
        faceright: true,
        isGrounded: true
    }
});

gameGeneralFunction()
function gameGeneralFunction() {
    window.requestAnimationFrame(gameGeneralFunction)
    
    //removes the old content from canvas
    ctx.clearRect(0, 0, 800, 600)
    
    //background load
    for (let i = 0; i < lvlLoad.bg.length; i++)
        lvlLoad.bg[i].update()

    //entities load
    for (let i = 0; i < lvlLoad.entities.length; i++)
        lvlLoad.entities[i].update()
    
    //player load
    lvlLoad.player.update()

    //foreground load
    for (let i = 0; i < lvlLoad.fg.length; i++)
        lvlLoad.fg[i].update()
    
    //general settings load
    lvlLoad.update()
}   