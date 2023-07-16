import axios from 'axios';
import { useState } from 'react';
import './link-shortener.scss';
import NavBar from '../navbar/navbar';

const LinkShortener = () => {
  const [URL, setURL] = useState('');
  const [shortURL, setShortURL] = useState('');

  const handleSubmit = async () => {
    const res = await axios.post(`https://api.shrtco.de/v2/shorten?url=${URL}`);
    setShortURL(res?.data?.result?.full_short_link);
  };

  return (
    <>
      <NavBar />
      <div className="link-shortener-container">
        <h2>Link Shortener</h2>
        <div className="link-shortener-form">
          <input
            type="text"
            name="url"
            className="link-shortener-input"
            placeholder="Enter URL"
            value={URL}
            onChange={(e) => setURL(e.target.value)}
          />
          <button className="link-shortener-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>

        {shortURL && <p className="short-url">{shortURL}</p>}
      </div>
    </>
  );
};

export default LinkShortener;
