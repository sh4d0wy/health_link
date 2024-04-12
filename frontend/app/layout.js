import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import UserProvider from '../app/_Context/UserProvider';



export const metadata = {
  title: "HealthLink"
};

export default  function RootLayout({ children}) {

  return (
    <ClerkProvider >
    <html lang="en">
      <body>
        <UserProvider>
        {children}
        </UserProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}
