export interface Position {
  x: number;
  y: number;
}

export interface Peon {
  id: string;
  position: Position;
  hunger: number;
  maxHunger: number;
  isAlive: boolean;
  sprite: string;
}

export interface Tile {
  type: 'grassland' | 'water' | 'mountain' | 'forest';
  sprite: string;
  position: Position;
}

export interface GameState {
  turn: number;
  peons: Peon[];
  world: Tile[][];
  gameRunning: boolean;
}

export const GRID_SIZE = 9;
export const TILE_SIZE = 32;
export const SPRITE_SIZE = 24;
export const HUNGER_DEPLETION_RATE = 1; // Hunger decreases by 1 each turn
export const MAX_HUNGER = 100;