// const fs = require('fs')
import fs from 'fs'

export function getLink() {
    const result = fs.readdirSync('./public/css')
    return result.filter(name => name.endsWith('css'))
        .map(name => `<link rel="stylesheet" href="/css/${name}"/>`)
        .join('\n')
}
