import Die from '../Die.js'
import Backside from './Faces/Backside.js';
import Frontside from './Faces/Frontside.js';
import SkateDice from './Faces/SkateDice.js';
import Wild from './Faces/Wild.js';

function DirectionDie(props) {
  return(
    <Die
      sides={[Wild, SkateDice, Frontside, Backside, Frontside, Backside]}
      selectedSideIndex={props.selectedSideIndex}
      toggleRoll={props.toggleRoll}>
    </Die>
  )
}

export default DirectionDie;
