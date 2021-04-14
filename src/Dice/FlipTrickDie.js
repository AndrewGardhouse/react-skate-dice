import Die from '../Die.js'
import Heelflip from './Faces/Heelflip.js';
import Kickflip from './Faces/Kickflip.js';
import SkateDice from './Faces/SkateDice.js';
import Wild from './Faces/Wild.js';

function FlipTrickDie(props) {
  return(
    <Die
      sides={[Wild, SkateDice, Kickflip, Heelflip, Kickflip, Heelflip]}
      selectedSideIndex={props.selectedSideIndex}
      toggleRoll={ props.toggleRoll }>
    </Die>
  )
}

export default FlipTrickDie;
