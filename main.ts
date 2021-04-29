radio.setGroup(7)
basic.showString("S")
basic.forever(function () {
    if (Math.abs(input.magneticForce(Dimension.Strength)) >= 500) {
        radio.sendString("team1")
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        basic.clearScreen()
    }
})
