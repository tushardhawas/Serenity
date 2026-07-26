import MainBox from './component/body/Mainbox';
import LightRays from './component/effects/LightRays';
import '../src/App.css';

function App() {
  return (
    <div className="app-root dusk">
      <div className="theme-rays" aria-hidden="true">
        <LightRays
          raysOrigin="top-center"
          raysColor="#fdfdfd"
          raysSpeed={1.2}
          lightSpread={0.35}
          rayLength={4.5}
          followMouse={true}
          mouseInfluence={0.14}
          noiseAmount={0.03}
          distortion={0.08}
          pulsating={true}
          fadeDistance={1.4}
          saturation={0.98}
          className="custom-rays"
        />
      </div>
      <div className="head">
        <div className="hero">
          <h1>Serenity sounds</h1>
          <p>
            Thank you for giving your time and effort to this little place. This was my first
            website, and that makes it special to me. Listen to your heart, take your time, and
            let the sounds carry you.
          </p>
        </div>
      </div>
      <MainBox />
    </div>
  );
}

export default App;
