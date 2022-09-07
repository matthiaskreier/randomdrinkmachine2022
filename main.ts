input.onButtonPressed(Button.A, function () {
    names = [
    "Dan",
    "Dongjae",
    "William",
    "Khang",
    "Dipper"
    ]
    for (let i = 0; i <= names.length - 1; i++) {
        drinkIndices = [0, 1]
        serial.writeLine("******************************************")
        serial.writeLine("" + names[i] + " needs to make:")
        serial.writeLine(" a " + generateRandomDrink(drinkIndices))
        drinkIndices = [2, 3, 4]
        serial.writeLine("and a " + generateRandomDrink(drinkIndices))
    }
})
function generateRandomDrink (values: number[]) {
    drinkIndex = values[Math.round(Math.randomRange(0, values.length - 1))]
    switch (drinkIndex) {
        case 0: {
            // a good cup of coffee with a size and strength of Mr. Weinberg's choosing
            let sizeIndex = Math.randomRange(0, 2)
            let strengthIndex = Math.randomRange(0, 1)
            let sizeString: String = ""
            let strengthString: String = ""

            switch (sizeIndex) {
                case 0: {
                    sizeString = "small"
                    break;
                }
                case 1: {
                    sizeString = "medium"
                    break;
                }
                default: {
                    sizeString = "Mr. Wolf sized"
                    break;
                }
            }

            switch (strengthIndex) {
                case 0: {
                    strengthString = "normal"
                    break;
                }
                case 1: {
                    strengthString = "sleepy"
                    break;
                }
            }

            drinkString = sizeString + " coffee of " + strengthString + " strength"
            break;
        }
        case 1: {
            //a good cup of soda with a size of Mr. Weinberg's choosing
            let sizeIndex2 = Math.randomRange(0, 2)
            let sizeString2: String = ""

            switch (sizeIndex2) {
                case 0: {
                    sizeString2 = "small"
                    break;
                }
                case 1: {
                    sizeString2 = "medium"
                    break;
                }
                default: {
                    sizeString2 = "Mr. Wolf sized"
                    break;
                }
            }
            drinkString = sizeString2 + " cup of soda"
            break;
        }
        case 2: {
            //a small cup of hot water with a temperature of Mr. Weinberg's choosing
            let temperatureValue = Math.randomRange(35, 90)
            let sizeString3: String = ""

            drinkString = "small cup of hot water at " + temperatureValue + " ˚C"
            break;
        }
        case 3: {
            //A Mr. Wolf sized cup of water chilled to a temperature of Mr. Weinberg's choosing
            let temperatureValue2 = Math.randomRange(4, 18)
            drinkString = "Mr. Wolf sized cup of water chilled to " + temperatureValue2 + " ˚C"
            break;
        }
        default: {
            //A medium or small cup of sparking (carbonated) water cooled to 10 ˚C
            let sizeIndex3 = Math.randomRange(0, 1)
            let sizeString4: String = ""

            switch (sizeIndex3) {
                case 0: {
                    sizeString4 = "small"
                    break;
                }
                case 1: {
                    sizeString4 = "medium"
                    break;
                } //oops, did I not use default here? I guess you don't have to always do that.
            }
            drinkString = sizeString4 + " cup of sparkling water at 10 ˚C"
            break;
        }
    }
// serial.writeLine(drinkString)
    return drinkString
}
let drinkIndex = 0
let drinkIndices: number[] = []
let names: string[] = []
let drinkString = ""
serial.writeLine("Press button A!")
