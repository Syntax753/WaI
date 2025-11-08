import { GameState, Peon, Tile, Position, GRID_SIZE, MAX_HUNGER, HUNGER_DEPLETION_RATE } from '../types/gameTypes';

export const createInitialWorld = (): Tile[][] => {
  const world: Tile[][] = [];
  
  for (let y = 0; y < GRID_SIZE; y++) {
    const row: Tile[] = [];
    for (let x = 0; x < GRID_SIZE; x++) {
      row.push({
        type: 'grassland',
        sprite: 'grassland',
        position: { x, y }
      });
    }
    world.push(row);
  }
  
  return world;
};

export const createInitialPeon = (): Peon => {
  const centerPosition = Math.floor(GRID_SIZE / 2);
  
  return {
    id: 'peon-1',
    position: { x: centerPosition, y: centerPosition },
    hunger: MAX_HUNGER,
    maxHunger: MAX_HUNGER,
    isAlive: true,
    sprite: 'peon'
  };
};

export const createInitialGameState = (): GameState => {
  return {
    turn: 1,
    peons: [createInitialPeon()],
    world: createInitialWorld(),
    gameRunning: true
  };
};

export const updatePeonHunger = (peon: Peon): Peon => {
  const newHunger = Math.max(0, peon.hunger - HUNGER_DEPLETION_RATE);
  
  return {
    ...peon,
    hunger: newHunger,
    isAlive: newHunger > 0
  };
};

export const processGameTurn = (gameState: GameState): GameState => {
  const updatedPeons = gameState.peons.map(peon => updatePeonHunger(peon));
  
  return {
    ...gameState,
    turn: gameState.turn + 1,
    peons: updatedPeons,
    gameRunning: updatedPeons.some(peon => peon.isAlive)
  };
};

export const getTileAtPosition = (world: Tile[][], position: Position): Tile | null => {
  if (position.x < 0 || position.x >= GRID_SIZE || position.y < 0 || position.y >= GRID_SIZE) {
    return null;
  }
  return world[position.y][position.x];
};