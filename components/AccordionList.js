import AccordionItem from "./AccordionItem";

export default function AccordionList(props) {
  const { treeItems } = props;

  function addCommentHandler(commentData) {
    console.log(`AL ${commentData.author}`);
    props.onAddComment(commentData);
  }

  return (
    <div className="accordion" id="accordionExample">
      {treeItems.map((item, key) => (
        <AccordionItem
          key={key}
          id={key}
          title={item[0]}
          items={item[1]}
          onAddComment={addCommentHandler}
          
        />
      ))}
    </div>
  );
}
