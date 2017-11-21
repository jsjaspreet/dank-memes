const { readdirSync, copyFileSync } = require('fs')
const { extname } = require('path')
const pad = require('pad')

const SRC = './dank-memes'
const DIST = './enumerated'

const srcMemes = readdirSync(SRC)

let idx = 0;
for (const srcMeme of srcMemes) {
  const ext = extname(srcMeme)
  const paddedId = pad(5, `${idx++}`, '0')
  const newFileName = `DM-${paddedId}${ext}`
  console.log(`Generating ${DIST}/${newFileName}`)
  copyFileSync(`${SRC}/${srcMeme}`, `${DIST}/${newFileName}`)
}
