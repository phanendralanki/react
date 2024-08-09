import { CDN_URL, MENU_ITEM_URL } from "../utils/Constants";
import {useState} from "react";
const RestaurantCategoryAccordian = ({data,showItems,setShowIndex,dummyData}) => {
  // console.log(data);
  const items = data.itemCards;

  // const [showItems,setShowItems] = useState(false);
  const handleClick = () => {
      // setShowItems(!showItems);
      setShowIndex();
  };
  return (
    <div>
     
      {console.log(dummyData)}

       {/* Accordian structure */}
      {/* 1.Header */}
      
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick= {handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>✅</span>
        </div>
        {/* 2.Accordion Body */}

        { showItems?
        <div className="">
          {/* {console.log(props.data.itemCards)} */}

          {items.map((item) => (
            <div
              key={item.card.info.id}
              className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
            >
              <div className="w-9/12">
                <div className="py-2">
                  <span>{item.card.info.name}</span>
                  <span> - ₹{item.card.info.price / 100}</span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
              </div>

              <div className="w-3/12 p-4">
                <div className="absolute">
                  <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">
                    Add +
                  </button>
                </div>
                <img
                  className="w-20"
                  alt=""
                  src={MENU_ITEM_URL + item.card.info.imageId}
                />
              </div>
            </div>
          ))}
        </div>
        : "" }
      </div>
    </div>
  );
};

export default RestaurantCategoryAccordian;
