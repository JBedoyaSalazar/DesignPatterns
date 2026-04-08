class Car {
    constructor({ edition, model, airBargs, color } = {}) {
        this._edition = edition || 'defualt'
        this._model = model || ''
        this._ariBags = airBargs || 0
        this._color = color || 'default'
    }

    set airBags(howMany) {
        this._ariBags = howMany
    }

    set color(color) {
        this._color = color
    }

    set model(model) {
        this._model = model
    }

    set edition(edition) {
        this._edition = edition
    }

    get airBags() {
        return this._ariBags
    }

    get color() {
        return this._color
    }

    get model() {
        return this._model
    }

    get edition() {
        return this._edition
    }

    //STEP 1
    clone() {
        throw new Error("Method Not Implemented!");
    }
}

//STEP 2
class MastodonCar extends Car{
    constructor(carToClone){
        super({
            edition: carToClone?.edition,
            color: carToClone?.clone,
            model: carToClone?.model,
            airBargs: carToClone?.airBags
        })
    }

    clone(){
        return new MastodonCar(this)
    }
}