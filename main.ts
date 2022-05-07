writingrobot.autoHome()
basic.showIcon(IconNames.SmallHeart)
let x_offset = 100
let y_offset = 100
basic.pause(100)
for (let index = 0; index < 4; index++) {
    writingrobot.moveXYZ(x_offset, y_offset, 0)
    basic.pause(200)
    writingrobot.moveXYZ(100, 100, -32)
    basic.pause(200)
    writingrobot.moveXYZ(180, 100, -32)
    basic.pause(200)
    writingrobot.moveXYZ(140, 180, -32)
    basic.pause(200)
    writingrobot.moveXYZ(100, 100, -32)
    basic.showIcon(IconNames.Heart)
}
// 归位
writingrobot.moveXYZ(x_offset, y_offset, 0)
writingrobot.autoHome()
basic.forever(function () {
	
})
