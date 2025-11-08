import React from 'react';
import { GameState, GRID_SIZE, TILE_SIZE } from '../types/gameTypes';
import { GrasslandSprite } from '../sprites/GrasslandSprite';
import { PeonSprite } from '../sprites/PeonSprite';
import styles from './GameGrid.module.css';

interface GameGridProps {
  gameState: GameState;
}

export const GameGrid: React.FC<GameGridProps> = ({ gameState }) => {
  const renderTile = (x: number, y: number) => {
    const tile = gameState.world[y][x];
    const peonAtPosition = gameState.peons.find(peon => 
      peon.position.x === x && peon.position.y === y && peon.isAlive
    );

    return (
      <div
        key={`${x}-${y}`}
        className={styles.tile}
        style={{
          width: TILE_SIZE,
          height: TILE_SIZE,
          position: 'relative'
        }}
      >
        {/* Render tile background */}
        <div className={styles.tileBackground}>
          <GrasslandSprite size={TILE_SIZE} />
        </div>
        
        {/* Render peon if present */}
        {peonAtPosition && (
          <div className={styles.peonOverlay}>
            <PeonSprite size={24} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={styles.gameGrid}>
      {Array.from({ length: GRID_SIZE }, (_, y) =>
        Array.from({ length: GRID_SIZE }, (_, x) => renderTile(x, y))
      ).flat()}
    </div>
  );
};

export default GameGrid;