
import Skeleton from "./components/Skeleton.js";

// three H1 with sub details of each H1 topics
export default function App() {
  return (
    <div className="App">
      <center>
      <h1>
        <u>
          <b>TYPES OF MUSCLES </b>
        </u>
      </h1>
      <n></n>
      <Skeleton />
      <h1>Smooth</h1>
      <img
        src="https://cdn.britannica.com/42/54242-050-62E68980/Cross-section-heart.jpg"
        width="300"
        height="200"
      ></img>
      <p>
        Smooth muscles are involuntary, non-striated muscles found in internal
        organs like the stomach and blood vessels. They control automatic
        functions such as digestion and blood flow through slow, sustained
        contractions. Lacking the striped appearance of skeletal muscles, they
        operate under autonomic nervous system control. Their flexibility and
        elasticity support organ function and maintain bodily processes.
      </p>
      <h1>Cardiac</h1>
      <img src="https://www.shutterstock.com/image-vector/smooth-muscle-cell-vector-anatomy-260nw-502665997.jpg"></img>
      <p>
        Cardiac muscles are involuntary, striated muscles found only in the
        heart, driving its rhythmic contractions. They form a branched network,
        connected by intercalated discs, ensuring synchronized pumping.
        Operating under autonomic control, they contract tirelessly to circulate
        blood. Their unique structure supports endurance and prevents fatigue
        throughout life.
      </p>
      </center>
    </div>
  );
}
