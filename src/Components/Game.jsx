import { useEffect, useRef, useState } from "react";
import "./Game.css";
export default function Game({ defaultData }) {
  const [data, setData] = useState(defaultData);
  const [selected, setSelected] = useState({ country: "", capital: "" });
  const [jumbleFlag, setJumbleFlag] = useState(false);
  const [matched, setMatched] = useState(false);
  const [jumbledData, setJumbledData] = useState([]);
  const buttonRef = useRef();

  useEffect(() => {
    console.log(data);
    let tempArray = [];
    for (let [key, value] of Object.entries(data)) {
      tempArray.push(key, value);
      //   console.log(key, value);
    }
    for (let i = 0; i < tempArray.length; i++) {
      const randomIndex = Math.floor(Math.random() * tempArray.length);
      [tempArray[i], tempArray[randomIndex]] = [
        tempArray[randomIndex],
        tempArray[i],
      ];
    }
    setJumbledData(tempArray);
    console.log(tempArray);
  }, [jumbleFlag]);

  const handleSelected = (e) => {
    console.log(e);
    if (Object.keys(data).includes(e.target.value)) {
      setSelected({ ...selected, country: e.target.value });
    } else {
      setSelected({ ...selected, capital: e.target.value });
    }
  };
  // const verifyMatched = () => {

  // };
  const checkMatch = () => {
    let timeOutId;
    if (timeOutId) {
      clearTimeout(timeOutId);
    }

    if (data[selected.country] === selected.capital) {
      console.log("matched");
      const filter = jumbledData.filter((ele) => {
        if (ele === selected.country || ele === selected.capital) {
          return "";
        }
        return ele;
      });
      console.log("filtering happened and setting jumbled data", filter);
      timeOutId = setTimeout(() => {
        setJumbledData(filter);
        setSelected({ country: "", capital: "" });
        setMatched(false);
      }, 1000);

      setMatched(true);
    } else {
      console.log("not matched");
      timeOutId = setTimeout(() => {
        setSelected({ country: "", capital: "" });
        setJumbleFlag((flag) => !flag);
      }, 1000);
      setMatched(false);
    }
  };
  useEffect(() => {
    let dataAdded = 0;
    console.log(selected);
    if (
      Object.values(selected).forEach((value) => {
        if (value) {
          dataAdded++;
        }
        if (dataAdded === 2) {
          checkMatch();
        }
      })
    ) {
    }
  }, [selected]);
  return (
    <article>
      {jumbledData?.map((ele) => (
        <button
          key={ele}
          value={ele}
          onClick={(e) => handleSelected(e)}
          ref={buttonRef}
          style={{
            border: `${
              matched
                ? ele === selected.country || ele === selected.capital
                  ? "3px solid green"
                  : ""
                : ele === selected.country || ele === selected.capital
                ? "3px solid blue"
                : ""
            }`,
          }}
        >
          {ele}
        </button>
      ))}
    </article>
  );
}
