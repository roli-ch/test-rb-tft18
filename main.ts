// 1.8" TFT Touch Display "RB-TFT1.8-T"
// 128 x 160 pixel
// Treiber ST7735R
// 262'000 Farben
// SPI Schnittstelle

// Initialize TFT Display
RBTFT18.init()
// Clear screen - replaces whole screen with a black rectangle
RBTFT18.clearScreen()
// Draw a single red pixel
RBTFT18.drawPixel(10, 10, Color.White)
RBTFT18.drawPixel(11, 11, Color.White)
RBTFT18.drawPixel(12, 12, Color.White)
RBTFT18.drawPixel(13, 13, Color.White)
//showTest()

input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    basic.pause(1000)
    // Turn off display
    RBTFT18.turnOff()
    basic.pause(1000)
    // Turn on display
    RBTFT18.turnOn()
    basic.showIcon(IconNames.Yes)
})

input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    // Farben
    RBTFT18.showString("Farbe Olive", 10, 10, 1, Color.Olive, Color.Black)
    RBTFT18.showString("Farbe Navy", 10, 17, 1, Color.Navy, Color.Black)
    RBTFT18.showString("Farbe DarkGreen", 10, 24, 1, Color.DarkGreen, Color.Black)
    RBTFT18.showString("Farbe DarkCyan", 10, 31, 1, Color.DarkCyan, Color.Black)
    RBTFT18.showString("Farbe Maroon", 10, 38, 1, Color.Maroon, Color.White)
    RBTFT18.showString("Farbe Purple", 10, 45, 1, Color.Purple, Color.Black)
    RBTFT18.showString("Farbe LightGrey", 10, 45, 1, Color.LightGrey, Color.Black)
    RBTFT18.showString("Farbe DarkGrey", 10, 52, 1, Color.DarkGrey, Color.Black)
    RBTFT18.showString("Farbe Red", 10, 59, 1, Color.Red, Color.Black)     // Blue und Red vertauscht
    RBTFT18.showString("Farbe Green", 10, 66, 1, Color.Green, Color.Black)
    RBTFT18.showString("Farbe Yellow", 10, 73, 1, Color.Yellow, Color.Black)    // Yellow und Cyan vertauscht
    RBTFT18.showString("Farbe Blue", 10, 80, 1, Color.Blue, Color.White)     // Blue und Red vertauscht
    RBTFT18.showString("Farbe Magenta", 10, 87, 1, Color.Magenta, Color.Black)
    RBTFT18.showString("Farbe Cyan", 10, 94, 1, Color.Cyan, Color.Black)    // Yellow und Cyan vertauscht
    RBTFT18.showString("Farbe Orange", 10, 101, 1, Color.Orange, Color.Black)
    RBTFT18.showString("Farbe GreenYellow", 10, 108, 1, Color.GreenYellow, Color.Black)
    RBTFT18.showString("Farbe Pink", 10, 115, 1, Color.Pink, Color.Black)
    RBTFT18.showString("Farbe Black", 10, 121, 1, Color.Black, Color.White)

    // Rahmen
    // Draw a yellow rectangle
    drawRahmen(2, 1, 127, 159, 0xFFFF)
    //showTest()
    basic.showIcon(IconNames.Yes)
})

function drawRahmen(x: number, y: number, width: number, height: number, color: Color) {
    //drawL(5, 5, 20, 30, color)
    //RBTFT18.drawLine(x, y, x + width, y, color)
    //RBTFT18.drawLine(x, y, x+width, y+height, color)
    //BTFT18.drawLine(x, y+height, x + width, y+height, color)
    //RBTFT18.drawLine(x+width, y, x + width, y+height, color)
    RBTFT18.drawLine(x, y, x + width, y, color)
    RBTFT18.drawLine(x, y, x, y+height, color)
    RBTFT18.drawLine(x, y+height, x + width, y+height, color)
    RBTFT18.drawLine(x+width, y, x + width, y+height, color)
}

function showTest() {
    // Draw a straight blue line
    RBTFT18.drawLine(
        0,
        0,
        100,
        100,
        Color.Blue
    )
    basic.pause(1000)
    // Draw a yellow rectangle
    RBTFT18.drawRectangle(
        0,
        0,
        10,
        12,
        Color.Blue
    )
    basic.pause(1000)
    // Draw a green circle
    RBTFT18.drawCircle(
        50,
        50,
        10,
        Color.Red
    )
    basic.pause(1000)
    // Clear screen - replaces whole screen with a black rectangle
    RBTFT18.clearScreen()
    // Show white text with black background
    RBTFT18.showString(
        "I am your RB-TFT1.8!",
        10,
        10,
        1,
        Color.Red,
        Color.Black
    )
    basic.pause(1000)
    // Turn off display
    RBTFT18.turnOff()
    basic.pause(1000)
    // Turn on display
    RBTFT18.turnOn()
}



