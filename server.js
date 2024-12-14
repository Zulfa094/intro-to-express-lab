const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

// 1

app.get('/greetings/:userName', (req, res) => {
  res.send(`Hello there, ${req.params.userName}!`)
})

// 2

app.get('/roll/:number', (req, res) => {
  const randomNum = Math.floor(Math.random() * req.params.number + 1)
  if (randomNum) {
    res.send(`You rolled a ${randomNum}.`)
  } else {
    res.send('You must specify a number.')
  }
})

// 3

const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
]

app.get('/collectibles/:index', (req, res) => {
  const i = req.params.index

  if (i < 0 || idx >= collectibles.length) {
    return res.send('This item is not yet in stock. Check back soon!')
  }

  const item = collectibles[i]
  res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`)
})

app.get('/hello', (req, res) => {
  res.send(
    `Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`
  )
})

// 4

const shoes = [
  { name: 'Birkenstocks', price: 50, type: 'sandal' },
  { name: 'Air Jordans', price: 500, type: 'sneaker' },
  { name: 'Air Mahomeses', price: 501, type: 'sneaker' },
  { name: 'Utility Boots', price: 20, type: 'boot' },
  { name: 'Velcro Sandals', price: 15, type: 'sandal' },
  { name: 'Jet Boots', price: 1000, type: 'boot' },
  { name: 'Fifty-Inch Heels', price: 175, type: 'heel' }
]

app.get('/shoes', (req, res) => {
  const minPrice = req.query['min-price']
  const maxPrice = req.query['max-price']
  const type = req.query.type

  let filteredShoes = shoes

  if (minPrice) {
    filteredShoes = shoes.filter((shoe) => {
      return shoe.price >= minPrice
    })
  }

  if (maxPrice) {
    filteredShoes = shoes.filter((shoe) => {
      return shoe.price <= maxPrice
    })
  }

  if (type) {
    filteredShoes = filteredShoes.filter((shoe) => {
      return shoe.type === type
    })
  }

  res.json(filteredShoes)
})
