"use client";

import { Menu } from "antd";

const items = [
  {
    key: "sub1",
    label: "Woman’s Fashion",
    children: [
      {
        key: "1",
        label: "Option 9",
      },
      {
        key: "2",
        label: "Option 9",
      },
    ],
  },
  {
    key: "sub2",
    label: "Men’s Fashion",
    children: [
      {
        key: "11",
        label: "Option 9",
      },
      {
        key: "22",
        label: "Option 9",
      },
    ],
  },
  {
    key: "sub3",
    label: "Electronics",
  },
  {
    key: "sub4",
    label: "Home & Lifestyle",
  },
  {
    key: "sub5",
    label: "Medicine",
  },
  {
    key: "sub6",
    label: "Sports & Outdoor",
  },
  {
    key: "sub7",
    label: "Baby’s & Toys",
  },
  {
    key: "sub8",
    label: "Groceries & Pets",
  },
  {
    key: "sub9",
    label: "Health & Beauty",
  },
];

function MenuBar() {
  const onClick = (e) => {
    console.log("click", e);
  };

  return (
    <div className="menu-container w-full relative pt-[40px] border-r-[1.5px]">
      <Menu
        onClick={onClick}
        style={{ borderRight: "0px", padding: "0px" }}
        mode="vertical"
        items={items}
      />
    </div>
  );
}
export default MenuBar;
