//STEP 1
class CarProductionLine {
    setAirBargs(airBargsNumber) {
        throw new Error("Method Not Implemented!");
    }

    setColor(color) {
        throw new Error("Method Not Implemented!");
    }

    setEdition(edition) {
        throw new Error("Method Not Implemented!");
    }

    resetProductLine() {
        throw new Error("Method Not Implemented!");
    }
}

//STEP 2
class SedanProductionLine extends CarProductionLine {
    constructor({ model }) {
        super()
        this.setInternalModel(model)
        this.resetProductLine()
    }

    setAirBargs(howMany) {
        this.sedanCar.airBags = howMany
        return this
    }

    setColor(color) {
        this.sedanCar.color = color
        return this
    }

    setEdition(edition) {
        this.sedanCar.edition = edition
        return this
    }

    setInternalModel(model) {
        this.internalModel = model
    }

    setModel() {
        this.sedanCar.model = 'sedan'
    }

    resetProductLine() {
        this.sedanCar =
            this.internalModel === 'mastodon' ? new MastodonCar() : new RhinoCar()
    }

    build() {
        this.setModel()
        const sedanCar = this.sedanCar
        this.resetProductLine()
        return sedanCar
    }
}

//STEP 3
class Car {
    constructor() {
        this._edition = ''
        this._model = ''
        this._airBags = 2
        this._color = 'black'
    }

    setAirBargs(howMany) {
        this._airBags = howMany
        return this
    }

    setColor(color) {
        this._color = color
        return this
    }

    setEdition(edition) {
        this._edition = edition
        return this
    }

    set model(model) {
        this._model = model
    }
}

class MastodonCar extends Car {
    constructor() {
        super()
    }
}

class RhinoCar extends Car {
    constructor() {
        super()
    }
}

//STEP 4

class Director {
    setProductionLine(productionLine) {
        this.productionLine = productionLine
    }

    constructCvtEdition() {
        this.productionLine
            .setAirBargs(4)
            .setColor('Blue')
            .setEdition('Cvt')
    }

    constructSignatureEdition() {
        this.productionLine
            .setAirBargs(8)
            .setColor('Navy Blue')
            .setEdition('Signature')
    }
}

function appBuilder(director){
    const mastodonSedanProductionLine = new SedanProductionLine({
        model: 'mastodon',
    })

    director.setProductionLine(mastodonSedanProductionLine)
    director.constructCvtEdition()

    const mastodonSedanCvt = mastodonSedanProductionLine.build()
    console.log(mastodonSedanCvt)
}

appBuilder(new Director())