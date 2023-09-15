import { Logo } from "./components/Logo";
import backgroundImage from "./assets/photo-couch.jpg";
import StepsDisplay from "./components/StepsDisplay";

function App() {
  return (
    <>
      <nav style={{ backgroundColor: "#222222" }}>
        <div className="container">
          <div className="logo" style={{ maxWidth: "18rem" }}>
            <a href="/">
              <Logo title="Endless Logo" fill="#50e3c2" />
            </a>
          </div>
        </div>
      </nav>

      <section
        className="hero"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div
            className="hero-content"
            style={{ textAlign: "left", color: "white", maxWidth: "40rem" }}
          >
            <h1>New Games & Accessories</h1>
            <h2>
              Monthly packages.
              <br />
              Excitement delivered daily.
            </h2>
            <p>
              What's the best way to shop for the latest video games and
              peripherals? How about never shopping at all? You'll get new stuff
              on your doorstep — every month.
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </section>

      <StepsDisplay />
    </>
  );
}

export default App;
