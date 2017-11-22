const { readdirSync, writeFileSync } = require('fs')

const enumeratedDir = './enumerated'
const dbLocation = './src/database/db.json'

const srcMemes = readdirSync(enumeratedDir)

const db = srcMemes.map((memeName, index) => ({
  id: index,
  imageId: memeName,
  description: ''
}));

writeFileSync(dbLocation, JSON.stringify(db), () => console.log("Wrote out db.js"))

