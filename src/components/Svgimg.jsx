import { motion } from "framer-motion";

const Svgimg = ({ src, alt, width = "", height = "" }) => {
  return (
    <motion.img
      whileHover={{ scale: 1.1 }}
      whileTap={{scale: 0.9}}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Svgimg;
