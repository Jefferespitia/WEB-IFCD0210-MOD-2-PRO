import express from 'express'
import type { Request, Response, NextFunction} from 'express'
import debug from 'debug';


const log = debug ("11-express:app");

export const app = express()
log("Express app created")



const middleware = (req: Request, res: Response ,next: NextFunction) => {
log("middleware")
log(req.url)
log(res.locals)
next()
return
}

app.use(middleware)

// app.get("rute", fn)
// app.post("rute", fn)
// app.put("rute", fn)
// app.patch("rute", fn)
// app.delete("rute", fn)


app.get('/',(_req, res) => {
    res.send('Hello World!');
    return
})

app.post("/", (_req,res) => {
    res.send('Hello Post')
    return
})

app.get('/api', (_req, res) => {
    res.send('API rest!')
    return
})


