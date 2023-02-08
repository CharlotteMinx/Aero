const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 5000

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static('dist'))

// create a GET route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
