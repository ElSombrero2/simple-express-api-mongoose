import { app } from './modules/app.module.js'
import { load } from './modules/database.module.js'
import HelloRouter from './routers/hello.router.js'

async function main () {
    try{
        await load()
        HelloRouter('')
        app.listen(process.env.PORT,() => console.log('Listening on : ' + process.env.PORT))
    }catch(e){
        console.log(e)
    }
}

export { main }