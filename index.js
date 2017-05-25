const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.enable('trust proxy')

app.get('/', (req, res) => {
    res.send({
        ipaddress: req.ip,
        language: req.headers["accept-language"].split(",")[0],
        software: /\(.*?\)/.exec(req.headers['user-agent'])[0].slice(1, -1)
    })
})

app.listen(PORT, console.log(`Listening on port ${PORT}`))