import jwt from 'jsonwebtoken'

const Sign = (payload,opt) => {
    return jwt.sign(payload,process.env.KEY,opt)
}

const Verify = (token) => {
    try{
        let obj = jwt.verify(token,process.env.KEY)
        if(!obj) throw null
        return obj
    }catch(e){ return null }
}

const Auth = (key) => {
    return (req,res,next) => {
        let token = req.headers['authorization']
        if(key) token = req.headers[key]
        let obj = Verify(token)
        if(!obj) res.status(401).json({message : 'Unauthorized!'})
        else {
            req['x-payload'] = obj
            next()
        }
    }
}

export { Sign,Verify,Auth }