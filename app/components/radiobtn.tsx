import React from "react";
interface Data {
  dataName: string;
  dataArray: Array<string>;
}
function Radiobtn({ dataName, dataArray }: Data) {
  return (
    <select
      name={dataName}
      className=" basis-1/3 border-[1px] rounded-md border-gray-300 px-1 py-2"
    >
      {dataArray.map((data) => {
        return <option value={data}>{data}</option>;
      })}
    </select>
  );
}

export default Radiobtn;
