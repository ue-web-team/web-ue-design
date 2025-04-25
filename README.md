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
`npm pack`
Then change the package.json of the other projekt to point at the generated .tgz, for example:
`    "@umeaenergi/ue-design": "file:/dev/web-ue-design/umeaenergi-ue-design-0.2.47.tgz",`
and finally (in the other project):
`npm install`
`npm run dev`

### inspiration

Material style wave https://github.com/justintaddei/v-wave
