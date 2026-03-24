import { createServer } from 'node:http';
import debug from 'debug';
import { app } from './index.initial.ts';

const log = debug ("11-express:index");
const port = process.env.PORT || 4000

const server = createServer(app)
log("Server app created")

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
