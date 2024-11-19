import Navbar from "./NavbarUser";

function Hero({ title, subtitle, children }) {
  return (
    <header>
      <Navbar />
      <div className="containerHeader">
        <h2>{title}</h2>
        <p>{subtitle}</p>

        {children}
      </div>
    </header>
  );
}

export default Hero;