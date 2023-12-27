const fs = require( 'fs' )
const util = require( 'util' )
const exec = util.promisify( require( 'child_process' ).exec )

const FOLDER = './docs'


const generateFolder = async () => {
  try {
    // is folder exists ?
    console.log( `Check if '${ FOLDER }' folder exists...` )
    await fs.promises.access( FOLDER , fs.constants.F_OK )

    // remove folder
    console.log( `Remove '${ FOLDER }' folder...` )
    await exec( `rm -r ${ FOLDER }` )
  } catch {}

  // create folder
  console.log( `Create '${ FOLDER }' folder...` )
  await exec( `mkdir ${ FOLDER }` )

  // copying source to folder
  console.log( `Copying source to '${ FOLDER }' folder...` )
  await exec( `cp -r .output/public/ ${ FOLDER }` )

  // success
  console.log( '\x1b[32m%s\x1b[0m' , `'${ FOLDER }' is generate !` )
}

generateFolder()