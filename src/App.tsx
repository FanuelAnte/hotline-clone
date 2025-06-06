import "./App.css";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-black flex items-center justify-center">
        <div className="w-full h-full md:w-[960px] md:h-[540px] p-1 md:p-3">
          <div className="flex flex-col w-full h-full border-2 rounded-xl md:border-golden-yellow bg-gradient-to-r from-light-blue-edge via-light-blue-center to-light-blue-edge">
            <div className="flex w-full h-full items-center p-2">
              <div className="flex flex-col items-center border-1 border-blue-200/35 justify-between bg-dark-blue w-full h-[188px] md:h-1/2 rounded-xl inset-shadow-2xs">
                <img src="src/assets/hotline-arrow.svg" alt="arrow1" />
                <img src="src/assets/cards.png" alt="Cards" />
                <img
                  src="src/assets/hotline-arrow.svg"
                  alt="arrow2"
                  className="rotate-180"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
