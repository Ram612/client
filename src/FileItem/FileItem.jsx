import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faSpinner, faTrash, faDownload } from '@fortawesome/free-solid-svg-icons'
import './FileItem.scss'
import { saveAs } from "file-saver"

const FileItem = ({ file, deleteFile, saveFile }) => {
    return (
        <>
            <li
                className="file-item"
                key={file.name}>
                <FontAwesomeIcon icon={faFileAlt} />
                <p>{file.name}</p>
                <div className="actions">
                    <div className="loading"></div>
                    {file.isUploading && <FontAwesomeIcon
                        icon={faSpinner} className="fa-spin"
                        onClick={() => (deleteFile(file.name), saveFile(file.name))} />
                    }
                    {!file.isUploading &&
                        <FontAwesomeIcon icon={faTrash}
                            onClick={() => deleteFile(file.name)} />
                    }
                    {!file.isUploading &&
                        <FontAwesomeIcon icon={faDownload}
                            onClick={() => saveFile(file.name)} />
                    }
                </div>
            </li>
        </>
    )
}

export default FileItem