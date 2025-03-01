function Message() {
  const name = "";
  if (name) {
    return (
      <div>
        <p>Hello, I'm {name}</p>
      </div>
    );
  } else {
    return <h3>Hello, World!</h3>;
  }
}

export default Message;
