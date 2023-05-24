import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import close from "../assets/close-square-svgrepo-com.svg";
import arrowup from "../assets/arrow-up-square-svgrepo-com.svg";
import arrowdown from "../assets/arrow-down-square-svgrepo-com.svg";
import Svgimg from "./Svgimg";

const Buttonofgrid = ({
  generalcss,
  screenxl,
  screenlg,
  screenmd,
  screensm,
  cssopen,
  title,
  text,
  id,
}) => {
  const [seletid, setSeletid] = useState(null);

  return (
    <>
      <motion.div
        className={`${generalcss} ${screenxl} ${screenlg} ${screenmd} ${screensm}`}
        layoutId={id}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        onClick={() => setSeletid(id)}
      >
        {title}
      </motion.div>
      <AnimatePresence>
        {seletid ? (
          <motion.div
            className="grid grid-rows-[repeat(21,1fr)] grid-cols-[repeat(28,1fr)] col-start-2 col-end-[28] row-start-3 row-end-[21] rounded-[3px] z-0 bg-neutral-950 shadow-lg shadow-black
            sm:col-start-2 sm:col-end-[29] sm:row-start-3 sm:row-end-[19]
            xl:col-start-5 xl:col-end-[23] xl:row-start-3 xl:row-end-[12] xl:my-3 xl:mx-3 xl:rounded-xl"
            layoutId={seletid}
          >
            <motion.p
              className="
             lg:rounded-xl lg:p-3
            bg-neutral-950 col-start-1 col-end-[29] row-start-4 row-end-[22] p-2 text-white overflow-auto"
            >
              {text} Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus porro neque voluptates amet. Vero rem voluptatum
              laudantium officiis aperiam blanditiis dolorum aliquid ea
              consectetur fugiat ex cum accusantium magni numquam doloremque
              quidem, minus, repellendus repellat voluptas harum amet possimus!
              Accusantium reprehenderit architecto deserunt nobis itaque
              eligendi laboriosam saepe, ut veritatis ipsam temporibus commodi
              animi expedita eaque. Ipsa aliquid quis cupiditate quidem hic
              dicta sed nostrum magni pariatur qui incidunt beatae, autem
              voluptate enim corporis suscipit quod inventore iste tenetur
              dolorum aperiam, amet voluptas! Perspiciatis deserunt, eum
              consequatur minima quos fugit tenetur unde, maiores enim
              voluptatibus eius nemo cum assumenda nesciunt accusantium illo
              nisi eos ab tempora consequuntur vel, repudiandae aut inventore?
              Excepturi, quidem perferendis consequatur eos omnis neque minus
              non placeat, amet nisi nam corporis dolorum! Vel mollitia a aut
              cum totam omnis, quisquam esse fugit eligendi at fugiat illum
              voluptate sit blanditiis laboriosam corporis possimus quo
              exercitationem assumenda, vero aspernatur explicabo iusto! Nam,
              esse possimus. Magnam aperiam iusto qui, quae molestias ipsam
              vitae minus, earum, vero voluptas tenetur repudiandae impedit
              fugiat iste reiciendis sint debitis ea non autem corporis! Esse,
              numquam optio cumque harum aut reprehenderit blanditiis,
              voluptatibus molestiae laborum minus sed suscipit in, expedita
              consequatur asperiores placeat itaque natus. Modi dolores autem
              consectetur nihil et, quaerat harum perferendis impedit rem eaque
              in sapiente. Delectus repellendus, illum, facere doloremque quia
              officia quidem eius tenetur aliquid quaerat alias, labore
              consequatur! Modi alias consequuntur atque. Enim aliquid sed
              beatae sunt eveniet doloribus atque, nemo amet minima! Nisi magnam
              ducimus aperiam voluptatem ullam perferendis nemo, quasi assumenda
              dignissimos iusto vel maiores. Ipsum aut tempore natus, sequi
              saepe doloremque quia labore omnis, numquam ipsam, quod odio. Sint
              inventore corrupti, facilis modi, neque dolor dolore aut numquam
              dolores libero quod harum maiores exercitationem quia? Tempora
              ratione minima earum perferendis. Eaque corporis nihil neque eum
              sed maiores pariatur repellat asperiores cumque error? Nemo amet
              asperiores fugit exercitationem beatae commodi ipsam, nisi
              architecto, eius eos, praesentium dicta laboriosam nesciunt
              corrupti impedit inventore! Earum a exercitationem, esse, maxime
              facere ducimus nam non doloremque modi magnam numquam deserunt
              fugiat iure. Expedita tempora quibusdam consequatur ullam animi
              incidunt. Nihil molestiae neque quod aliquam, doloremque
              consequuntur aperiam harum maxime consequatur id provident
              nesciunt magni perspiciatis ducimus autem voluptatibus debitis
              nostrum omnis voluptas labore dolorum quaerat sit illo quibusdam.
              Possimus beatae molestiae fugiat quam quod cumque nesciunt quia,
              voluptatem mollitia nemo incidunt commodi vero veniam tenetur
              praesentium delectus nam necessitatibus fugit iure iusto tempore
              blanditiis fuga? Non vero facilis nobis, debitis quia provident
              repellat ut omnis, praesentium, et beatae dolor rerum consectetur.
              Perferendis molestias commodi molestiae a quam accusantium beatae
              libero, possimus perspiciatis deserunt hic quia nostrum quis
              assumenda. Expedita numquam quaerat totam architecto possimus
              sequi, illo modi ea distinctio ipsum, id vel? Aperiam nam eligendi
              aspernatur. Et id sapiente qui possimus asperiores harum, ducimus
              perferendis? Velit quia omnis mollitia, vero id voluptatem
              provident blanditiis. Suscipit aut deserunt praesentium ipsa ad
              nemo eaque commodi necessitatibus tempora vitae magni eum odio,
              fuga possimus delectus rem aspernatur obcaecati voluptatibus.
              Assumenda maxime consectetur inventore?
            </motion.p>
            <motion.div className={`${cssopen}`}>
              <motion.h1
                className="
                lg:mx-3 lg:rounded-lg lg:col-start-1 lg:col-end-8 lg:row-start-2 lg:row-end-[11]
                bg-neutral-950 col-start-1 col-end-[14] row-start-2 row-end-[11] flex justify-center items-center mx-1 rounded-[3px] text-white
              "
              >
                {title}
              </motion.h1>
              <motion.button
                className="
                lg:col-start-[27] lg:col-end-[29] lg:row-start-2 lg:row-end-[11] lg:mx-3 lg:rounded-lg
                col-start-[24] col-end-[29] row-start-2 row-end-[11] mx-1 rounded-[3px] flex justify-center items-center
                "
                onClick={() => setSeletid(null)}
              >
                <Svgimg src={close} alt={"close"} width="40" height="40" />
              </motion.button>
              <motion.button
                className="
                lg:col-start-[25] lg:col-end-[27] lg:row-start-2 lg:row-end-[11] lg:mx-3 lg:rounded-lg
                col-start-[19] col-end-[24] row-start-2 row-end-[11] mx-1 rounded-[3px] flex justify-center items-center"
              >
                <Svgimg src={arrowup} alt={"arowup"} width="40" height="40" />
              </motion.button>
              <motion.button
                className="
                lg:col-start-[23] lg:col-end-[25] lg:row-start-2 lg:row-end-[11] lg:mx-3 lg:rounded-lg
                col-start-[14] col-end-[19] row-start-2 row-end-[11] mx-1 rounded-[3px] flex justify-center items-center"
              >
                <Svgimg
                  src={arrowdown}
                  alt={"arrowdown"}
                  width="40"
                  height="40"
                />
              </motion.button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Buttonofgrid;
