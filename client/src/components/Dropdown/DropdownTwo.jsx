import React, { useState, useContext } from "react";
import style from "./Dropdown.module.css";
import { userContext } from "../../context/userContext/UserContext";

export function DropdownTwo(props) {
  const { state: userState } = useContext(userContext);
  const { skills } = userState;
  const defaultOption = (
    <Option key={"None"} index={0} name={"---"} canBuild={true}>
      {props.default}
    </Option>
  );

  const options = [props.default, ...props.options];

  // props.options.forEach((o, index) => {
  //   options.push(
  //     <Option key={props.title + index} index={index}>
  //       {o}
  //     </Option>
  //   );
  // });

  const [expand, setExpand] = useState(false);
  const [selection, setSelection] = useState(0);

  function handleDropDown(name, index, canBuild) {
    if (expand) {
      props.onSelect(name);
    }
  }

  function Option(props) {
    return (
      <div
        className={`${style.option}`}
        // className={`${style.option} ${props.canBuild ? "" : style.disabled}`}
        onClick={() => {
          setExpand(false);
          setSelection(props.index);
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
            {options[selection]}
          </div>
        )}
      </div>
    </>
  );
}
