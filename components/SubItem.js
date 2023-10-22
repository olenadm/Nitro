import DateIcon from "./ui/DateIcon";
import EditIcon from "./ui/EditIcon";
import LocationIcon from "./ui/LocationIcon";

export default function SubItem(props) {
  const { item } = props;

  function humanDate(time) {
    const dateObj = new Date(time * 1000).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    return dateObj;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formDataSubmitted = new FormData(form);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formDataSubmitted.entries());
    //add form data to props
    props.onChangeValues(formJson);
  }

  return (
    <li key={item.id} className="list-group-item">
      <h3 className="title">{item.text}</h3>
      <span className="ms-2">
        <span>
          <DateIcon />
          on {humanDate(item.time)}{" "}
        </span>
      </span>

      <div
        className="meta-data ms-lg-3 text-muted small d-flex align-items-center justify-content-between
     border-rounded  mt-2"
      >
        <div className="w-50">
          <LocationIcon />
          {item.location}
        </div>
        <div>
          <span> {item.author}</span>{" "}
          <button
            type="button"
            className="btn m-0 px-0 pt-0 border-0"
            data-bs-toggle="collapse"
            data-bs-target={`#editTemplate${item.id}`}
            aria-expanded="false"
            aria-controls={`editTemplate${item.id}`}
          >
            <EditIcon />
            <span className="visually-hidden">Edit</span>
          </button>
        </div>
      </div>

      <div
        className="collapse ms-lg-3 editTemplate mt-2"
        id={`editTemplate${item.id}`}
      >
        <div className="card card-body">
          <form
            className="row gx-3 gy-2 align-items-center "
            onSubmit={handleSubmit}
          >
            <div className="col-sm-5">
              <input type="hidden" value={item.id} name="id" />
              <input
                name="author"
                id={`author${item.id}`}
                type="text"
                className="form-control"
                placeholder="Change author"
              />
            </div>
            <div className="col-sm-5">
              <input
                name="location"
                id={`location${item.id}`}
                type="text"
                className="form-control"
                placeholder="Change location"
              />
            </div>
            <div className="col-sm-2">
              <input type="submit" value="OK" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </li>
  );
}
