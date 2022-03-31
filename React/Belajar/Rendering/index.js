const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
  const Element = () => {
    return (
      <div>
        <h1>Jam Sekarang</h1>
        <h2>{new Date().toLocaleTimeString()}</h2>
      </div>
    );
  };

  root.render(<Element />);
}

setInterval(tick, 1000);
