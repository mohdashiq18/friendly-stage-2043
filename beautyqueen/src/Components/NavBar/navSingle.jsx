import { useState } from "react";

export const NavSingle = ({ array, state, setState, setnav }) => {
  return (
    <div
      id="nav_dropdown"
      onMouseEnter={() => {
        setnav(true);
        setState(true);
      }}
      onMouseLeave={() => {
        setnav(false);
        setState(true);
      }}
    >
      {state ? (
        <>
          {array.map((elem) => {
            return (
              <div className="DropDownSub">
                {
                  <div className="DropDownHeading">
                    <p className="headDrop">{Object.keys(elem)}</p>
                    <div className="DropDownContent">
                      {Object.values(elem)[0].map((e) => {
                        return <p className="DropdownContentSingle">{e}</p>;
                      })}
                    </div>
                  </div>
                }
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
};
