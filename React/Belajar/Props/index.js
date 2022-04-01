const Hello = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
    </div>
  );
};

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Date Format
function formatDate(date) {
  return date.toLocaleDateString();
}

// Data
const commentData = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "http://placekitten.com/g/64/64",
  },
};

// Extracting Components
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Hello name="Sara" />
      <Hello name="Ganyu" />
      <Hello name="Hu Tao" />
      <Welcome name="Raiden" />
      <Comment
        date={commentData.date}
        text={commentData.text}
        author={commentData.author}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
