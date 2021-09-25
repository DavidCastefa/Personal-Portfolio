import React from "react";


const Categories = ({ categories, filter }) => {
  return (
    <div className="Categories">
      {
        categories.map( (category, i ) => {
          return <button
            type="button"
            className="btn-categories"
            key={i} 
            onClick={() => filter(category)} 
            >
             {category}
          </button>
        })
      }
    </div>
  )
}

export default Categories;