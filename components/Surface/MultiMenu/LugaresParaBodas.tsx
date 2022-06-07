import React, { useEffect, useState, cloneElement, MouseEventHandler,FC, ReactNode } from "react";
import { subCategory, category,characteristicSubCategory } from "../../../interfaces/index";
import { fetchApi, queries } from "../../../utils/Fetching";
import { fetchingData } from "./MultiMenu";
import { capitalize } from "../../../utils/Capitalize";
import { Promo } from "./Promo";
import { AireLibreIcon, EnLaCiudadIcon, PlayaIcon } from "../../Icons";
import Link from "next/link";
import { route } from "next/dist/server/router";
import { connectAutoComplete } from "react-instantsearch-dom";
import { string } from "yup";
import { Filters } from "../../../pages/categoria/[category]";
import { Filter } from "interweave";
import { FiltersContextProvider } from "../../../context/FiltersContext";



const LugaresParaBodas =  () => {
  const [subCategories, setSubcategories] = useState<subCategory[]>([]);
  
  useEffect(() => {
    const dataLocalStorage = localStorage.getItem("dataMenu");
    if (
      !dataLocalStorage ||
      !JSON.parse(dataLocalStorage)["lugares para bodas"]
    ) {
      fetchingData("lugares para bodas")
        .then((data) => data && setSubcategories(data))
        .catch((error) => console.log(error));
        console.log(fetchingData)
    } else {
      const data = JSON.parse(dataLocalStorage);
      data["lugares para bodas"] &&
        setSubcategories(data["lugares para bodas"]);
    }
  }, []);

  type Item = {
    title:string;
    icon: any;
    route: string;
  }

  const List: Item[] = [
    { 
      icon: <PlayaIcon />, 
      title: "En la playa", 
      route:"/lugares-para-bodas",
      
    },
    { 
      icon: <AireLibreIcon />,
      title: "Al aire libre" ,
      route:"/lugares-para-bodas"
    },
    { 
      icon: <EnLaCiudadIcon />,
      title: "En la ciudad" ,
      route:"/lugares-para-bodas"
    },
  ];

  

  return (
    <div className="w-full grid grid-cols-3">
      <ul className="col-span-2 grid grid-cols-3 gap-2 text-gray-500">
        {subCategories.map((item) => (
          <Link
            key={item?._id}
            href={`/categoria/lugares-para-bodas/${item.slug}`}
            passHref
          >
            <li
              className={
                "w-max hover:text-tertiary hover:font-semibold cursor-pointer"
              }
            >
              {item?.title && capitalize(item.title)}
            </li>
          </Link>
        ))}
      </ul>
      <div className="grid grid-cols-3 -mt-8">
      
        {List.map((item, idx) => (
            <Link
              key={idx}
              href = {`/categoria/lugares-para-bodas`}
              //className="flex flex-col items-center justify-center text-gray-600 p-3 hover:bg-gray-200 transition rounded-xl"
              
            >
            <a key={idx} className="flex flex-col items-center justify-center text-gray-600 p-3 hover:bg-gray-200 transition rounded-xl"
            >
              <div className="bg-white w-16 h-16 p-4 rounded-full">
                {cloneElement(item.icon, { className: "w-full h-full" })}
              </div>
              <small>{item.title}</small>
            </a>
          </Link>
        ))}
      </div>      
     
    </div>
  );
};

export default LugaresParaBodas;
