import "../styles/globals.css";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";

export const metadata = {
  title: "My Project - 1",
  description: "Discovering New Things",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Nav />   
        {/* <div className="main">
          <div className="gradient" />
        </div> */}
        <main className="app">{children}</main>
        {/* added something */}
      </body>
    </html>
  );
};

export default RootLayout;
