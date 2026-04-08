//STEP 1
class MastodonCar{
    useGPS(){
        throw new Error("Method not implemented!");
    }
}

class RhinonCar{
    useGPS(){
        throw new Error("Method not implemented!");
    }
}

//STEP 2
class MastodonSedanCar extends MastodonCar{
    useGPS(){
        console.log('SEDAN Mastodon GPS')
    }
}

class MastodonHatchbackCar extends MastodonCar{
    useGPS(){
        console.log('HATCHBACK Mastodon GPS')
    }
}

class RhinoSedanCar extends RhinoCar{
    useGPS(){
        console.log('SEDAN Rhino GPS')
    }
}

class RhinoHatchBackCar extends RhinoCar{
    useGPS(){
        console.log('HatchBack Rhino GPS')
    }
}

//STEP 3
class CarAbstractFactory{
    createMastodon(){
        throw new Error("Method not implemented!");
    }

    createRhino(){
        throw new Error("Method not implemented!");
    }
}

//STEP 4
class SedanCarFactory{
    createMastodon(){
        return new MastodonSedanCar()
    }

    createRhino(){
        return new RhinoSedanCar()
    }
}

class HatchBackCarFactory{
    createMastodon(){
        return new MastodonHatchbackCar()
    }

    createRhino(){
        return new RhinoHatchBackCar()
    }
}