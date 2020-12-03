import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import Title from './Title'
import UploadForm from './UploadForm'
import ImageGrid from './ImageGrid'
import Modal from './Modal'

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }   
    </div>
  );
}

export default App;
