const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

// Define path to search routes
const searchRoutes = require('./routes/search')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/todos', todoRoutes)

// Add search routes
app.use('/search', searchRoutes)

// Works to verify the search term gets to the backend
// app.get('/search', (req, res) => {
//     var searchTerm = req.query.search
//     console.log(searchTerm)
//     res.redirect('/')
// });
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    