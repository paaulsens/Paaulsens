import { ChangeEvent, useState } from 'react'
import ImageUploadService from '../../Services/ImageUploadService';
import Hr from '../Hr';

import '../../Css/ImageUpload.css';

const ImageUpload = () => {

  const [image, setImage] = useState<File | null>(null);
  const [statusOutput, setStatusOutput] = useState("")

  const setImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {files} = e.target;

    if(files != null){
      const file = files[0];
      setImage(file);
    }
  }

  const uploadImage = () => {
    if(image != null){
      ImageUploadService.uploadImage(image);
      setStatusOutput("Image uploaded successfully.")
    } else{
      setStatusOutput("No image was detected.")
    }
  }

  return (
    <div>
      <div className="text-align-center">
        <div>
          <Hr legend="Upload Image"/> 
          
          <div>
            <input className="select-file-btn" type="file" accept="image/*" title="Choose Image" onChange={setImageHandler}></input>
          </div>

          <button onClick={uploadImage} type="button" value="upload" className="btn small-med-btn upload-image-btn">Upload</button>
          <p className="upload-status text-align-center">{statusOutput}</p>
          <br/>
        </div>
      </div> 
    </div>
  )

}
  
  export default ImageUpload;
  