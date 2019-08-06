import React, { useState } from "react";
import style from "./Dropdown.module.css";

export function DropdownTwo(props) {

  const options = [...props.options];
  const [expand, setExpand] = useState(false);
  // const [selection, setSelection] = useState(0);

  function Option(props) {
    return (
      <div
        // className={`${style.option}`}
        // className={`${style.option} ${props.canBuild ? "" : style.disabled}`}
        onClick={() => {
          setExpand(false);
          // console.log(props.index);
          // setSelection(props.index);
        }}
      >
        {props.children}
      </div>
    );
  }

  // function SelectedOption(props) {
  //   if (props.selectedOption && !(props.selectedOption === "---")) {
  //     const selectedOption = props.options.find(o => {
  //       return o.name === props.selectedOption;
  //     });
  //     return (
  //       <Option
  //         key={selectedOption.name}
  //         name={selectedOption.name}
  //         id={getId(selectedOption.name)}
  //         canBuild={skillCheck(selectedOption.level)}
  //       />
  //     );
  //   } else return defaultOption;
  // }

  return (
    <>
      <h3>{props.title}</h3>
      <div className={style.dropdown}>
        {expand ? (
          options.map((o, index) => {
            return (
              <Option key={props.title + index} index={index}>
                {o}
              </Option>
            );
          })
        ) : (
          <div key={props.title} onClick={() => setExpand(true)}>
            {props.default}
          </div>
        )}
      </div>
    </>
  );
}
