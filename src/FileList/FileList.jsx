import axios from 'axios'
import React from 'react'
import FileItem from './../FileItem/FileItem'

const FileList = ({ files, removeFile, saveFile }) => {
    const deleteFileHandler = (_name) => {
        axios.delete(`http://localhost:5000/upload?name=${_name}`)
            .then((res) => removeFile(_name))
            .catch((err) => console.error(err));
    }
    const downloadFileHandler = (_name) => {
        axios.get(`http://localhost:5000/download?name=${_name}`)
            .then((res) => saveFile(_name))
            .catch((err) => console.error(err));
    }
    return (
        <ul className="file-list">
            {
                files &&
                files.map(f => (<FileItem
                    key={f.name}
                    file={f}
                    deleteFile={deleteFileHandler}
                    saveFile={downloadFileHandler} />))
            }
        </ul>
    )
}

export default FileList