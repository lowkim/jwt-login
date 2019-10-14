import jwt from 'jsonwebtoken'
let checkToken = (req, res, next) => {
    // set token header
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token != undefined && token.startsWith('Bearer ')) {
        token = token.slice(7, token.length)
        let secret = process.env.SUPERSECRET
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Token is not valid'
                })
            } else {
                res.decoded = decoded
                next()
            }

        })
    }else{
        return res.json({
            success: false,
            message: 'Auth token is not supplied'
        })
    }
}

export {
    checkToken
}