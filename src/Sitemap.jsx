import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/CommanPrivacy.css";
import { sitemapData } from "./Data/sitemap";

function Sitemap() {
  return (
    <div className="sitemap">
      <h1>Sitemap</h1>
      <div className="links_sitemap">
        {sitemapData.map((data) => {
          return (
            <div key={data.id} className="singleLink_Sitemap">
              <h3>{data.name} </h3>
              <NavLink to={data.url}>{data.urlName}</NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sitemap;
