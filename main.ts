writingrobot.autoHome()
writingrobot.autoHome()
basic.showIcon(IconNames.SmallHeart)
for (let index = 0; index < 4; index++) {
    writingrobot.moveXYZ(70, 70, 20)
    basic.pause(100)
    writingrobot.moveXYZ(70, 70, -28)
    basic.pause(100)
    writingrobot.moveXYZ(150, 70, -28)
    basic.pause(100)
    writingrobot.moveXYZ(90, 150, -28)
    basic.pause(100)
    writingrobot.moveXYZ(70, 70, -28)
    basic.showIcon(IconNames.Heart)
}
writingrobot.autoHome()
basic.forever(function () {
	
})
