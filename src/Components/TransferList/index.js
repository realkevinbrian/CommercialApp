/****
 *
## Transfer List Algorithm
1-List all data into Parent Box (Current Box);
2-Add an event listener to each element (span);
3-If you click on the element add < select > className
4-Add to selected Container
5-[forward button] add event listener
6-onClick [Forward button] return difference between List data with selected data and add selected data to child data then add returned data to Parent.
7.onClick [Backward button] return difference between selected data on child data and add to parent child.
 */

import React, { useContext, useState } from "react";
import { TransferListContainer } from "../../Styled/TransferList.styled";
import DataBox from "./DataBox";
import TransferButtons from "./TransferButtons";
import { TransferListContext } from "../../Context/TransferListContext";
import _ from "lodash";

function TransferList() {
  const List = useContext(TransferListContext);

  const [ParentList, setParentList] = useState(List);
  const [ChildList, setChildList] = useState([]);
  const [selected, setSelected] = useState([]);

  //method to forward list
  function handleForward() {
    /***onClick [Forward button] return difference between List data with selected data
     * and add selected data to child data then add returned data to Parent.
     * **/
    const diff = _.differenceBy(ParentList, selected, "name");
    setParentList(diff);
    setChildList(_.unionBy(ChildList, selected));
  }

  //method to backward list
  function handleBackward() {
    /****
     * OnClick [Backward button] return difference
     * between selected data on child data and add to parent child.
     */
    const diff = _.differenceBy(ChildList, selected, "name");
    setChildList(diff);
    setParentList(_.unionBy(ParentList, selected));
  }

  return (
    <TransferListContainer>
      <div className="body">
        <DataBox data={ParentList} action={setSelected} selected={selected} />
        <TransferButtons
          handleForward={handleForward}
          handleBackward={handleBackward}
        />
        <DataBox data={ChildList} action={setSelected} selected={selected} />
      </div>
    </TransferListContainer>
  );
}

export default TransferList;
