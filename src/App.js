import './App.css';
import React, { useState } from 'react'
import img1 from './Assets/images/image1.png'
import img2 from './Assets/images/image2.jfif'
import img3 from './Assets/images/image3.jfif'
import img4 from './Assets/images/image4.jfif'
import CardDetails from './Components/Modal/CardDetails';

// can be divided into small components

function App() {
  const data = [
    {
      image: img1,
      title: 'Designer Wooden Buttons',
      colors: 8,
    },
    {
      image: img2,
      title: '100% Cotton Navy/White Colour Oxford Chambery',
      colors: 8,
    },
    {
      image: img3,
      title: '100% Cotton Navy/White Colour Oxford Chambery',
      colors: 8,
    },
    {
      image: img4,
      title: '100% Cotton Navy/White Colour Oxford Chambery',
      colors: 8,
    }
  ]
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container cards-container my-5 my-md-0">
      {showModal ? <CardDetails show={showModal} closeModal={() => setShowModal(false)} /> : null}
      <div className="card-deck row mx-lg-5 mx-md-3">
        {data.map((item, idx) => 
          <div key={idx} onClick={() => setShowModal(true)} className="col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="card m-0 border-0 cursor-pointer">
              <img className="card-img-top h-48" src={item.image} alt="" />
              <div className="card-body p-0 pt-3">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text"><small className="text-muted">{item.colors} more colors</small></p>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
    
  );
}

export default App;
