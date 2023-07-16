import axios from 'axios';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './link-shortener.scss';
import NavBar from '../navbar/navbar';

const LinkShortener = () => {
  const [URL, setURL] = useState('');
  const [shortURL, setShortURL] = useState('');
  const [copied, setCopied] = useState(false);

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
            onChange={(e) => {
              setURL(e.target.value);
              setCopied(false);
            }}
          />
          <button className="link-shortener-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>

        {shortURL && (
          <CopyToClipboard text={shortURL} onCopy={() => setCopied(true)}>
            <div className="link-shortener-form">
              <input type="text" name="shorturl" className="link-shortener-input" value={shortURL} disabled />
              <button className="link-copy-button">
                <span>{copied ? <span>Copied 🙄</span> : <span>Copy 📋</span>}</span>
              </button>
            </div>
          </CopyToClipboard>
        )}
      </div>
    </>
  );
};

export default LinkShortener;
