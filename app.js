// 1. copy all mobs to Folder A)
// 2. copy TEMPLATE to Folder B)
// 3. for each file in Folder A)
//    -copy Template
//    -rename that template to file name
//    -save it in Folder B)

const folderA = './folderA';
const fs = require('fs');

const timeout = async () =>{
    setTimeout
}

fs.readdir(folderA, (err, files) =>{
    files.forEach(file=>{
        console.log(file);
        fs.createReadStream('./folderB/template.GTX').pipe(fs.createWriteStream('./folderB/template_copy.GTX'));
        fs.rename('./folderB/template_copy.GTX', `./folderB/${file}`, function(err) {
            if ( err ) console.log('ERROR: ' + err);
        });
    })
})