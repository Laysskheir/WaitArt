import Footer from "@/components/footer";
// import BackTop from "@/components/main/back-top";

import Navbar from "@/components/header/nav-bar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div >
      <Navbar />
      {children}
      {/* <Footer /> */}
      {/* <BackTop /> */}
    </div>
  );
};

export default RootLayout;


