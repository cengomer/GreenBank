import { card, newC, newC2 } from "../assets";
import styles, { layout } from "../style";
import { motion } from 'framer-motion';
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Find the Perfect  <br className="sm:block hidden" /> Credit Card for You
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Discover your ideal credit card with ease. Our comprehensive selection caters to every financial need and lifestyle.
       Whether you seek cashback rewards,
       travel perks, or building credit, we have the perfect credit card waiting for you.
        Unleash the possibilities and find the credit card that fits your unique goals and aspirations.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
    <motion.div className="max-w-[534.15px] max-h-[489.82px] flex justify-center items-center flex-col">

      <motion.img
      
      initial={{ y: 0 }}
        animate={{ y: [-20, 20, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear'
        }}
         src={newC} alt="billing" className="w-[435.05px] h-[274.77px] relative z-10 inset-y-[2rem]" />
      <motion.img
      
      initial={{ y: 0 }}
        animate={{ y: [-20, 20, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear',
        }}
         src={newC2} alt="billing" className="w-[435.05px] h-[274.77px] relative z-5 inset-y-[-5rem] inset-x-[-0rem]" />

      </motion.div>
    </div>
  </section>
);

export default CardDeal;
