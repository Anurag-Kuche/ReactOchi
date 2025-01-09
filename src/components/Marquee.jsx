import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className="w-full py-20 bg-[#004D43] overflow-hidden">
      <motion.div
        className="text flex gap-40 whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
      >
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex gap-40 items-center">
            {/* Added border on all sides for every "We are Ochi" */}
            <h1 className="text-[8vw] leading-none pt-2 px-4 border-2 border-white">
              We are Ochi
            </h1>
            <h1 className="text-[8vw] leading-none pt-2 px-4 border-2 border-white">
              We are Ochi
            </h1>
            <h1 className="text-[8vw] leading-none pt-2 px-4 border-2 border-white">
              We are Ochi
            </h1>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
