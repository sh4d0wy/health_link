import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import UserProvider from '@/app/_Context/UserProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HealthLink"
};

export default  function RootLayout({ children}) {

  return (
    <ClerkProvider >
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
        {children}
        </UserProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}
