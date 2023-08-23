import { apple, bill, c1, c2, c3, c, google } from "../assets";
import styles, { layout } from "../style";
import { easeInOut, motion } from 'framer-motion';

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>

    <div className="max-w-[534.15px] max-h-[489.82px] flex justify-center items-center flex-col">
  <motion.img
        initial={{ y: 0 }}
        animate={{ y: [-20, 20, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear', 
        }}
    src={c1} alt="billing"
     className="w-[435.05px] h-[274.77px] relative z-10 inset-y-[10rem]" />

  <motion.img
          initial={{ y: 0 }}
        animate={{ y: [-15, 15, -15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: 'linear', 
        }}
  
   src={c3} alt="billing" className="w-[435.05px] h-[274.77px] relative z-5 inset-y-[5rem]" />
  <motion.img
          initial={{ y: 0 }}
          animate={{ y: [20, -20, 20 , 0] }}
        transition={{
          repeat: Infinity,
          duration: 23,
          ease: 'linear', 
        }}
  
   src={c2} alt="billing" className="w-[435.05px] h-[274.77px] relative z-5 inset-y-[-15rem]" />
</div>


      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Design your personalized <br className="sm:block hidden" /> credit card.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      You have the freedom to personalize the design of your credit card,
       ensuring a truly unique experience that makes you feel extraordinary
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;
