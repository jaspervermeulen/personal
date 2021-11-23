import './index.css';

import Profile from './person.png';
import TuinenVermeulen from './assets/tuinenvermeulen.png';

function App() {
  return (
    <div className="flex justify-center mt-32 px-4">
      <div className="max-w-screen-sm">
        <img src={Profile} alt="Jasper Vermeulen Profile" width="70" />
        <p className="pt-8 pb-2 font-semibold">Jasper Vermeulen</p>
        <p className="pb-8">
          <span className="font-serif">Digital designer and developer. </span>
          Building and designing mobile and web experiences. Thinking about
          UX/UI, JavaScript frameworks, UI frameworks and so on. JavaScript
          developer at Wheelhouse working on a variety of projects across
          Belgium.
        </p>

        <p>Selected Work</p>
        <div className="pt-2 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <img
            className="rounded transform"
            src={TuinenVermeulen}
            alt="Tuinen Vermeulen"
          />
          <img
            className="rounded"
            src={TuinenVermeulen}
            alt="Tuinen Vermeulen"
          />
          <img
            className="rounded"
            src={TuinenVermeulen}
            alt="Tuinen Vermeulen"
          />
          <img
            className="rounded"
            src={TuinenVermeulen}
            alt="Tuinen Vermeulen"
          />
        </div>
        <p>Insights</p>
      </div>
    </div>
  );
}

export default App;
