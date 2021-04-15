import { useSelector } from 'react-redux'

import Die from '../Die.js'
import OneEighty from './Faces/OneEighty.js';
import ThreeSixty from './Faces/ThreeSixty.js';
import SkateDice from './Faces/SkateDice.js';
import Wild from './Faces/Wild.js';

function SpinDegreeDie(props) {
  const isEasyMode = useSelector((state) => {
    return state.isEasyMode
  });

  const regularModeDieFaces = [Wild, SkateDice, OneEighty, ThreeSixty, OneEighty, ThreeSixty];
  const easyModeDieFaces = [Wild, SkateDice, OneEighty, OneEighty, OneEighty, SkateDice];
  const sides = isEasyMode ? easyModeDieFaces : regularModeDieFaces;

  return(
    <Die
      sides={sides}
      selectedSideIndex={props.selectedSideIndex}
      toggleRoll={props.toggleRoll}>
    </Die>
  )
}

export default SpinDegreeDie;
