/**
 * nested if/else statements determine which random number between 1 and 6 was generated
 */
/**
 * 500ms pause after face to prevent the SHAKE display from instantly overwriting the face since it is continuing in parallel with this code.
 */
/**
 * when shaken, picks the number one time per shake, but displays your answer twice in case you didn't catch it the first time.
 */
/**
 * given that tones tend to make the servo go to 0 degrees, tone will be played first and then the actual answer direction given on the servo so that the tone error on servos won't affect the desired answer.
 */
/**
 * ERROR state for if somehow no valid number was chosen, for example in case of corruption of memory.
 */
/**
 * rest position (when device not shaken) for arm with no answer at 90 degrees.
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
            music.playMelody("F A C5 - - - - - ", 120)
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
            music.playMelody("F A C5 - - - - - ", 120)
            pins.servoWritePin(AnalogPin.P1, 30)
        } else if (number == 3) {
            basic.showLeds(`
                # # . # #
                # # . # #
                . . . . .
                # # # # #
                . . . . .
                `)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P1, 60)
        } else if (number == 4) {
            basic.showLeds(`
                # # . # #
                # # . # #
                . . . . .
                # # # # #
                . . . . .
                `)
            basic.pause(500)
            music.playMelody("F E F E - - - - ", 120)
            pins.servoWritePin(AnalogPin.P1, 120)
        } else if (number == 5) {
            basic.showLeds(`
                # # . # #
                # # . # #
                . . . . .
                # # # # #
                # . . . #
                `)
            basic.pause(500)
            music.playMelody("D C C - - - - - ", 120)
            pins.servoWritePin(AnalogPin.P1, 150)
        } else if (number == 6) {
            basic.showLeds(`
                # # . # #
                # # . # #
                . . . . .
                # # # # #
                # . . . #
                `)
            basic.pause(500)
            music.playMelody("D C C - - - - - ", 120)
            pins.servoWritePin(AnalogPin.P1, 180)
        } else {
            basic.showString("ERROR!")
        }
        basic.pause(5000)
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
