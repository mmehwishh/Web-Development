//cat.jpg
//mypdf.pdf
//hell.png
//file.pdf
//organize these files 
let fs = require('fs')
const path = require('path')


let array = ["cat.jpg", "mypdf.pdf", "hell.png", "file.pdf"]
let new_arr=[]
function find(text) {
    if(!new_arr.includes(text)) {
        new_arr.push(text)
        return true
    } 
    return false
}
for (const element of array) {
    let file_name = element
    let ext = element.split('.').pop().slice(0,3);
    if(find(ext)) {
       //create folder mkdir and file_name youll create file in it
        fs.mkdirSync(ext)
    }
    //path.join -> pdf/myfile.txt
    let file_path = path.join(ext , element)
    fs.writeFileSync(file_path, " ")

}