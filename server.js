const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 sSavage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London,England'
    },
    'Future': {
        'age': 38,
        'birthName': 'Nayvadius Demun Wilburn',
        'birthLocation': 'Atlanta, Georgia'
    },
    'Ye': {
        'age': 45,
        'birthName': 'Kanye West',
        'birthLocation': 'Chicago, Illinois'
    },
    'Playboi Carti': {
        'age': 25,
        'birthName': 'Jordan Terrell Carter',
        'birthLocation': 'Riverdale, Georgia'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if (rappers[rapperName]) {
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
    response.json(rappers)
})

app.listen(PORT, () => {
    console.log(`the server is now running on port ${PORT}!`)
})