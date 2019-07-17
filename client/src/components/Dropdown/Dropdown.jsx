import React, { useState, useContext } from "react";
import style from "./Dropdown.module.css";
import { userContext } from "../../context/userContext/UserContext";

export default function Dropdown(props) {
  const { state: userState } = useContext(userContext);
  const { skills } = userState;
  const defaultOption = (
    <Option key={"None"} index={0} name={"---"} canBuild={true} />
  );
  const options = [defaultOption];

  function skillCheck(req) {
    const level = skills.Construction.level;
    return level >= req ? true : false;
  }

  props.options.forEach((o, index) => {
    options.push(
      <Option
        key={o.name}
        index={index + 1}
        name={o.name}
        canBuild={skillCheck(o.level)}
      />
    );
  });

  const [expand, setExpand] = useState(false);

  function handleDropDown(name, index, canBuild) {
    if (canBuild || !expand) {
      console.log("index: ", index);
      setExpand(!expand);

      if (expand) {
        props.onSelect(name);
      }
    }
  }

  function Option(props) {
    return (
      <div
        className={`${style.option} ${props.canBuild ? "" : style.disabled}`}
        onClick={() => handleDropDown(props.name, props.index, props.canBuild)}
      >
        {props.name}
      </div>
    );
  }

  function SelectedOption(props) {
    if (props.selectedOption && !(props.selectedOption === "---")) {
      const selectedOption = props.options.find(o => {
        return o.name === props.selectedOption;
      });
      return (
        <Option
          key={selectedOption.name}
          name={selectedOption.name}
          canBuild={skillCheck(selectedOption.level)}
        />
      );
    } else return defaultOption;
  }

  return (
    <>
      <h3>{props.name}</h3>
      <div className={style.dropdown}>
        {expand ? options : <SelectedOption {...props} />}
      </div>
    </>
  );
}
