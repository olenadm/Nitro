import { getAllData, getCategoryMap, getCategoryMapF } from "./api/hello";
import AccordionList from "@/components/AccordionList";
import { useState, useEffect } from "react";
import FilterButton from "@/components/ui/FilterButton";
import "core-js/actual/";


export default function Home(props) {
  const { treeItems } = props;
  const [filter, setFilter] = useState("author");

  const [treeItemsP, setTreeItemsP] = useState([]);

  const FILTER_NAMES = ["author", "location", "time"];

  function addCommentHandler(commentData) {
    const allData = getAllData();


    console.log("Id of element " + commentData.id);
    console.log(treeItemsP);

    const flat = treeItemsP.flatMap(([x, a])=> a.map(o=> ({ ...o})) )


    let new_array = flat.map((element) =>
      element.id == commentData.id
        ? { ...element, author: `${commentData.author}` }
        : element
    );

 
   

    const regroupedArray = getCategoryMapF(new_array, filter)
    console.log("New array "+JSON.stringify(regroupedArray));

    setTreeItemsP((old) => regroupedArray);
  }

  // let treeItemsP;

  useEffect(() => {
    console.log("UseEffect")
    console.log(treeItemsP)
    const flat = treeItemsP.flatMap(([x, a])=> a.map(o=> ({ ...o})) )

    const filtered = treeItemsP.length ? getCategoryMapF(flat, filter) : getCategoryMap(filter);

    console.log(getCategoryMapF(flat, filter))

    setTreeItemsP((old) => filtered);
    console.log("UseEffectAFTER")
    console.log(treeItemsP)
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
          treeItems={treeItemsP ? treeItemsP : treeItems}
          onAddComment={addCommentHandler}
        />
      </div>
    </>
  );
}

export function getStaticProps() {
  const treeItems = getCategoryMap("author");

  return {
    props: {
      treeItems: treeItems,
    },
  };
}
