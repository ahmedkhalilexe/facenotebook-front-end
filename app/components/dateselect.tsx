import React from "react";
interface Data {
  dataName: string;
  dataArray: Array<string>;
  setVariable(value: string): any;
}
function DateSelect({ dataName, dataArray, setVariable }: Data) {
  return (
    <select
      name={dataName}
      onChange={(e) => {
        setVariable(e.target.value);
      }}
      className=" basis-1/3 border-[1px] rounded-md border-gray-300 px-1 py-2"
    >
      {dataArray.map((data) => {
        return (
          <option key={dataArray.indexOf(data)} value={data}>
            {data}
          </option>
        );
      })}
    </select>
  );
}

export default DateSelect;
