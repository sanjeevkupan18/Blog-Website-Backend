const { validateToken } = require("../services/authentication")

function checkForAuthenticationCookie(cookieName){
    return (req,res,next)=>{
        const tokencookievalue = req.cookies[cookieName];
        if(!tokencookievalue){
            return next()
        }
        try {
            const userPayload = validateToken(tokencookievalue)
            req.user=userPayload;
        } catch (error) {}
        return next()
    }
}

module.exports = {
    checkForAuthenticationCookie,
}