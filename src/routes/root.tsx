import { createBrowserRouter } from 'react-router-dom';
import QRGenerator from '../components/qr-generator/qr-generator';
import LinkShortener from '../components/link-shortener/link-shortener';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <QRGenerator />,
  },
  {
    path: '/link-shortener',
    element: <LinkShortener />,
  },
]);
