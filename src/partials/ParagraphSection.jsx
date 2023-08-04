import React, { useState } from "react";
import { BrowserHistoryDefault } from "../utils/constants";

const ParagraphSection = (props) => {
  const [sections, setSections] = useState([{ ...BrowserHistoryDefault }]);
  const [sectionHeader, setSectionsHeader] = useState(
    "Developer related cookies"
  );

  const handleInputChange = (index, field, value) => {
    const newSections = [...sections];
    newSections[index][field] = value;
    setSections(newSections);
  };

  const handleAddSection = () => {
    setSections([...sections, { ...BrowserHistoryDefault }]);
//     const tempState = [...props.browsingTiers];
//     tempState[props.tierIndex]["lookups"] = sections;
//     props.setBrowsingTiers(tempState);
  };

  const handleCrossClick = (index) => {
    const newSections = [...sections.filter((val, idx) => idx !== index)];
    setSections(newSections);
    // const tempState = [...props.browsingTiers];
    // tempState[props.tierIndex]["lookups"] = newSections;
    // props.setBrowsingTiers(tempState);
  };

  return (
    <div className="container rounded-md p-3 shadow-[0_2px_6px_-2px_rgba(0,106,194,0.2)] border-2 border-gray">
      <div className="mb-2 h4 text-gray-90">
        <input
          type="text"
          className="w-full border-none"
          value={sectionHeader}
          placeholder="Indexed category name"
          onChange={(e) => {
            setSectionsHeader(e.target.value);
            const tempState = [...props.browsingTiers];
            tempState[props.tierIndex]["tierName"] = e.target.value;
            props.setBrowsingTiers(tempState);
          }}
          required
        />
      </div>
      {sections.map((section, index) => (
        <div key={index} className="flex items-start justify-center">
          <p className=" text-gray-900 mb-3 p-2 bg-gray-200 rounded-md text-sm">
            lookup{" "}
            <input
              type="text"
              className="text-red-900 w-22 my-1 rounded-md text-sm py-1 border-none"
              value={section.lookup}
              placeholder="index name"
              onChange={(e) =>
                handleInputChange(index, "lookup", e.target.value)
              }
            />{" "}
            in browsing history, indexed more than{" "}
            <input
              type="number"
              className="text-red-900 w-16 my-1 rounded-md text-sm py-1 border-none"
              value={section.indexedTimes}
              min={0}
              onChange={(e) =>
                handleInputChange(index, "indexedTimes", e.target.value)
              }
            />{" "}
            times, last{" "}
            <input
              type="number"
              className="text-red-900 w-16 my-1 rounded-md text-sm py-1 border-none"
              value={section.lastDays}
              min={0}
              onChange={(e) =>
                handleInputChange(index, "lastDays", e.target.value)
              }
            />{" "}
            days
          </p>
          <button onClick={() => handleCrossClick(index)} className="pl-1 mt-1 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-gray-500 hover:text-blue-600"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
        </div>
      ))}
      <div className="text-right">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleAddSection}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            className="fill-current text-blue-600"
            viewBox="0 0 448 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ParagraphSection;
