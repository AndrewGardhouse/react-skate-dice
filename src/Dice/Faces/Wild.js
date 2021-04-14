import './Wild.css'

function Wild() {
  return (
    <div className="Die__face Die__face--wild">
      <div className="board board--top">
        <div className="board__bolts board__bolts--left">
          <div className="board__bolt"></div>
          <div className="board__bolt"></div>
          <div className="board__bolt"></div>
          <div className="board__bolt"></div>
        </div>
        <div className="board__bolts board__bolts--right">
          <div className="board__bolt"></div>
          <div className="board__bolt"></div>
          <div className="board__bolt"></div>
          <div className="board__bolt"></div>
        </div>
      </div>
      <div className="board board--bottom">
        <div className="board__bolts board__bolts--left">
          <div className="board__bolt"></div>
          <div className="board__bolt"></div>
          <div className="board__bolt"></div>
          <div className="board__bolt"></div>
        </div>
        <div className="board__bolts board__bolts--right">
          <div className="board__bolt"></div>
          <div className="board__bolt"></div>
          <div className="board__bolt"></div>
          <div className="board__bolt"></div>
        </div>
      </div>
    </div>
  )
}

export default Wild;
