const { readdirSync, writeFileSync } = require('fs')

const enumeratedDir = './enumerated'

const srcMemes = readdirSync(enumeratedDir)

const db = srcMemes.map((memeName, index) => ({
  id: index,
  imageId: memeName,
  description: ''
}));

writeFileSync('db.json', JSON.stringify(db), () => console.log("Wrote out db.js"))

