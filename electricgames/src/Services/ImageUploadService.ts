import axios from 'axios';

const ImageUploadService = (

    () => {

        const imageUploadEndpoint = "http://localhost:5137/UploadImage"

        const uploadImage = async (image: File) => {
            const formData = new FormData();
            formData.append("file", image)
            
            await axios({
                method: "POST",
                url: imageUploadEndpoint,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" }
            });

            formData.delete("file"); 
        } 

        return {
            uploadImage
        }
        
    }
)();

export default ImageUploadService;