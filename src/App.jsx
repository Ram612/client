import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import './App.scss';
import FileUpload from './FileUpload/FileUpload';
import FileList from './FileList/FileList';
import { saveAs } from "file-saver";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [ user, setUser ] = useState([]);
  const [ files, setFiles ] = useState([]);

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }

  const saveFile = (filename) => {
    saveAs(files.filter(file => file.name !== filename))
  };  

  function handleCallbackResponse(response) {
    // console.log("Encoded JWT ID token: " + response.credential);
    let userObject = jwt_decode(response.credential);
    // console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv","uploadDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
    document.getElementById("uploadDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "439805572287-n5keh94u6cknu0808erglnil3li3as6i.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    );

    // Google one tap prompt 
    // google.accounts.id.prompt();
  }, );

  return (
    <div className="App">
      <header className="App-header">
        <h1>File Uploader</h1>
        <div>
          <div id="signInDiv"></div>
        </div>
        {
          Object.keys(user).length != 0 &&
          <button className="logout" onClick={ (e) => handleSignOut(e)}>
            Logout 
            <i>
                <FontAwesomeIcon icon={faSignOutAlt} />
            </i>
          </button>
        }
      </header>
      <div>
        { user &&
          <div className='profile'>
            <img src={user.picture}></img>
            <h3>{user.name}</h3>
          </div>
        }
      </div>
      {
        Object.keys(user).length != 0 &&
        <div id="uploadDiv">
          <FileUpload files={files} setFiles={setFiles}
            removeFile={removeFile} />
          <FileList files={files} removeFile={removeFile} saveFile={saveFile}/>
          
        </div>
      }
      <>
      {/* <input type="file" onChange={upload}/> */}
      </>
    </div>
  );
}

export default App;
