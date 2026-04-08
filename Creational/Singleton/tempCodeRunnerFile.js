class Singleton {
    static #instance

    constructor(version) {
        this.version = version
    }

    static getInstance(version) {
        if (!Singleton.#instance) {
            Singleton.#instance = new Singleton(version)
        }
        return Singleton.#instance
    }
}

function appSingleton() {

    const pruebaNew  = new Singleton('s')
    const singleton1 = Singleton.getInstance('ve')
    const singleton2 = Singleton.getInstance('version-2')
    const singleton3 = Singleton.getInstance('version-3')

    console.log(pruebaNew)

    // 1. Verificar identidad (referencia)
    console.log('¿Misma instancia?:', 
        singleton1 === singleton2 && singleton2 === singleton3
    )

    // 2. Verificar que la versión NO cambia
    console.log('Versión almacenada:', singleton1.version)

    // 3. Validar que los argumentos posteriores no afectan
    console.log('Intentos de sobrescritura ignorados:', 
        singleton2.version === 'version-1' && 
        singleton3.version === 'version-1'
    )

    // 4. Inspección estructurada
    console.log({
        singleton1,
        singleton2,
        singleton3
    })
}

appSingleton()