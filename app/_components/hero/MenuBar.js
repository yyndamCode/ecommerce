"use client";

function MenuBar({ categories }) {
  const onClick = (category) => {
    console.log("Category clicked:", category);
  };

  return (
      <div className="menu-container w-full relative pt-[40px] border-r-[1.5px]">
        <ul>
          {categories.map((category) => (
              <li
                  key={category.id}
                  className="cursor-pointer p-2 hover:bg-gray-200"
                  onClick={() => onClick(category)}
              >
                {category.name}
              </li>
          ))}
        </ul>
      </div>
  );
}

export default MenuBar;






