//import express module
import express from 'express'

//import cors module & allow cross origin requsts
import cors from 'cors'

//import routes from routes
import router from './Routes/index.js'

//initialize express
const app = express()

//use express json
app.use(express.json())
// app.use(express.urlencoded({}))

//
app.use(cors())

//routes
app.use(router)

const PORT = 5000

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
