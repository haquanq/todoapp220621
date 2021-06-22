import "./css/footer.css";

const Footer = (props) => {
  return (
    <div className={props.colorMode ? "list__footer light" : "list__footer"}>
      <p className={props.colorMode ? "light" : null}>
        {props.itemLength} items left
      </p>
      <div className={"list__footer__filter " + props.class}>
        <div className={props.colorMode ? "light" : null}>
          <label
            className={props.colorMode ? "light" : null}
            onClick={props.initialItemIndexHandle}
          >
            All
            <input
              onChange={props.method}
              value="default"
              name="filter"
              type="radio"
            />
          </label>
          <label
            className={props.colorMode ? "light" : null}
            onClick={props.setFalseFirst}
          >
            Active
            <input
              onChange={props.method}
              value={true}
              name="filter"
              type="radio"
            />
          </label>
          <label
            className={props.colorMode ? "light" : null}
            onClick={props.setTrueFirst}
          >
            Completed
            <input
              onChange={props.method}
              value={false}
              name="filter"
              type="radio"
            />
          </label>
        </div>
        <button
          className={props.colorMode ? "light" : null}
          onClick={props.clearCompletedItem}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default Footer;
