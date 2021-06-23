/* global Phaser */

// Copyright (c) 2021 Infinity de Guzman & Shenali Alles All rights reserved
//
// Created by: Infinity de Guzman & Shenali Alles 
// Created on: June 2021
// This is the Game Scene 2 

class GameScene2 extends Phaser.Scene {

  constructor () {
    super({ key: 'gameScene2' })

    this.player = null
    this.platforms = null
    this.background = null    
    this.coin = null
    this.portal = null
    this.spike = null
    this.score = 10
    this.scoreText = null
    this.scoreTextStyle = { font: '45px Fira Sans', fill: '#fff', align: 'center' }
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#050A30')
  }

  preload () {
    console.log('Game Scene 2')

    // spritesheets
    this.load.spritesheet('scene3_squareSprite', './assets/squareSprite.png', { frameWidth: 48, frameHeight: 48 })

    // images
    this.load.image('scene3_galaxyBackground', './assets/galaxyBackground.jpg')
    this.load.image('scene3_coin', './assets/coin.png')
    this.load.image('scene3_spike', './assets/spike.png')
    this.load.image('scene3_ground', './assets/platform.png')
    this.load.image('scene3_checkpoint', './assets/checkpoint.gif')
    this.load.image('scene3_portal', './assets/portal.gif')

    // sound
  }

  create (data) {
    this.background = this.add.image(0, 0, 'scene3_galaxyBackground')
    this.background.setOrigin(0, 0)

    this.scoreText = this.add.text(10, 10, 'Score: ' + this.score.toString(), this.scoreTextStyle)

    // platforms
    this.platforms = this.physics.add.staticGroup()
    this.platforms.create(100, 250, 'scene3_ground')
    this.platforms.create(292, 437.5, 'scene3_ground')
    this.platforms.create(484, 625, 'scene3_ground')
    this.platforms.create(676, 812.5, 'scene3_ground')
    this.platforms.create(868, 1000, 'scene3_ground')
    this.platforms.create(1040, 1000, 'scene3_ground')
    this.platforms.create(1252, 812.5, 'scene3_ground')
    this.platforms.create(1444, 625, 'scene3_ground')
    this.platforms.create(1636, 437.5, 'scene3_ground')
    this.platforms.create(1828, 250, 'scene3_ground')
 
    this.platforms.create(100, 1080, 'scene3_ground')
    this.platforms.create(292, 1080, 'scene3_ground')
    this.platforms.create(484, 1080, 'scene3_ground')
    this.platforms.create(676, 1080, 'scene3_ground')
    this.platforms.create(868, 1080, 'scene3_ground')
    this.platforms.create(1040, 1080, 'scene3_ground')
    this.platforms.create(1252, 1080, 'scene3_ground')
    this.platforms.create(1444, 1080, 'scene3_ground')
    this.platforms.create(1636, 1080, 'scene3_ground')
    this.platforms.create(1828, 1080, 'scene3_ground')

    // portal
    this.portal = this.physics.add.sprite (1828, 125, 'scene3_portal')

    // spike
    this.spike = this.physics.add.staticGroup()
    this.spike.create(100, 1040, 'scene3_spike')
    this.spike.create(200, 1040, 'scene3_spike')
    this.spike.create(300, 1040, 'scene3_spike')
    this.spike.create(400, 1040, 'scene3_spike')
    this.spike.create(500, 1040, 'scene3_spike')
    this.spike.create(600, 1040, 'scene3_spike')
    this.spike.create(700, 1040, 'scene3_spike')
    this.spike.create(800, 1040, 'scene3_spike')
    this.spike.create(900, 1040, 'scene3_spike')
    this.spike.create(1000, 1040, 'scene3_spike')
    this.spike.create(1100, 1040, 'scene3_spike')
    this.spike.create(1200, 1040, 'scene3_spike')
    this.spike.create(1390, 1040, 'scene3_spike')
    this.spike.create(1400, 1040, 'scene3_spike')
    this.spike.create(1500, 1040, 'scene3_spike')
    this.spike.create(1600, 1040, 'scene3_spike')
    this.spike.create(100, 1040, 'scene3_spike')
    this.spike.create(800, 1040, 'scene3_spike')
    this.spike.create(350, 1040, 'scene3_spike')
    this.spike.create(1590, 1040, 'scene3_spike')
    this.spike.create(1650, 1040, 'scene3_spike')
    this.spike.create(1700, 1040, 'scene3_spike')
    this.spike.create(150, 1040, 'scene3_spike')
    this.spike.create(250, 1040, 'scene3_spike')
    this.spike.create(1790, 1040, 'scene3_spike')
    this.spike.create(290, 1040, 'scene3_spike')
    this.spike.create(690, 1040, 'scene3_spike')
    this.spike.create(650, 1040, 'scene3_spike')
    this.spike.create(670, 1040, 'scene3_spike')
    this.spike.create(680, 1040, 'scene3_spike')
    this.spike.create(290, 1040, 'scene3_spike')


    // coin
    this.coin = this.physics.add.staticGroup()
    this.coin.create(1190, 630, 'scene3_coin')
    this.coin.create(718, 630, 'scene3_coin')
    this.coin.create(618, 442.5, 'scene3_coin')
    this.coin.create(859, 442.5, 'scene3_coin')
    this.coin.create(1049, 442.5, 'scene3_coin')
    this.coin.create(1290, 442.5, 'scene3_coin')
    this.coin.create(954, 817.5, 'scene3_coin')
    this.coin.create(1169.5, 255, 'scene3_coin')
    this.coin.create(738.5, 255, 'scene3_coin')

    // player
    this.player = this.physics.add.sprite (100, 150, 'scene3_squareSprite');

    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('scene3_squareSprite', { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1
    })

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('scene3_squareSprite', { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1
    })

    // collision between player and platforms
    this.physics.add.collider(this.player, this.platforms)

    // collision between spikes and platforms
    this.physics.add.collider(this.spike, this.platforms)

    // collision between player and spikes
    this.physics.add.collider(this.player, this.spike, function() {
      this.player.setPosition(100, 199)
    }.bind(this))

    // collision between spike and coin
    this.physics.add.collider(this.coin, this.spike)

    // collision between portal and platforms
    this.physics.add.collider(this.portal, this.platforms)

    // collision between the player and coins
    this.physics.add.collider(this.player, this.coin, function(playerCollide, coinCollide) {
      coinCollide.destroy();
      this.score = this.score + 1
      this.scoreText.setText('Score: ' + this.score.toString())
    }.bind(this))

    //collision between player and portal
    this.physics.add.collider(this.player, this.portal, function() {
      this.scene.start('menuScene')
    }.bind(this))
  }

  update (time, delta) {
    // called 60 times a second, hopefully!
    const keySpaceObj = this.input.keyboard.addKey('SPACE') // Get key object
    const keyLeftObj = this.input.keyboard.addKey('LEFT') // Get key object
    const keyRightObj = this.input.keyboard.addKey('RIGHT') // Get key object

    if (keyLeftObj.isDown === true) {
      this.player.setVelocityX(-160)
      this.player.anims.play('left', true)
    } else if (keyRightObj.isDown === true) {
      this.player.setVelocityX(160)
      this.player.anims.play('right', true)
    } else if (keySpaceObj.isDown === true && this.player.body.touching.down) {
      this.player.setVelocityY(-400)
    }
  }
}

export default GameScene2