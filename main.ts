basic.clearScreen()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.showIcon(IconNames.SmallDiamond)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        basic.showIcon(IconNames.Chessboard)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
