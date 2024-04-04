"use client";

import toyota from "../../../public/images/toyota.svg";
import nissan from "../../../public/images/nissan.svg";
import ford from "../../../public/images/ford.svg";
import tesla from "../../../public/images/tesla.svg";
import suzuki from "../../../public/images/suzuki.svg";
import chevrolet from "../../../public/images/chevrolet.svg";
import honda from "../../../public/images/honda.svg";
import mazda from "../../../public/images/mazda.svg";
import bmw from "../../../public/images/bmw.svg";
import mercedes from "../../../public/images/mercedes.svg";
import kia from "../../../public/images/kia.svg";

import CategoryBox from "../CatigoriesBox";
import Container from "../Container";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Toyota",
    icon: toyota,
    description: "Brand",
  },
  {
    label: "Nissan",
    icon: nissan,
    description: "Brand",
  },
  {
    label: "Ford",
    icon: ford,
    description: "Brand",
  },
  {
    label: "Tesla",
    icon: tesla,
    description: "Brand",
  },
  {
    label: "Suzuki",
    icon: suzuki,
    description: "Brand",
  },
  {
    label: "Chevrolet",
    icon: chevrolet,
    description: "Brand",
  },
  {
    label: "Honda",
    icon: honda,
    description: "This category is for honda cars",
  },
  {
    label: "Mazda",
    icon: mazda,
    description: "This category is for mazda cars",
  },
  {
    label: "BMW",
    icon: bmw,
    description: "This category is for bmw cars",
  },
  {
    label: "Mercedes",
    icon: mercedes,
    description: "This category is for mercedes cars",
  },
  {
    label: "KIA",
    icon: kia,
    description: "This category is for kia cars",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();

  const isMainPage = pathName === "/";
  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            description={item.description}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
