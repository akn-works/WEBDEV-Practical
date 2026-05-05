function Child(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <p><b>Name:</b> {props.name}</p>
      <p><b>Age:</b> {props.age}</p>
    </div>
  );
}

export default Child;