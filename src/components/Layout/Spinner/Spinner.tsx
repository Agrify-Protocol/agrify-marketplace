import { LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const Spinner = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    >
      <LoaderCircle size={50} color="#0CC14C" />
    </motion.div>
  );
};

export default Spinner;
