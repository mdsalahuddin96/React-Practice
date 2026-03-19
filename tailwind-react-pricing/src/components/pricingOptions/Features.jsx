import React from "react";
import { Check } from "lucide-react";
const Features = ({ features }) => {
  return (
    <>
      {features.map((feature, index) => (
        <p className="flex gap-1" key={index}>
          {" "}
          <Check style={{ color: "#83f05c" }}></Check> {feature}
        </p>
      ))}
    </>
  );
};

export default Features;
