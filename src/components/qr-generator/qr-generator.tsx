import { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import Navbar from '../navbar/navbar';
import './qr-generator.scss';

const QRGenerator = () => {
  const [link, setLink] = useState('');
  const qrCodeRef = useRef(null);

  const handleSaveImage = () => {
    const canvas = qrCodeRef.current.querySelector('canvas');
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'qrcode.png';
    link.click();
  };

  return (
    <>
      <Navbar />
      <div className="qr-generator-container">
        <h2>QR Generator</h2>
        <input
          autoComplete="off"
          type="text"
          name="link"
          className="qr-generator-input"
          onChange={(e) => setLink(e.target.value)}
        />
        <div ref={qrCodeRef} className="qr-generator-qrcode">
          <QRCodeCanvas value={link} size={300} />
        </div>
        <button className="qr-generator-button" onClick={handleSaveImage}>
          Save Image
        </button>
      </div>
    </>
  );
};

export default QRGenerator;
