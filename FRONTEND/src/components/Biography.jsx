import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          The Hospital Management System (HMS),
          also sometimes called a Hospital Information System (HIS),
          doesn't have a single inventor or birthdate like a person.  
          It's more like an invention that emerged over time.
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
          1970s-1980s: Evolution and Growth - HMS features expanded to include scheduling, 
          billing, and some clinical data. However, these systems were often complex and expensive.
          1990s-2000s: Going Digital - Personal computers became more affordable, and HMS systems became more user-friendly. 
          This period saw a rise in features like electronic medical records and improved data sharing between departments.
          2000s-Today: Continued Advancements - The internet's rise allowed for more integrated systems and remote access. 
          Today's HMS's are cloud-based, mobile-friendly, and offer a wide range of features to improve patient care, 
          operational efficiency, and data security.
          </p>
          <p>Working for My Own People!</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;