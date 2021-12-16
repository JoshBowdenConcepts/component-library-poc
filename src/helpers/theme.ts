import * as fs from 'fs'

// 'concrete.override.json' = fileName

export function dynamicImport(fileName: string = 'base.theme.josn') {
    let theme
    fs.stat(fileName, function (err) {
        if (err == null) {
            console.log('File exists')
            theme = require(fileName)
        } else if (err.code === 'ENOENT') {
            // file does not exist
            console.log('no override available using base theme')
        } else {
            console.log('Some other error: ', err.code)
        }
    })

    // Return theme or null
    theme ? theme : null
}
