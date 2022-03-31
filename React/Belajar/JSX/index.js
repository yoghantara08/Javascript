const Element = () => {
  return (
    <ul>
      <li>Apel</li>
      <li>Tomat</li>
      <li>Coklat</li>
      <li>Jeruk</li>
    </ul>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Element />);
