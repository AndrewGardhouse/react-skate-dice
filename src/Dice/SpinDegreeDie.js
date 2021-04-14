import Die from '../Die.js'
import OneEighty from './Faces/OneEighty.js';
import ThreeSixty from './Faces/ThreeSixty.js';
import SkateDice from './Faces/SkateDice.js';
import Wild from './Faces/Wild.js';

function SpinDegreeDie(props) {
  return(
    <Die
      sides={[Wild, SkateDice, OneEighty, ThreeSixty, OneEighty, ThreeSixty]}
      selectedSideIndex={props.selectedSideIndex}
      toggleRoll={props.toggleRoll}>
    </Die>
  )
}

export default SpinDegreeDie;
