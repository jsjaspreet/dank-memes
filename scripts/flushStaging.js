const { readdirSync, copyFileSync } = require('fs')
const { extname } = require('path')
const pad = require('pad')

const STAGING = './staging'
const DIST = './enumerated'

const dstMemes = readdirSync(DIST)
const stagingMemes = readdirSync(STAGING)

let idx = dstMemes.length;
for (const stagedMeme of stagingMemes) {
  const ext = extname(stagedMeme)
  const paddedId = pad(5, `${idx++}`, '0')
  const newFileName = `DM-${paddedId}${ext}`
  console.log(`Generating ${DIST}/${newFileName}`)
  copyFileSync(`${STAGING}/${DIST}`, `${DIST}/${newFileName}`)
}
