const nama = "Gustut";
const Element = () => {
  return (
    <div>
      <ul>
        <li className="heading-1">{nama}</li>
        <li>Tomat</li>
        <li>Coklat</li>
        <li>Jeruk</li>
      </ul>
      <img
        src="https://images.unsplash.com/photo-1648688356431-00e58d0149fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80"
        alt=""
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Element />);
