import React from "react";
import Link from "next/link";
import ArrowIcon from "../ui/ArrowIcon";

export default function StaticText() {
  return (
    <div>
      <h2>
        <span className="text-primary">Events</span> displayed in <br />{" "}
        Accordion
      </h2>
      <h4 className="text-danger my-4 fw-normal fadeIn">Functionality Spec:</h4>
      <ul className="fadeIn">
        <li>Load the static json list of events/posts</li>
        <li>
          Display posts on a tree view
          <span className="text-primary">(expandable accordion)</span>, where
          posts are grouped by{" "}
          <span className="fw-bold">posting week/time</span>.
        </li>
        <li>
          Clicking on each element, the user can see all details and a{" "}
          <span className="fw-bold">form</span> where{" "}
          <span className="fw-bold">location</span> and{" "}
          <span className="fw-bold">author</span> fields can be edited locally
          (in memory, no API call needed).
        </li>
        <li>
          User can change the grouping type of the list. So instead of having a
          tree grouped by weeks/time, it could group it by author or location.
        </li>
      </ul>

      <Link
        href="https://github.com/olenadm/Nitro/"
        className="btn btn-success mt-3  mb-4 fadeIn"
      >
        GitHub <ArrowIcon />
      </Link>
    </div>
  );
}
