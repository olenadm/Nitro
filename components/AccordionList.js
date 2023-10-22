import AccordionItem from "./AccordionItem";

export default function AccordionList(props) {
  const { treeItems } = props;

  function changeValuesHandler(formData) {
    props.onChangeValues(formData);
  }

  return (
    <div className="accordion" id="accordionExample">
      {treeItems.map((item, key) => (
        <AccordionItem
          key={key}
          id={key}
          title={item[0]}
          items={item[1]}
          onChangeValues={changeValuesHandler}
          
        />
      ))}
    </div>
  );
}
