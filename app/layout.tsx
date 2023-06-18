import DisplayPicture from './components/DisplayPicture';
import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Sae',
  description: 'Created by Shreyas Nidugala',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className='dark:bg-slate-800
      '
      >
        <Navbar />
        <DisplayPicture />
        {children}
      </body>
    </html>
  );
}
