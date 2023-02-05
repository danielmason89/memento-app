import { useEffect } from "react";

function Header({ handleNewGame, wins }) {
  useEffect(() => {
    document.title = `${wins} wins`;
  }, [wins]);

  return (
    <header className="header">
      <h4>{wins} wins</h4>
      <h3>Memento Game</h3>
      <button onClick={handleNewGame}>New Game</button>
    </header>
  );
}

export default Header;
