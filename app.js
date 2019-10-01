const express = require('express')
const morgan = require('morgan')
const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

const app = express()
//middleware
app.use(morgan('dev')) //calling morgan will return to bottom

app.use(express.json())
app.use((req, res, next) => {
    console.log("Hello from the middleware")
    next()
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})


// app.get('/', (req, res) => {
//     res.status(200).json({
//         message: 'Hello from the server!',
//         app: 'Backend-Project'
//     })
// })
// app.post('/', (req, res) => {
//     res.send('you can now post!')
// })



//3-> router
//---------mounting router-------
app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)
//--------------------------------

// 4-> start server
const port = 3000
app.listen(port, () => {
    console.log(`App running now! At port: ${port}...`)
})