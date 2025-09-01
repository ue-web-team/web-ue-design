# Umea Component Library (UCL)

## A11y

## Development

`npm run dev`

## Package for npm

first change version field in package then:  
`npm run build:library`

After that publish with  
`npm run publish:library`

## Package for local testing (in another project)

Build the library as above, then:
`yarn link`
and finally (in the other project):
`yarn link "@umeaenergi/ue-design"`

When you're done (in this project):
`yarn unlink`
and then (in the other project):
`yarn unlink "@umeaenergi/ue-design"`
`yarn install --check-files`

### inspiration

Material style wave https://github.com/justintaddei/v-wave
