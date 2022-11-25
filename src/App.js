import "./App.sass";

import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState({ hourangle: 0, minangle: 0 });

  let updateClock = () => {
    let now = new Date(),
      sec = now.getSeconds(),
      min = now.getMinutes() + sec / 60,
      hour = (now.getHours() % 12) + min / 60,
      hourangle = hour * 30,
      minangle = min * 6;
      setTime({ hourangle: hourangle, minangle: minangle });
  };

  useEffect(() => {
    setTimeout(updateClock, 10000);
  }, [time]);

  return (
    <div className="App">
      <svg className="clock" viewBox="0 0 100 100" width="250" height="250">
        <circle className="face" cx="50" cy="50" r="45" />
        <g className="ticks">
          <line x1="50" y1="5" x2="50" y2="10" />
          <line x1="72.5" y1="11.03" x2="70" y2="15.36" />
          <line x1="88.97" y1="27.5" x2="84.64" y2="30" />
          <line x1="95" y1="50" x2="90" y2="50" />
          <line x1="88.97" y1="72.5" x2="84.64" y2="70" />
          <line x1="72.5" y1="88.97" x2="70" y2="84.64" />
          <line x1="50" y1="95" x2="50" y2="90" />
          <line x1="27.5" y1="88.97" x2="30" y2="84.64" />
          <line x1="11.03" y1="72.5" x2="15.36" y2="70" />
          <line x1="5" y1="50" x2="10" y2="50" />
          <line x1="11.03" y1="27.5" x2="15.36" y2="30" />
          <line x1="27.5" y1="11.03" x2="30" y2="15.36" />
        </g>
        <g className="numbers">
          <text x="50" y="18">
            12
          </text>
          <text x="85" y="53">
            3
          </text>
          <text x="50" y="88">
            6
          </text>
          <text x="15" y="53">
            9
          </text>
        </g>
        <g className="hands">
          <line
            className="hourhand"
            style={{
              transformOrigin: "center",
              transform: `rotate(${time.hourangle}deg)`,
            }}
            x1="50"
            y1="50"
            x2="50"
            y2="25"
          />
          <line
            className="minutehand"
            style={{
              transformOrigin: "center",
              transform: `rotate(${time.minangle}deg)`,
            }}
            x1="50"
            y1="50"
            x2="50"
            y2="20"
          />
        </g>
      </svg>
    </div>
  );
}

export default App;
