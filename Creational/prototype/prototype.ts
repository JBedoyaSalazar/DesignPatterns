type AvailableColors = 'red' | 'Black' | 'gray' | 'default'
type EditionsType = 'Cvt' | 'Signature' | 'default'
type CarConstructorParams = {
    edition: EditionsType
    model: string
    airBags: number
    color: AvailableColors
}

abstract class Car {

    private _edition: EditionsType
    private _model: string
    private _airBags: number
    private _color: AvailableColors

    constructor({
        edition,
        model,
        airBags,
        color,
    }: CarConstructorParams) {
        this._edition = edition || 'default'
        this._model = model || ''
        this._airBags = airBags || 0
        this._color = color || 'default'
    }
}