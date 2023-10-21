export default function FilterButton(props) {
  const { name, isPressed, setFilter} = props;
  function changeFilter(name) {
    setFilter(name);
    console.log(name);
  }
  return (
    <button
      type="button"
      className="btn btn-primary btn-lg me-2"
      aria-pressed={isPressed}
      onClick={() => changeFilter(name)}
    >
      {name}
    </button>
  );
}
