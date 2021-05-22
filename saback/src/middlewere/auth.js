import {promisify} from 'util'
import jwt from 'jsonwebtoken'


const auth = (req, res, next) => {
    const bearerToken = req.headers.authorization
    console.log(bearerToken)
    if(!bearerToken)return res.json({message: 'Insira um token válido'})
    const token = bearerToken.split(' ')[1]
    promisify(jwt.verify)(token, 'sa')
    .then(r=>{
        console.log(r)
    })
    .catch(e=>{
        console.log(e)
        return res.json({menssage: 'TOKEN INVALIDO'})
    })
    return next()
}


export default auth