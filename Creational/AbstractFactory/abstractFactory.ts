// 1.
interface MastodonCar{
    useGPS(): void
}

interface RhinoCar{
    useGPS(): void
}

//2 
class MastodonCarSedan implements MastodonCar{
    useGPS(): void {
        console.log('SEDAN Mastodon GPS')
    }
}

class MastodonCarHatchback implements MastodonCar{
    useGPS(): void {
        console.log('Hatchback Mastodon GPS')
    }
}

class RhinoCarSedan implements RhinoCar{
    useGPS(): void {
        console.log('SEDAN Rhino GPS')
    }
}

class RhinoCarHatchback implements RhinoCar{
    useGPS(): void {
        console.log('Hatchback Rhino GPS')
    }
}

// 3.
interface CarAbstractFactory{
    createMastodon(): MastodonCar
    createRhino(): RhinoCar
}

// 4.
class SedanCarFactory implements CarAbstractFactory{
    createMastodon(): MastodonCar {
        return new MastodonCarSedan
    }

    createRhino(): RhinoCar {
        return new RhinoCarSedan
    }
}

class HatchbackCarFactory implements CarAbstractFactory{
    createMastodon(): MastodonCar {
        return new MastodonCarHatchback
    }

    createRhino(): RhinoCar {
        return new RhinoCarHatchback
    }
}