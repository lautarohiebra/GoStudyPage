import DestinationsCatalog from "../components/detinationsPage/destinationsCatalog"
import FixedBg from "../shared/FixedBg"

const Destinations = () => {
  return (
    <>
    <FixedBg img="/assets/backgroundDesign.png" />
    <section>
      <DestinationsCatalog />
    </section>
    </>
  )
}

export default Destinations