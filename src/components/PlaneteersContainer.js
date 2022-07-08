import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({planateer}) {


  const planateers = planateer.map((p) => {
    return <Planeteer key={p.id} p={p} />
  })

  return (
    <ul className="cards">
      {planateers}
    </ul>
  );
}

export default PlaneteersContainer;
