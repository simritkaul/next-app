"use client";
import React from "react";

const AddToCart = () => {
  return (
    <>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => console.log("Added")}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default AddToCart;
