import React, { useState } from "react";
import "./css/todo.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import Footer from "./footer";
import Items from "./items";

const InitialValue = [
  {
    content: "Complete online Javascript course",
    completed: true,
  },
  {
    content: "Jog around the park 3x",
    completed: false,
  },
  {
    content: "10 minutes meditaion",
    completed: false,
  },
  {
    content: "Read for 1 hour",
    completed: false,
  },
  {
    content: "Pick up groceries",
    completed: false,
  },
  {
    content: "Complete Todo App on Frontend Mentor",
    completed: false,
  },
];

const Todo = (props) => {
  const [filter, setFilter] = useState("default");
  const [item, setItem] = useState(InitialValue);
  const [copyItem, setCopyItem] = useState(InitialValue);
  const [object, setObject] = useState({
    content: "",
    completed: false,
  });

  const initialItemIndexHandle = () => {
    setItem([...copyItem]);
  };

  // GET THE SUBMIT DADA TO ITEMLIST
  const submitInputHandle = (e) => {
    e.preventDefault();
    setItem((item) => [object, ...item]);
    setCopyItem((copyItem) => [object, ...copyItem]);
    setObject({ content: "" });
  };

  // CONTROL INPUT DATA
  const inputHandle = (e) => {
    setObject({ content: e.target.value, completed: false });
  };

  // DELETE ITEM OR CLEAR ALL COMPLETED ITEM
  const deleteItem = (e) => {
    setItem(
      item.filter(
        (element, index) => index !== JSON.parse(e.target.getAttribute("title"))
      )
    );
    setCopyItem(
      item.filter(
        (element, index) => index !== JSON.parse(e.target.getAttribute("title"))
      )
    );
  };

  const clearCompletedItem = (e) => {
    setItem(item.filter((element, index) => element.completed !== true));
    setCopyItem(item.filter((element, index) => element.completed !== true));
  };

  // TOGGLE COMPLETE ITEM
  const completeItemHandle = (e) => {
    const index = e.target.getAttribute("title");
    let newItem = [...item];

    e.target.firstChild.style.transition = "200ms ease";
    setTimeout(() => {
      e.target.firstChild.style.transition = null;
    }, 250);

    if (newItem[index].completed === false) {
      newItem[index].completed = true;
    } else {
      newItem[index].completed = false;
    }
    setItem([...newItem]);
    setCopyItem([...newItem]);

    if (filter === "false") {
      setTrueFirst();
    }
    if (filter === "true") {
      setFalseFirst();
    }
  };

  // FILTERING LOGIC STUFF
  const chooseFilterHandle = (e) => {
    setFilter(e.target.value);
  };

  // SORTING LIST ITEM BY TRUE FALSE
  const setTrueFirst = () => {
    setItem(item.sort((a, b) => b.completed - a.completed));
  };
  const setFalseFirst = () => {
    setItem(item.sort((a, b) => a.completed - b.completed));
  };

  const DragEndHandle = (result) => {
    if (!result.destination) {
      return;
    }
    const copy = Array.from(item);
    const [x] = copy.splice(result.source.index, 1);
    copy.splice(result.destination.index, 0, x);
    setItem([...copy]);
    setCopyItem([...copy]);
  };

  // RENDER JSX
  return (
    <div className="todo__contain">
      <div className="todo__contain__head">
        <h1>Todo</h1>
        <button onClick={props.toggleColorModeHandle}>
          <img
            style={!props.colorMode ? { opacity: 1 } : null}
            src="./images/icon-sun.svg"
            alt="iconmoon"
          />
          <img
            style={props.colorMode ? { opacity: 1 } : null}
            src="./images/icon-moon.svg"
            alt="iconmoon"
          />
        </button>
      </div>
      <form
        onSubmit={submitInputHandle}
        name="form"
        className="todo__contain__input"
      >
        <label>
          <input
            maxLength="40"
            className={props.colorMode ? "light" : null}
            required
            placeholder="Create a new todo..."
            value={object.content}
            onChange={inputHandle}
            type="text"
          />
        </label>
        <button type="submit"></button>
      </form>
      <div
        className={
          props.colorMode ? "todo__contain__list light" : "todo__contain__list"
        }
      >
        <div>
          <div
            style={
              item.length === 0 ? { display: "flex" } : { display: "none" }
            }
            className="item__empty"
          >
            <p>
              <em className={props.colorMode ? "light" : null}>
                ... empty ...
              </em>
            </p>
          </div>
          <DragDropContext onDragEnd={DragEndHandle}>
            <Droppable droppableId="itemS">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {item.map((value, index) => {
                    return (
                      <Draggable
                        isDragDisabled={
                          JSON.stringify(value.completed) === filter
                        }
                        key={index}
                        index={index}
                        draggableId={`${index}`}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                          >
                            <Items
                              isDragging={snapshot.isDragging}
                              colorMode={props.colorMode}
                              filter={filter}
                              content={value.content}
                              completed={value.completed}
                              key={index}
                              index={index}
                              completeItemHandle={completeItemHandle}
                              deleteItem={deleteItem}
                            />
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <Footer
          colorMode={props.colorMode}
          clearCompletedItem={clearCompletedItem}
          initialItemIndexHandle={initialItemIndexHandle}
          setFalseFirst={setFalseFirst}
          setTrueFirst={setTrueFirst}
          itemLength={item.length}
          class={filter}
          method={chooseFilterHandle}
          deleteItem={deleteItem}
        />
      </div>
      <p className={props.colorMode ? "light" : null} id="description">
        Drag and drop to reorder list
      </p>
    </div>
  );
};

export default Todo;
