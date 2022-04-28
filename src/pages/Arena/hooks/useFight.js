import { controls } from "../../../constants/controls";
import { useKeyPress } from "../../../hooks/useKeyPress";
import { useArena } from "./useArena";
import { useEffect, useState } from 'react'

const getDamage = (attacker, defender) => {
  // return damage
  let damage = getHitPower(attacker) - getBlockPower(defender)
  return damage > 0 ? damage : 0
};

const getHitPower = (fighter) => {
  // return hit power
  let hitPower = fighter.attack * (Math.random() + 1)
  return hitPower
};

const getBlockPower = (fighter) => {
  // return block power
  let blockPower = fighter.damage * (Math.random() + 1)
  return blockPower
};

export const useFight = () => {
  const { selectedPair } = useArena();
  const [winner, setWinner] = useState({attack:'', avatar:'', defense:'', health:'', id:'', name:'', source:''})
  // const [fighterOneDetails, setFighterOneDetails] = useState(selectedPair.playerOne)
  // const [fighterTwoDetails, setFighterTwoDetails] = useState(selectedPair.playerTwo)
  const { keyPressed } = useKeyPress();
  const {
    playerOneAttack,
    playerOneBlock,
    playerTwoAttack,
    playerTwoBlock,
    playerOneCriticalHitCombination,
    playerTwoCriticalHitCombination
  } = controls;

  let fighterOneDetails = selectedPair.playerOne
  let fighterTwoDetails = selectedPair.playerTwo

  

  
 
  
  useEffect(() => {
    
      // if(fighterOneDetails.health <= 0){
        setWinner(prevState => ({...prevState, ...fighterTwoDetails}))
        
      // }else if(fighterTwoDetails.health <= 0){
      //   setWinner(prevState => ({...prevState, ...fighterOneDetails}))
        
      // }

      // if(keyPressed.playerOneAttack){
      //   if(keyPressed.playerTwoBlock){
      //       fighterTwoDetails.health -= getDamage(fighterOneDetails, fighterTwoDetails)
      //   }else{
      //       fighterTwoDetails.health -= getHitPower(fighterOneDetails)
      //     }
  
      //   }
      
      // fighterOneDetails.health <0 ? setWinner(fighterTwoDetails) : setWinner(null)
    }
      

  ,[keyPressed])
  


  
  // implement fight logic, return fighters details and winner details
  
 

  return {
    fighterOneDetails,
    fighterTwoDetails,
    winner
  };
};
