let rastgele = 0
let renk = ""
input.onButtonPressed(Button.A, function () {
    rastgele = randint(1, 3)
    basic.showNumber(rastgele)
    if (rastgele == 1) {
        renk = "kirmizi"
        basic.showIcon(IconNames.No)
    } else if (rastgele == 2) {
        renk = "sari"
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    } else if (rastgele == 3) {
        renk = "yesil"
        basic.showIcon(IconNames.Yes)
    }
})
