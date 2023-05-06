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

//cors options
const whitelist = ['http://localhost:3000', 'http://example2.com']
const  corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}

//allow cross-origin requests
app.use(
  cors(corsOptions)
)

//routes
app.use(router)

//declear port or take in the process.env
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
