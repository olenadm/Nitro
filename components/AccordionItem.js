export default function AccordionItem(props) {
  const { title, items, id } = props;

  function humanDate(time){
    const formattedDate = new Date("1552657573");
   
  
    
    /*const formattedDate = new Date(time).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });*/
    console.log("DATE")
    console.log(formattedDate)

  }

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formDataSubmitted = new FormData(form);
    
    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formDataSubmitted.entries());
    props.onAddComment(formJson)

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
              
              <li key={item.id} className="list-group-item">
                <h3 className="title">{item.text}</h3>
                <span className="ms-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="icon-sml me-1 mb-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      />
                    </svg>
                    on {humanDate(item.time)}{" "}
                  </span>
                </span>

                <div
                  className="meta-data ms-3 text-muted small d-flex align-items-center justify-content-between
                 border-rounded w-50 mt-2"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="icon-sml me-2 mb-1 text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>

                    {item.location}
                  </div>
                  <div>
                    <span>Author: {item.author}</span>{" "}
                    <button
                      type="button"
                      className="btn m-0 px-0 pt-0 border-0"
                      data-bs-toggle="collapse"
                      data-bs-target={`#editTemplate${item.id}`}
                      aria-expanded="false"
                      aria-controls={`editTemplate${item.id}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="icon-sml"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                      <span className="visually-hidden">Edit</span>
                    </button>
                  </div>
                </div>

                <div
                  className="collapse ms-3 w-50 mt-2"
                  id={`editTemplate${item.id}`}
                >
                  <div className="card card-body">
                    <form
                      className="row gx-3 gy-2 align-items-center "
                      onSubmit={handleSubmit}
                    >
                      <div className="col-sm-5">
                        <input type="hidden" value={item.id} name="id"  />
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
                        <input
                          type="submit"
                          value="OK"
                          className="btn btn-primary"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
