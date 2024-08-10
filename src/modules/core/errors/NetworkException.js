class NetworkException extends Error {
    constructor(){
        super("Error en la respuesta de la red")
        super.name = "NetworkException"
    }
}

export default NetworkException