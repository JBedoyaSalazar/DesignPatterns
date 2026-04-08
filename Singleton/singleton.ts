class SingletonTS{
    private static instance: SingletonTS
    private version: string

    private constructor(version:string){
        this.version = version
    }

    static getInstance(version:string):SingletonTS{
        if(!SingletonTS.instance){
            SingletonTS.instance = new SingletonTS(version)
        }

        return SingletonTS.instance
    }
}