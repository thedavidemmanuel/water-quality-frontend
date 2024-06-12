import React, { useState } from 'react';
import logo from '../images/logo.png';
import '../css/getstarted.css';
import '../css/home.css';
import LoadingPage from './loadingpage'; 

function Home() {
 
  const [formData, setFormData] = useState({
    ph: '',
    Hardness: '',
    Solids: '',
    Chloramines: '',
    Sulfate: '',
    Conductivity: '',
    Organic_carbon: '',
    Trihalomethanes: '',
    Turbidity: ''
  });
  const [loading, setLoading] = useState(false); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); 
    fetch('/api/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setLoading(false); 
      window.location.href = `/result?prediction=${data.prediction}`;
    })
    .catch(error => {
      console.error('Error:', error);
      setLoading(false); 
    });
  };

  return (
    <div>
      <div className='home-header'>
        <div>
          <img src={logo} alt="" />
        </div>
        <button className='predict' onClick={handleSubmit}>Predict water potability</button>
      </div>

      <div className='page-content'>
        {loading ? ( 
          <LoadingPage />
        ) : ( 
          <div className='header-text'>
            <p>
              To analyze your water potability, enter the required parameters as precise integers or decimals in the provided fields. <br />
              Our model will evaluate the inputs to determine if your water is safe for drinking. Double-check your entries before <br />
              submitting for accurate results.
            </p>

            <div className='input-field'>
              <div className='set'>
                {Object.entries(formData).map(([key, value]) => (
                  <div className='input-label' key={key}>
                    <label>{key}</label>
                    <input
                      type='number'
                      name={key}
                      value={value}
                      placeholder={`Input water ${key.toLowerCase()} level`}
                      onChange={handleInputChange}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;


