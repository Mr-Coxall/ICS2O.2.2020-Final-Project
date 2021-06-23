/* global Phaser */

// Copyright (c) 2021 Maryam Nona All rights reserved
//
// Created by: Maryam Nona
// Created on: June 2021
// This is the Game Scene

class GameScene extends Phaser.Scene {

  constructor () {
    super({ key: 'gameScene' })

    this.character = null
    this.fireMissile = false
    this.score = 0
    this.scoreText = null
    this.scoreTextStyle = { font: '65px Arial', fill: '#ffffff', align: 'center' }
    this.gameOverTextStyle = { font: '65px Arial', fill: '#ff0000', align: 'center' }
    this.book = null
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#0x5f6e7a')
  }

  preload () {
    console.log('Game Scene')

    // images
    this.load.image('starBackground', './assets/background.png')
    this.load.image('book', './assets/book_adobespark.png')
    this.load.image('character', './assets/character.png')
  }

  create (data) {
    this.background = this.add.image(0, 0, 'starBackground').setScale(2.0)
    this.background.setOrigin(0, 0)

    this.scoreText = this.add.text(10, 10, 'Score:' + this.score.toString(), this.scoreTextStyle)

    this.character = this.physics.add.sprite(1920 / 2, 1080 - 100, 'character')

    this.character.setCollideWorldBounds(true);

   // create books
    this.book = this.physics.add.staticGroup()
    this.book.create(1190, 430, 'book')
    this.book.create(190, 500, 'book')
    this.book.create(800, 900, 'book')
    this.book.create(699, 308, 'book')
    this.book.create(470, 1000, 'book')
    this.book.create(100, 500, 'book')
    this.book.create(793, 384, 'book')
    this.book.create(234, 700, 'book')
    this.book.create(434, 823, 'book')
    this.book.create(543, 756, 'book')
    this.book.create(903, 1034, 'book')
    this.book.create(784, 134, 'book')
    this.book.create(983, 793, 'book')
    this.book.create(541, 100, 'book')
    this.book.create(999, 435, 'book')

    // Collisions between character and book
    this.physics.add.collider(this.character, this.book, function(characterCollide, bookCollide) {
      bookCollide.destroy();
      this.score = this.score + 1
      this.scoreText.setText('Score: ' + this.score.toString())
    }.bind(this))
  }

  update (time, delta) {
    // called 60 times a second, hopefully

    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    const keyUpObj = this.input.keyboard.addKey('UP')
    const keyDownObj = this.input.keyboard.addKey('DOWN')

    // Moves the character to the left
    if (keyLeftObj.isDown === true) {
      this.character.x -= 15
      if (this.character.x < 0) {
        this.character.x = 0
      }
    }

    // Moves the character to the right
    if (keyRightObj.isDown === true) {
      this.character.x += 15
      if (this.character.x > 1920) {
        this.character.x = 1920
      }
    }

    // Moves the character up
   if (keyUpObj.isDown === true) {
      this.character.y -= 15
      if (this.character.y < 0) {
        this.character.y = 0
      }
    }

    // Moves the character down
    if (keyDownObj.isDown === true) {
      this.character.y += 15
      if (this.character.y > 1080) {
        this.character.y = 1080
      }
    }
  }
}
export default GameScene
