const Pokie = require('./schema')
const seedData = require('./pokemonData')

Pokie.remove({})
  .then(() => {
    return Pokie.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
  })
