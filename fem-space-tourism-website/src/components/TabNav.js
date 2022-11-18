import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActive, changeToggleItem } from "../features/toggleSlice";
import { TabListItem, TabNavList } from "../styles/TabNav.styled";
import { TabNavItem } from "../styles/Typography.styled";

const TabNav = () => {
  const { destinations } = useSelector((state) => state.toggle);

  const dispatch = useDispatch();

  return (
    <TabNavList>
      {destinations.map((tab, index) => {
        return (
          <TabListItem
            key={nanoid()}
            whileTap={{ scale: 0.8 }}
            onClick={() => {
              dispatch(
                changeToggleItem({
                  index,
                  current: "currentDestination",
                  currentItems: "destinations",
                })
              );
              dispatch(changeActive({ index, currentItems: "destinations" }));
            }}
            isActive={tab.active}
          >
            <TabNavItem type="button" isActive={tab.active}>
              {tab.name}
            </TabNavItem>
          </TabListItem>
        );
      })}
    </TabNavList>
  );
};

export default TabNav;
