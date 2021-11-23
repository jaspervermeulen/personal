import './index.css';

import Profile from './person.png';

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
        <p>Insights</p>
      </div>
    </div>
  );
}

export default App;
