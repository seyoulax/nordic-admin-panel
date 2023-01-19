export function ToBase64(img, cb){
    const reader = new FileReader();
    reader.onloadend = function() {
        cb(reader.result)
    }
    reader.readAsDataURL(img)
}