import './Die.css'

function Die(props) {
  const Face = props.sides[props.selectedSideIndex];
  
  return (
    <div
      className={`Die${props.toggleRoll ? ' Die--roll' : ''}`}>
      <Face />
    </div>
  )
}

export default Die;
