//1
interface BaseCar{
    showCost(): void
}

//2
class MastodonCar implements BaseCar{
    showCost(): void {
        console.log('Mastodon Car Cost: $50,000')
    }
}

class RhinoCar implements BaseCar{
    showCost(): void {
        console.log('Rhino Car Cost: $70,000')
    }
}

//3
interface CarFactory{
    makeCar(): BaseCar
}

//4
class MastodonCarFactory{
    makeCar(): BaseCar{
        return new MastodonCar()
    }
}

class RhinoCarFactory{
    makeCar(): BaseCar{
        return new RhinoCar()
    }
}
