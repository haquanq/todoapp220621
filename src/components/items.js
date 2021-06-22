import React, { useState, useRef, useEffect } from "react";
import "./css/items.css";

const Items = (props) => {
  const [buttonState, setButtonState] = useState(false);
  const deleteItemButtonHandle = (e) => {
    setButtonState((x) => !x);
  };
  const itemRef = useRef();

  useEffect(() => {
    itemRef.current.style.transition = "none";
    if (!props.isDragging) {
      setTimeout(() => {
        itemRef.current.style.transition = null;
      }, 500);
    }
  }, [props.isDragging, props.filter]);

  return (
    <div
      ref={itemRef}
      className={props.colorMode ? "item__container light" : "item__container"}
      style={{
        opacity: JSON.stringify(props.completed) === props.filter ? "0" : null,
        pointerEvents:
          JSON.stringify(props.completed) === props.filter ? "none" : null,
        backgroundColor:
          props.isDragging && !props.colorMode
            ? "#393a4c"
            : null || (props.isDragging && props.colorMode)
            ? "#d2d3db"
            : null,
        border: props.isDragging ? "none" : null,
      }}
    >
      <div className="item__container__left">
        <button
          className={props.colorMode ? "light" : null}
          index={props.index}
          onClick={props.completeItemHandle}
        >
          <div
            style={{
              transform: props.completed ? "initial" : null,
            }}
          >
            <img src="./images/icon-check.svg" alt="iconcheck" />
          </div>
        </button>
        <p
          onClick={deleteItemButtonHandle}
          className={props.colorMode ? "light" : null}
          style={
            props.completed
              ? { textDecoration: "line-through", opacity: 0.5 }
              : null
          }
        >
          {props.content}
        </p>
      </div>
      <div
        style={buttonState === true ? { visibility: "initial" } : null}
        className="item__container__right"
      >
        <button
          className={props.colorMode ? "light" : null}
          name="deleteitem"
          index={props.index}
          onClick={props.deleteItem}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Items;
