input.onButtonPressed(Button.A, function () {
    speed += -1
})
input.onButtonPressed(Button.B, function () {
    speed += 1
})
let tree = ChristmasTree.create()
tree.changeMode(LEDMode.Free)
tree.showRainbow()
let speed = 1
basic.forever(function () {
    tree.rainbowAnimation(speed)
    tree.update()
})
