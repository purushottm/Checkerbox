import React from "react";
import CheckerboardApp from "./features/checkerboard/components/CheckerBoardApp";

// todo : theme and globalstyles
const App: React.FC = () => {
  return (
    <div className="app">
      <CheckerboardApp />
    </div>
  );
};

export default App;
