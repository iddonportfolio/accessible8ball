/**
 * rest position (when device not shaken) for arm with no answer at 90 degrees.
 */
/**
 * when shaken, picks the number one time per shake, but displays your answer twice in case you didn't catch it the first time.
 */
/**
 * nested if/else statements determine which random number between 1 and 6 was generated
 */
/**
 * forcing the servo pin low (0) with a digital write before a tone is played will keep the tone from being output on the servo pin as well, which causes servo motion glitches.
 * 
 * the same process is done for the buzzer, forcing it low (0) whenever a servo command is sent to prevent that from also being heard on the buzzer pin.
 */
/**
 * 500ms pause after face to help prevent the SHAKE display from instantly overwriting the face since it is continuing in parallel with this code.
 */
/**
 * ERROR state for if somehow no valid number was chosen, for example in case of corruption of memory.
 */
input.onGesture(Gesture.Shake, function () {
    number = randint(1, 6)
    for (let index = 0; index < 2; index++) {
        basic.clearScreen()
        if (number == 1) {
            basic.showLeds(`
                # # . # #
                # # . # #
                . . . . .
                # . . . #
                # # # # #
                `)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P1, 0)
            music.playMelody("F A C5 - - - - - ", 120)
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.servoWritePin(AnalogPin.P1, 0)
        } else if (number == 2) {
            basic.showLeds(`
                # # . # #
                # # . # #
                . . . . .
                # . . . #
                # # # # #
                `)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P1, 0)
            music.playMelody("F A C5 - - - - - ", 120)
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.servoWritePin(AnalogPin.P1, 45)
        } else if (number == 3) {
            basic.showLeds(`
                # # . # #
                # # . # #
                . . . . .
                # # # # #
                . . . . .
                `)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P1, 0)
            music.playMelody("F E F E - - - - ", 120)
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.servoWritePin(AnalogPin.P1, 135)
        } else if (number == 5) {
            basic.showLeds(`
                # # . # #
                # # . # #
                . . . . .
                # # # # #
                # . . . #
                `)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P1, 0)
            music.playMelody("D C C - - - - - ", 120)
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.servoWritePin(AnalogPin.P1, 180)
        } else {
            basic.showString("ERROR!")
        }
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.servoWritePin(AnalogPin.P1, 90)
    }
})
/**
 * set audio pin doesn't change audio pin in simulator from the default audio pin of P0, thus we've chosen to let P0 be the audio pin in case the set audio pin block doesn't work in the real world either.
 */
let number = 0
pins.setAudioPin(AnalogPin.P0)
/**
 * loops endlessly displaying the word shake spelled out rather than using the built in scrolling text to make the appearance clearer.
 */
basic.forever(function () {
    basic.showLeds(`
        # # # # .
        # . . . .
        # # # # .
        . . . # .
        # # # # .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        # . . # .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        . # # . .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        # . . # .
        # . # . .
        # # . . .
        # . # . .
        # . . # .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        # # # # .
        # . . . .
        # # # # .
        # . . . .
        # # # # .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(2000)
})
