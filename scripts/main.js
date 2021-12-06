import { saveAs } from 'file-saver';
async function load_pics(){

}
async function upload_pics(pic){
    saveAs(new File(pic, "demo.jpeg", {type: "image/jpeg"}));
}