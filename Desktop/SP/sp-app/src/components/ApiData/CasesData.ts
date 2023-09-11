import { useState, useEffect } from "react";

function CasesData() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetch("https://sp-labs.vercel.app/api/cases")
      .then((response) => response.json())
      .then((data) => setCases(data.cases))
      .catch((error) => console.error("Something broke :/ ", error));
  }, []);

  return cases;
}

export default CasesData;
