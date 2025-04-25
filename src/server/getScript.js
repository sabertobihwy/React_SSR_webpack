// const fs = require('fs')
import fs from 'fs'

export function getScript() {
    const result = fs.readdirSync('./public/js')
    return result.filter(name => name.endsWith('js'))
        .map(name => `<script src='/js/${name}'></script>`)
        .join('\n')
}
