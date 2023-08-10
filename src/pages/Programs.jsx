import CatalogPagePrograms from "../components/programsPage/ProgramsCatalog";
import FixedBg from "../shared/FixedBg";

const Programs = () => {
  return (
    <>
      <FixedBg img="/assets/backgroundDesign.png" />
      <section>
        <CatalogPagePrograms />
      </section>
    </>
  );
};

export default Programs;
