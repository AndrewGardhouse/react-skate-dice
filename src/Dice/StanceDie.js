import { useSelector } from 'react-redux'

import Die from '../Die.js'
import Switch from './Faces/Switch.js';
import Fakie from './Faces/Fakie.js';
import Regular from './Faces/Regular.js';
import Nollie from './Faces/Nollie.js';
import SkateDice from './Faces/SkateDice.js';
import Wild from './Faces/Wild.js';

function StanceDie(props) {
  const isEasyMode = useSelector((state) => {
    return state.isEasyMode
  });

  const regularModeDieFaces = [Wild, SkateDice, Switch, Regular, Fakie, Nollie];
  const easyModeDieFaces = [Wild, SkateDice, Regular, Regular, Fakie, Fakie];
  const sides = isEasyMode ? easyModeDieFaces : regularModeDieFaces;

  return(
    <Die
      sides={sides}
      selectedSideIndex={props.selectedSideIndex}
      toggleRoll={props.toggleRoll}>
    </Die>
  )
}

export default StanceDie;
