import React from "react";
import { stats } from "../constants";
import styles from "../style";
import CountUp from "react-countup";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat, index) => {
      // Extract numeric value from the string
      const numericValue = parseFloat(stat.value.replace(/[^0-9.-]+/g, ""));
      
      // Determine if there's a "+" symbol at the start
      const hasPlusSymbol = stat.value.startsWith("+");

      // Check for "s" at the end
      const hasS = stat.value.endsWith("s");

      return (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-col m-3`}>
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {index >= stats.length - 2 && <span className="mr-1">+</span>}
            {hasPlusSymbol && index !== stats.length - 1 ? <span className="mr-1">+</span> : null}
            <CountUp end={numericValue} delay={2} duration={7}/>
            {hasS && <span className="ml-1">s</span>}
            {stat.character && <span className="ml-1">{stat.character}</span>}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] dimGreen2 uppercase ml-3">
            {stat.title}
          </p>
        </div>
      );
    })}
  </section>
);

export default Stats;
