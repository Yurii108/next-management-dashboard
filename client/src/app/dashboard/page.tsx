"use client";

import React from "react";
import CartPopularProducts from "./CartPopularProducts";
import CardSalesSummary from "./CardSalesSummary";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CartPopularProducts />
      <CardSalesSummary />
      <div className="row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-gray-500" />
      <div className="row-span-3 bg-gray-500" />
      <div className="row-span-1 xl:row-span-2 bg-gray-500" />
      <div className="row-span-1 xl:row-span-2 bg-gray-500" />
      <div className="row-span-1 xl:row-span-2 bg-gray-500" />
    </div>
  );
};

export default Dashboard;
