import React from "react";

interface ListItemProps {
  title: string;
  content: string;
}

interface ListProps {
  items: ListItemProps[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul className="flex flex-col gap-6">
      {items.map((item, index) => (
        <li key={index} className="border-l-4 border-info ps-4">
          <h5 className="text-lg font-semibold uppercase text-info mb-3">{item.title}</h5>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default List;
