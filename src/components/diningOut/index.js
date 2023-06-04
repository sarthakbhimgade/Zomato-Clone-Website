import React from "react";
import "./diningOut.css";
import Collection from "../common/collection";
import Filters from "../common/filters";
import { diningOut } from "../../data/diningOut";
import ExploreSection from "../common/exploreSection";

const collectionList = [
  {
    id: 1,
    title: "On the Outskirts",
    cover:
      "https://b.zmtcdn.com/data/collections/d9e3093ccde7e0ad627467a08c17f6a2_1536726826.jpg",
    places: "14places",
  },
  {
    id: 2,
    title: "Live Sports Screening",
    cover:
      "https://b.zmtcdn.com/data/collections/9e73ab453b81b26a5381b592d41a8f78_1680858001.png",
    places: "21 Places",
  },
  {
    id: 3,
    title: "Must-Visit Restaurants",
    cover:
      "https://b.zmtcdn.com/data/collections/ba5d4210cb7538b3d05409bff41e292d_1528719901.jpg",
    places: "9 Places",
  },
  {
    id: 4,
    title: "Insta-Worthy",
    cover:
      "https://b.zmtcdn.com/data/collections/3e934519be19cd80ddc41c13721a8e4b_1566461030.jpg",
    places: "  8 Places",
  },
  {
    id: 5,
    title: "Value For Money",
    cover:
      "	https://b.zmtcdn.com/data/collections/c06b3c36337d84989ab30bc66a578018_1425298064_l.jpg",
    places: "15 Places",
  },
];

const diningFilters = [
  {
    id: 1,
    icon: <i class="fi fi-rr-settings-sliders absolute-centre"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Outdoor Seating",
  },
  {
    id: 4,
    title: "Serves Alcohol",
  },
  {
    id: 5,
    title: "Open Now",
  },
];

const diningList = diningOut;

const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={diningFilters} />
      </div>
      <ExploreSection list={diningList} collectionName='Dine-Out Rsetaurants in Nagpur'/>
    </div>
  );
};

export default DiningOut;
