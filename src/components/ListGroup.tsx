import { Fragment } from "react";

function ListGroup() {
  let items = ["Nairobi", "Kisumu", "Busia", "Thika", "Eldoret"];
  items = [];
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No cities Found</p> : null;
  //   };

  //   conditional Rendering
  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List</h1> <p>No items found</p>
  //       </>
  //     );

  return (
    <>
      <h1>List</h1>
      {
        /* {getMessage()} */
        //   items.length === 0 ? <p>No cities Found</p> : null
        items.length === 0 && <p>No cities Found</p>
      }
      <ul className="list-group">
        {
          /* {items.map((item) => {
          return <li>{item}</li>;
        })} */
          items.map((item) => (
            <li key={item}>{item}</li>
          ))
        }
      </ul>
    </>
  );
}

export default ListGroup;
