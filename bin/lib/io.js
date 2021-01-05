
const decompress = require("decompress");
const fs = require("fs");
const path = require("path");
exports.deletePath = function(filePath){
    if(fs.existsSync(filePath)){
        const files = fs.readdirSync(filePath);
        for(let index=0; index<files.length; index++){
            const fileNmae = files[index];
            const currentPath = path.join(filePath,fileNmae);
            if(fs.statSync(currentPath).isDirectory()){
                deletePath(currentPath)
            }else{
                fs.unlinkSync(currentPath);
            }
        }
        fs.rmdirSync(filePath);
    }
}


exports.unzipFile = function(file,destPath,callBack){
    decompress(file,destPath,{
        map: file => {
            // 这里可以修改文件的解压位置， 
            // 例如压缩包中文件的路径是 ${destPath}/lb-react-apps-template/src/index.js   =》  ${destPath}/src/index.js
            const outPath = file.path.substr(file.path.indexOf('/') + 1)
            file.path = outPath
            return file
        }}
    ).then(files => {
        callBack()
    }).catch(error=>{
        callBack(error)
    })
}