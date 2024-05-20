serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
	
})
basic.showLeds(`
    # # # # #
    # # . # #
    # . . . #
    # # . # #
    # # # # #
    `)
basic.pause(2000)
basic.showIcon(IconNames.TShirt)
basic.pause(2000)
basic.showString("Hello!")
basic.forever(function () {
	
})
