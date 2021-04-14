import Die from '../Die.js'
import Switch from './Faces/Switch.js';
import Fakie from './Faces/Fakie.js';
import Regular from './Faces/Regular.js';
import Nollie from './Faces/Nollie.js';
import SkateDice from './Faces/SkateDice.js';
import Wild from './Faces/Wild.js';

function StanceDie(props) {
  return(
    <Die
      sides={[Wild, SkateDice, Switch, Regular, Fakie, Nollie]}
      selectedSideIndex={props.selectedSideIndex}
      toggleRoll={props.toggleRoll}>
    </Die>
  )
}

export default StanceDie;
