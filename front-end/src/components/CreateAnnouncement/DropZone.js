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
        <input className="createAnnouncement__input input"{...getInputProps()} />
        <p className="createAnnouncement__text">Drag 'n' drop your files here, or click to select files</p>
        <em className="createAnnouncement__text">(Only *.jpeg and *.png images will be accepted)</em>
      
      <aside>
        <h4 className="createAnnouncement__text drap">Fichier accepté</h4>
        <ul>
          {acceptedFilesItems}
        </ul>
        <h4 className="createAnnouncement__text drap">Fichier rejeté</h4>
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