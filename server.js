const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('data/db.json')
const cors = require("cors")

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.use(cors())

const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})