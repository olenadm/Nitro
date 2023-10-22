import SubItem from "./SubItem";

export default function AccordionItem(props) {
  const { title, items, id } = props;

  function changeValuesHandler(formData) {
    props.onChangeValues(formData);
  }

  return (
    <div className="accordion-item mt-3">
      <h2 className="accordion-header" id={`heading${id}`}>
        <button
          className={
            id != 0 ? "accordion-button collapsed" : "accordion-button"
          }
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded={id === 0 ? "true" : "false"}
          aria-controls={`collapse${id}`}
        >
          {title}
        </button>
      </h2>

      <div
        id={`collapse${id}`}
        className={
          id === 0
            ? "show accordion-collapse collapse"
            : "accordion-collapse collapse"
        }
        aria-labelledby={`heading${id}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body pb-4 pt-0 pe-lg-4 acc">
          <ul className="list-group">
            {items.map((item) => (
              <SubItem item={item} key={item.id} onChangeValues={changeValuesHandler} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
