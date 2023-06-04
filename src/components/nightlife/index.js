import React from "react";
import "./nightlife.css";
import Filters from "../common/filters";
import ExploreSection from "../common/exploreSection";
import { nightlife } from "../../data/nightlife";

const nightlifeFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-centre"></i>,
    title: "Filters",
  },
  {
    id: 2,
    icon: <i className="fi fi-rr-sort-alt absolute-centre"></i>,
    title: "Distance",
  },
  {
    id: 3,
    title: "Rating: 4.0+",
  },
  {
    id: 4,
    title: "Pubs & Bars",
  },
];

const nightList = nightlife;


const Nightlife = () => {
  return <div>
    <div className="max-width">
      <Filters filterList={nightlifeFilters}/>
    </div>
    <ExploreSection list={nightlife} collectionName="Nightlife Restaurants in Nagpur"/>
  </div>;
};

export default Nightlife;
