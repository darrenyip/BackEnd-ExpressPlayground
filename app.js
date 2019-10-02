const express = require('express')
const morgan = require('morgan')
const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

const app = express()
// 1 --> MIDDLEWARE
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev')) //calling morgan will return to bottom
}

app.use(express.json())
app.use(express.static(`${__dirname}/public`))
app.use((req, res, next) => {
    console.log("Hello from the middleware😀")
    next()
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})


//3-> ROUTES
//---------mounting router-------
app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)
//--------------------------------

// 4-> start server
module.exports = app