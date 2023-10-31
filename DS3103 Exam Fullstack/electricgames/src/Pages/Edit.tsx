import Logo from '../Components/Logo'
import Navbar from '../Components/Navbar/Navbar_Search';
import Hr from '../Components/Hr';
import ImageUpload from '../Components/SearchPage/ImageUpload';
import DeleteGame from '../Components/SearchPage/DeleteGame';
import EditGame from '../Components/SearchPage/EditGame';


import '../Css/Edit.css';

const Edit = () => {
  
  return (
    <div>
      <Logo />
      <Navbar />  

      <div className="wrapper justify-content-center">
        <h1 className="fill-row">Add / Edit / Delete</h1>
      </div>

      <ImageUpload />
      <Hr legend="Edit / Delete" />
      <br />

      <div className="wrapper">
        <div className="edit-game">
          <EditGame />
        </div>
        <div className="delete-game">
          <DeleteGame />
        </div>
      </div>
    </div>
  );
}

export default Edit;