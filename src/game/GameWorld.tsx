import React, { useState, useEffect } from 'react';
import { GameState } from './types/gameTypes';
import { createInitialGameState, processGameTurn } from './logic/gameLogic';
import GameGrid from './components/GameGrid';
import GameUI from './components/GameUI';
import styles from './GameWorld.module.css';

const GAME_LOOP_INTERVAL = 1000; // 1 second per turn

export const GameWorld: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(createInitialGameState);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setGameState(currentState => {
        if (!currentState.gameRunning) {
          return currentState;
        }
        return processGameTurn(currentState);
      });
    }, GAME_LOOP_INTERVAL);

    return () => clearInterval(gameLoop);
  }, []);

  const handleRestart = () => {
    setGameState(createInitialGameState());
  };

  return (
    <div className={styles.gameContainer}>
      <GameUI gameState={gameState} />
      <div className={styles.gameWorld}>
        <GameGrid gameState={gameState} />
      </div>
      {!gameState.gameRunning && (
        <div className={styles.gameOverOverlay}>
          <div className={styles.gameOverContent}>
            <h2>Game Over</h2>
            <p>All peons have perished from hunger!</p>
            <p>Survived {gameState.turn - 1} turns</p>
            <button onClick={handleRestart} className={styles.restartButton}>
              Restart Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameWorld;