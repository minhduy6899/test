import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import RootNabar from '@/components/layouts/RootNabar';
import StoreProvider from '@/store/StoreProvider';
import { Box } from '@mui/material';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Phần mềm cho thuê bối cảnh',
  description:
    'Từ các bộ ảnh thời trang, sản phẩm, đến các video quảng cáo, quay MV, và cả các phiên live cho event, mega hay daily live, chúng tôi đều tạo nên những bối cảnh ...',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='flex justify-center'>
        <StoreProvider>
          <Box>
            <RootNabar />
            {children}
          </Box>
        </StoreProvider>
      </body>
    </html>
  );
}

// style for body when zoom element, the content stay center