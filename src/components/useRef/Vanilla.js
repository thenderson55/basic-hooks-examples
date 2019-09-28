import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

function Tilt({ children }) {
  const tiltRef = useRef();

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5
    });
    return () => tiltRef.current.vanillaTilt.destroy()
  }, []);

  return (
    <div
      ref={tiltRef}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 200,
        width: 200,
        backgroundColor: "pink"
      }}
    >
      <div style={{ height: 50, width: 50, backgroundColor: "green" }}>
        {children}
      </div>
    </div>
  );
}

function Vanilla() {
  return (
    <div>
      <Tilt>
        <div className="totally-centered">vanilla-tilt.js</div>
      </Tilt>
    </div>
  );
}

export default Vanilla;
