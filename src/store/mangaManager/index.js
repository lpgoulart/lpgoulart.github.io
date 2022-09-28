import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const nameList = [
    "nano-machine",
    "a-returners-magic-should-be-special",
    "damn-reicarnation",
    "Omniscient-Readers-Viewpoint",
    "Overgeared",
    "Talent-Swallowing-Magician",
    "The-World-After-the-Fall",
    "The-Beginning-After-the-End",
    "The-Great-Mage-Returns-After-4000-Years",
    "The-Player-That-Cant-Level-Up",
    "Standard-of-Reincarnation",
    "Swordmasters-Youngest-Son",
    "Magic-Emperor",
    "Solo-Max-Level-Newbie",
    "Villain-to-Kill",
    "Black-Clover",
    "Record-of-Ragnarok",
    "FFF-Class-Trashero",
    "Skeleton-Soldier-Couldnt-Protect-the-Dungeon",
    "Hoarding-in-Hell",
    "Survival-Story-of-a-Sword-King-in-a-Fantasy-World",
    "Kimetsu-no-Yaiba",
    "Leveling-With-The-Gods",
    "The-Challenger",
    "The-Return-of-The-Disaster-Class-Hero",
    "SSS-Class-Suicide-Hunter",
    "One-Piece",
    "Dr-Stone",
    "Plunderer",
    "The-Dark-Magician-Transmigrates-After-66666-Years",
    "Solo-Leveling",
    "Hardcore-Leveling-Warrior",
    "Onepunch-Man",
    "Ragnarok-Into-the-Abyss",
]

const slice = createSlice({
  name: 'api',
  initialState: {
    
  },
  reducers: {
    fetchStarted(state) {
      
    },
    fetchSuccess(state, action) {
      
    },
    fetchError(state, action) {
      
    }
  },
});

export const {
  fetchStarted,
  fetchSuccess,
  fetchError,
} = slice.actions;

export const fetchData = () => (dispatch) => {
    dispatch(fetchStarted());
}


export default slice.reducer;
