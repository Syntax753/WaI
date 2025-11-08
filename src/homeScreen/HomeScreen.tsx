import React from "react";
import GameWorld from '@/game/GameWorld';
import styles from './HomeScreen.module.css';
import TopBar from '@/components/topBar/TopBar';

function HomeScreen() {
  return (
    <div className={styles.container}>
      <TopBar />
      <div className={styles.gameContent}>
        <GameWorld />
      </div>
    </div>
  );
}

export default HomeScreen;