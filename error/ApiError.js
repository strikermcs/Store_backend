class ApiError  extends Error{
    constructor(status, message){
        super()
        this.status = status
        this.message = message
    }

    static UnauthorizedError(){
        return new ApiError(401, 'Пользователь не авторизован')
    }

    static badUser(message){
        return new ApiError(404, message)

    }

    static badPassword(message) {
        return new ApiError(418, 'Неверный пароль')
    }

    static internal(message){
        return new ApiError(500, message)
    }

    static forbidden(message){
        return new ApiError(403, message)
    }

    static conflict(message){
        return new ApiError(400, message)
    }
}

module.exports = ApiError
