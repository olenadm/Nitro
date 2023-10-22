import { getCategoryMap, getCategoryMapF } from "./api/hello";
import AccordionList from "@/components/AccordionList";
import { useState, useEffect } from "react";
import FilterButton from "@/components/ui/FilterButton";
import "core-js/actual/";

export default function Home(props) {
  const { treeItems } = props;
  const [filter, setFilter] = useState("author");

  const [treeItemsP, setTreeItemsP] = useState(treeItems);

  const FILTER_NAMES = ["author", "location", "time"];

  //if author and location values have been changed
  function changeValuesHandler(formData) {
    //need to ungroup posts forst
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
      <div className="col-sm-12">
        <div>{filterList}</div>
        <AccordionList
          treeItems={treeItemsP}
          onChangeValues={changeValuesHandler}
        />
      </div>
    </>
  );
}

export function getStaticProps() {
  const treeItems = getCategoryMap("time");

  return {
    props: {
      treeItems: treeItems,
    },
  };
}
