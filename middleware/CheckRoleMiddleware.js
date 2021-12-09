const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')



module.exports = function(role){
    return function(req, res, next){
        try {
            const token = req.headers.authorization.split(' ')[1]
            if(!token){
                return next(ApiError.UnauthorizedError())
            }
            const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
          
            if(decoded.role !== role){
               return next(ApiError.forbidden('Нет доступа'))
            } 
            req.user = decoded
            next()

        } catch (error) {
            return next(ApiError.UnauthorizedError())
        }
    }
}