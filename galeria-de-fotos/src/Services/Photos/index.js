import { storage } from "../firebase"
import { ref, listAll,  getDownloadURL, deleteObject, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'

export const getPhoto = async () => {
    let list = [] 
    const  imageFolder = ref(storage, 'image')
    const photoList = await listAll(imageFolder)
    for(let i in photoList.items) {
        let photoUrl = await getDownloadURL(photoList.items[i])
        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        });
    }
    return list
}

export const deletPhoto = async (dataName) => {
    const deletRef = ref(storage, `image/${dataName}`);
    await deleteObject(deletRef)
} 
export const uploadPhoto = async (file) => {
        let uploadRef = ref(storage, `image/${file.name}`);
        let upload = await uploadBytes(uploadRef, file)
        let photoUrl = await getDownloadURL(upload.ref)
        return {
            name: upload.ref.name,
            url: photoUrl
        }
}