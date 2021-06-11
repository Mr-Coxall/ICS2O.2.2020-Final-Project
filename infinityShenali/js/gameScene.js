/* global Phaser */

// Copyright (c) 2021 Infinity de Guzman & Shenali Alles All rights reserved
//
// Created by: Infinity de Guzman & Shenali Alles 
// Created on: June 2021
// This is the Game Scene

class GameScene extends Phaser.Scene {

  constructor () {
    super({ key: 'gameScene' })

    this.background = null
    this.portal = null
    this.checkpoint = false
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#050A30')
  }

  preload () {
    console.log('Game Scene')

    // images
    this.load.image('scene1_galaxyBackground', 'infinityShenali/assets/galaxyBackground.jpg')
    this.load.image('coin', 'infinityShenali/assets/coin.gif')
    this.load.image('spike', 'infinityShenali/assets/spike.png')
    this.load.image('portal', 'infinityShenali/assets/portal.gif')
    this.load.spritesheet('squareSprite', 'infinityShenali/assets/squareSprite.png')
    this.load.image('ground', 'infinityShenali/assets/platform.png')
    // sound
  }

  create (data) {
    this.background = this.add.image(0, 0, 'scene1_galaxyBackground.jpg').setScale(2.0)
    this.background.setOrigin(0, 0)

    // platforms
    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody()

    this.platforms.create(600, 400, 'ground')
    this.platforms.create(50, 250, 'ground')
    this.platforms.create(750, 220, 'ground')

    // player
    this.player = this.physics.add.sprite(100, 450, 'squareSprite');

    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('squareSprite', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    })
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
    }
    else {
      this.player.setVelocityX(0)
      this.player.anims.play('turn');
    }

    if (keySpaceObj.isDown === true && this.player.body.touching.down) {
      this.player.setVelocityY(-330)
    }
  }
}

export default GameScene