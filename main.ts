input.onButtonPressed(Button.A, function () {
    myImage.scrollImage(1, 200)
})
input.onButtonPressed(Button.B, function () {
    random = randint(1, 3)
    if (random == 1) {
        basic.showIcon(IconNames.Asleep)
    } else if (random == 2) {
        basic.showIcon(IconNames.Silly)
    } else {
        basic.showIcon(IconNames.Target)
    }
})
input.onGesture(Gesture.Shake, function () {
    game2 = randint(1, 70)
    basic.showNumber(game2)
})
let game2 = 0
let random = 0
let myImage: Image = null
soundExpression.giggle.playUntilDone()
myImage = images.createBigImage(`
    . . . . . . . . . .
    # # # # # # # # # #
    # . # . # # . # . #
    # . # # # # # # . #
    . . # # # # # # . .
    `)
basic.forever(function () {
	
})
