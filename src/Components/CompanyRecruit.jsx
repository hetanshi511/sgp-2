import React from "react";
import "./CompanyRecruits.css";
function CompanyRecruit({ companyName, imageUrl, packageAmount }) {
  return (
    <div className="company-recruit">
      <img src={imageUrl} alt={companyName} />
      <div className="details">
        <h2>{companyName}</h2>
        <p>Package: {packageAmount}</p>
      </div>
    </div>
  );
}

function CompanyRecruitsList() {
  const recruits = [
    {
      companyName: "Jaro Education",
      imageUrl:
        "https://www.charusat.ac.in/images/recruiters/placement/jaro.png",
      packageAmount: "12 Lakhs",
    },
    {
      companyName: "Byju's App",
      imageUrl:
        " https://www.charusat.ac.in/images/recruiters/placement/byju.png",
      packageAmount: "10 Lakhs",
    },
    {
      companyName: "Indian Navy",
      imageUrl: "https://www.charusat.ac.in/images/recruiters/placement/in.png",
      packageAmount: "9 Lakhs",
    },
    {
      companyName: "GSFC",
      imageUrl:
        "https://www.charusat.ac.in/images/recruiters/placement/gsfc.png",
      packageAmount: "8 Lakhs",
    },
    {
      companyName: "Tata Consultancy",
      imageUrl:
        "https://www.charusat.ac.in/images/recruiters/placement/tcs.png",
      packageAmount: "7 Lakhs",
    },
    {
      companyName: "Samsung",
      imageUrl:
        "https://www.charusat.ac.in/images/recruiters/placement/samsung.png",
      packageAmount: "7 Lakhs",
    },
    {
      companyName: "OpsHub",
      imageUrl:
        "https://www.charusat.ac.in/images/recruiters/placement/ops.png",
      packageAmount: "6.5 Lakhs",
    },
    {
      companyName: "Berger Lewis",
      imageUrl:
        "https://www.charusat.ac.in/images/recruiters/placement/berger.png",
      packageAmount: "6 Lakhs",
    },
    {
      companyName: "MG",
      imageUrl: "https://www.charusat.ac.in/images/recruiters/placement/mg.png",
      packageAmount: "6 Lakhs",
    },
    {
      companyName: "Evosys",
      imageUrl:
        "https://www.charusat.ac.in/images/recruiters/placement/evosys.png",
      packageAmount: "5.5 Lakhs",
    },
    {
      companyName: "Jeavio",
      imageUrl:
        "https://www.charusat.ac.in/images/recruiters/placement/jeavio.png",
      packageAmount: "5.3 Lakhs",
    },
    {
      companyName: "Crest Data Systems",
      imageUrl:
        "https://www.charusat.ac.in/images/recruiters/placement/crest.png",
      packageAmount: "5 Lakhs",
    },
    {
      companyName: "Tbea",
      imageUrl:
        "https://www.charusat.ac.in/images/recruiters/placement/tbea.png",
      packageAmount: "4.5 Lakhs",
    },
    {
      companyName: "Adani",
      imageUrl:
        "https://www.charusat.ac.in/images/recruiters/placement/adani.png",
      packageAmount: "4.5 Lakhs",
    },
  ];

  return (
    <div className="company-recruits-list">
      {recruits.map((recruit, index) => (
        <CompanyRecruit
          key={index}
          companyName={recruit.companyName}
          imageUrl={recruit.imageUrl}
          packageAmount={recruit.packageAmount}
        />
      ))}
    </div>
  );
}

export default CompanyRecruitsList;
