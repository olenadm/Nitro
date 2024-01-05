import { getCategoryMap, getCategoryMapF } from "./api/hello";
import AccordionList from "@/components/AccordionList";
import { useState, useEffect } from "react";
import FilterButton from "@/components/ui/FilterButton";
import "core-js/actual/";
import StaticText from "@/components/layout/StaticText";

export default function Home(props) {
  const { treeItems } = props;
  const [filter, setFilter] = useState("time");

  const [treeItemsP, setTreeItemsP] = useState(treeItems);

  const FILTER_NAMES = ["author", "location", "time"];

  //if author and location values have been changed
  //Send down the function as props to the child component.
  function changeValuesHandler(formData) {
    //need to ungroup posts first
    const flat = treeItemsP.flatMap(([x, a]) => a.map((o) => ({ ...o })));

    //update values from form input
    let new_array = flat.map((element) => {
      if (element.id == formData.id) {
        element.author = formData.author ? formData.author : element.author;
        element.location = formData.location
          ? formData.location
          : element.location;
      }
      return element;
    });

    //group items
    const regroupedArray = getCategoryMapF(new_array, filter);
    setTreeItemsP((old) => regroupedArray);
  }

  useEffect(() => {
    //ungroup tree items
    //returns a new array formed by applying a given callback fn to each element of the array,
    // and then flattening the result by one level.
    const flat = treeItemsP.flatMap(([x, a]) => a.map((o) => ({ ...o })));

    //regroup again based on selected filter
    const filtered = treeItemsP.length
      ? getCategoryMapF(flat, filter)
      : getCategoryMap(filter);

    setTreeItemsP((old) => filtered);
  }, [filter]);

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <>
      <div className="col-lg-4 static-text">
        <StaticText />
      </div>
      <div className="col-lg-8">
        <div className="card">
          <div className="card-body">
            <div>
              <p className="fs-6">Filter by: </p> {filterList}
            </div>
            <AccordionList
              treeItems={treeItemsP}
              // Send down the function as props to the child component.
              onChangeValues={changeValuesHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
}
//pre-render a page at build time
export function getStaticProps() {
  const treeItems = getCategoryMap("time");

  return {
    props: {
      treeItems: treeItems,
    },
  };
}
