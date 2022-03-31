const Component = (props) => {
  return (
    <div>
      <ul>
        <li>Yoghantara</li>
        <li>Galang</li>
        <li>Ricky</li>
        <li>Krisdit</li>
      </ul>
      {props.children}
    </div>
  );
};

const Component2 = () => {
  return (
    <form>
      <input type="text" />
    </form>
  );
};

const Halo = (nama) => {
  return (
    <p>
      Halo <b>{nama.children}</b>
    </p>
  );
};

const Element = () => {
  return (
    <div>
      <p>Hello</p>
      <p>World</p>
      <p>Gustut</p>
      <Component>
        <Component2 />
      </Component>
      <Halo>Gustut</Halo>
      <Halo>Yoghantara</Halo>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Element />);
