import "./App.css";
import { useCallback } from "react";

function App() {
  const playSound = useCallback((dessertType) => {
    const soundMap = {
      "Chocolate Lava Cake":
        "/parth-secret-santa/assets/sound/chocolate-lava-cake.m4a",
      "Sticky Toffee Pudding":
        "/parth-secret-santa/assets/sound/stickt-toffee-pudding.mp3",
      Tiramisu: "/parth-secret-santa/assets/sound/tiramisu.m4a",
    };

    const soundFile = soundMap[dessertType];
    if (soundFile) {
      const audio = new Audio(soundFile);
      audio.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
    }
  }, []);

  const handleDessertClick = useCallback(
    (event) => {
      const altText = event.currentTarget.querySelector("img").alt;
      playSound(altText);
    },
    [playSound]
  );

  return (
    <div className="App">
      <header className="app-header">
        <h1>Merry Christmas Ya Filthy Animal</h1>
      </header>
      <div className="layout-container">
        <div className="person">
          <img
            src="/parth-secret-santa/assets/images/parth-ai-eating-food.png"
            alt="Parth AI eating food"
            style={{ borderRadius: "24px" }}
          />
        </div>
        <p className="click-to-play">Click to Play (Volume Up)</p>
        <div className="row">
          <div className="dessert" onClick={handleDessertClick}>
            <img
              src="/parth-secret-santa/assets/images/parth-ai-lava-cake.png"
              alt="Chocolate Lava Cake"
            />
          </div>
          <div className="dessert" onClick={handleDessertClick}>
            <img
              src="/parth-secret-santa/assets/images/parth-ai-sticky-toffee-pudding.png"
              alt="Sticky Toffee Pudding"
            />
          </div>
          <div className="dessert" onClick={handleDessertClick}>
            <img
              src="/parth-secret-santa/assets/images/parth-ai-tiramisu.png"
              alt="Tiramisu"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
