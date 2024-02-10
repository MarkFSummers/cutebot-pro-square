input.onButtonPressed(Button.A, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.InBackground)
    for (let index = 0; index < 4; index++) {
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0x0000ff)
        CutebotPro.distanceRunning(CutebotProOrientation.Advance, 50, CutebotProDistanceUnits.Cm)
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xff0000)
        basic.pause(100)
        basic.showArrow(ArrowNames.North)
        CutebotPro.colorLight(CutebotProRGBLight.RGBL, 0xffff00)
        CutebotPro.trolleySteering(CutebotProTurn.Left, CutebotProAngle.Angle90)
    }
    CutebotPro.turnOffAllHeadlights()
})
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
