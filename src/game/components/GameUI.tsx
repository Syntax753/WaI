import React from 'react';
import { GameState } from '../types/gameTypes';
import styles from './GameUI.module.css';

interface TurnCounterProps {
  turn: number;
}

export const TurnCounter: React.FC<TurnCounterProps> = ({ turn }) => {
  return (
    <div className={styles.turnCounter}>
      <span className={styles.turnLabel}>Turn:</span>
      <span className={styles.turnNumber}>{turn}</span>
    </div>
  );
};

interface HungerBarProps {
  peonName: string;
  hunger: number;
  maxHunger: number;
}

export const HungerBar: React.FC<HungerBarProps> = ({ peonName, hunger, maxHunger }) => {
  const hungerPercentage = (hunger / maxHunger) * 100;
  const hungerColor = hungerPercentage > 50 ? '#4CAF50' : hungerPercentage > 25 ? '#FFC107' : '#F44336';
  
  return (
    <div className={styles.hungerContainer}>
      <div className={styles.hungerLabel}>{peonName} Hunger</div>
      <div className={styles.hungerBar}>
        <div 
          className={styles.hungerFill}
          style={{ 
            width: `${hungerPercentage}%`, 
            backgroundColor: hungerColor 
          }}
        />
      </div>
      <div className={styles.hungerText}>{hunger}/{maxHunger}</div>
    </div>
  );
};

interface GameUIProps {
  gameState: GameState;
}

export const GameUI: React.FC<GameUIProps> = ({ gameState }) => {
  const alivePeons = gameState.peons.filter(peon => peon.isAlive);
  
  return (
    <div className={styles.gameUI}>
      <TurnCounter turn={gameState.turn} />
      <div className={styles.hungerBars}>
        {alivePeons.map(peon => (
          <HungerBar 
            key={peon.id}
            peonName={`Peon ${peon.id.split('-')[1]}`}
            hunger={peon.hunger}
            maxHunger={peon.maxHunger}
          />
        ))}
      </div>
      {!gameState.gameRunning && (
        <div className={styles.gameOver}>
          Game Over - All peons have perished!
        </div>
      )}
    </div>
  );
};

export default GameUI;