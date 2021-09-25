import React, { useState } from "react";
import Categories from "../components/Categories";
import ShowPortfolio from "../components/ShowPortfolio";
import Title from "../components/Title";
import portfolio from "../components/allPortfolios";

const allCategories = ['All', ...new Set(portfolio.map( item => item.categories).flat().sort())];

const PortfolioPage = () => {
  const [pfSelection, setPfSelection] = useState(portfolio);

  const filter = category => {
    if (category === 'All') {
      setPfSelection(portfolio);
      return;
    }
    const filteredData = portfolio.filter( item => item.categories.includes(category) );
    setPfSelection(filteredData);
  }

  return (
    <div className="PortfolioPage">
      <div className="title">
        <Title title={'Portfolio'} span={'Portfolio'} />
      </div>
      <div className="portfolio-data">
        <Categories filter={filter} categories={allCategories} />
        <ShowPortfolio pfSelection={pfSelection} />
      </div>

    </div>
  )
}

export default PortfolioPage;