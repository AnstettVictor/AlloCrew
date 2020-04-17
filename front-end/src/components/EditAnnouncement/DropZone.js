import React from 'react';
import {useDropzone} from 'react-dropzone';

function Accept(props) {
  const {acceptedFiles, rejectedFiles, getRootProps, getInputProps} = useDropzone({
    accept: 'image/jpeg, image/png'
  });
  
  const acceptedFilesItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const rejectedFilesItems = rejectedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input className="editAnnouncement__input input"{...getInputProps()} />
        <p className="editAnnouncement__text drop">Drag 'n' drop your files here, or click to select files</p>
        <em className="editAnnouncement__text drop">(Only *.jpeg and *.png images will be accepted)</em>
      
      <aside>
        <h4 className="editAnnouncement__text drap drop">Fichier accepté</h4>
        <ul>
          {acceptedFilesItems}
        </ul>
        <h4 className="editAnnouncement__text drap drop">Fichier rejeté</h4>
        <ul>
          {rejectedFilesItems}
        </ul>
      </aside>
      </div>
    </section>
  );
}

<Accept />

export default Accept;