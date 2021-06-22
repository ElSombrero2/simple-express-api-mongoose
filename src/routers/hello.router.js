import { app } from '../modules/app.module.js'

export default (url) => {
    app.get(url,(req,res) => {
        res.json({message:'Hello World!'})
    })
}