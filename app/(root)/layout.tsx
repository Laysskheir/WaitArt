import Navbar from "@/components/header/nav-bar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      {children}
      {/* <Footer /> */}
      {/* <BackTop /> */}
    </div>
  );
};

export default RootLayout;

{
  /* <div className="absolute bottom-0 left-0 right-0 top-0 dark:bg-[radial-gradient(circle_390px_at_50%_350px,#3e3e3e,transparent)]"></div> */
}
