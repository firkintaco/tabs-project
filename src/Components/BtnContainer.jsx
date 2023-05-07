import React from "react";

const BtnContainer = ({ tabs, setCurrentItem, currentItem }) => {
  return (
    <div className="btn-container">
      {tabs.map((job, index) => {
        return (
          <button
            type="button"
            className={index === currentItem ? "active-btn job-btn" : "job-btn"}
            key={job.id}
            onClick={() => setCurrentItem(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
