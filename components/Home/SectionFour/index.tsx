import MapPinIcon from "assets/icons/MapPinIcon";
import Button from "components/shared/Button";
import { TextSpan } from "components/shared/TextSpan";
import Map, {
  Marker,
  GeolocateControl,
  FullscreenControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";

const SectionFour = ({ contact }: { contact: boolean }) => {
  const TOKEN =
    "pk.eyJ1IjoiaHN5bmVya2wiLCJhIjoiY2xiMHFlZnloMWp3bzN4cW1tcHpmNGp2dCJ9.dk_XUFbUUQWA4tL0eS_z7w";
  const sentence = "Contact me".split("");

  return (
    <section
      className={
        contact
          ? "min-h-screen w-full flex justify-between items-center bg-[#191919] pt-96 xl:pt-0"
          : `min-h-screen w-full bg-[#191919] flex justify-between items-center py-16 xl:pt-0`
      }
    >
      <div
        className={`${
          contact
            ? "flex container mx-auto justify-start lg:justify-between flex-wrap text-white text-xs "
            : "flex container mx-auto justify-start lg:justify-between flex-wrap text-white text-xs"
        }`}
      >
        <div className="text-white text-2xl sm:text-6xl lg:text-8xl">
          {sentence.map((letter, index) => (
            <TextSpan key={index}>{letter}</TextSpan>
          ))}
          <p className="text-xs max-w-md mt-8">
            I’m interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to use the form.
          </p>
          <form className="max-w-md text-sm mb-20 ">
            <div className="flex mt-8 ">
              <div className="w-2/4 mr-2 bg-black relative group">
                <label className=" before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[0.15rem] before:bg-[#08fdd8] group-hover:before:w-full before:transition-all group:hover:before:h-10 before:z-40"></label>
                <input
                  placeholder="Name"
                  type="text"
                  className="w-full bg-transparent py-4 px-4  outline-none border-none relative"
                />
              </div>
              <div className="w-2/4 bg-black relative group">
                <label className=" before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[0.15rem] before:bg-[#08fdd8] group-hover:before:w-full before:transition-all group:hover:before:h-10 before:z-40"></label>
                <input
                  placeholder="Email"
                  type="text"
                  className="w-full bg-transparent py-4 px-4  outline-none border-none relative"
                />
              </div>
            </div>
            <div className="w-full mt-2 bg-black relative group">
              <label className=" before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[0.15rem] before:bg-[#08fdd8] group-hover:before:w-full before:transition-all group:hover:before:h-10 before:z-40"></label>
              <input
                placeholder="Email"
                type="text"
                className="w-full bg-transparent py-4 px-4  outline-none border-none relative"
              />
            </div>
            <div className="w-full mt-2 bg-black relative group">
              <label className=" before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[0.15rem] before:bg-[#08fdd8] group-hover:before:w-full before:transition-all group:hover:before:h-10 before:z-40"></label>
              <textarea
                rows={5}
                cols={50}
                placeholder="Email"
                className="w-full bg-transparent py-4 px-4  outline-none border-none relative"
              />
            </div>
            <div className="relative w-full">
              <div className="absolute right-0 top-0 lg:-top-6">
                <Button text="Send Message!" />
              </div>
            </div>
          </form>
        </div>
        <Map
          mapboxAccessToken={TOKEN}
          initialViewState={{
            longitude: 28.87619,
            latitude: 41.0435,
            zoom: 8,
          }}
          style={{ width: 448, height: 600 }}
          mapStyle="mapbox://styles/mapbox/dark-v11"
        >
          <div className="absolute right-5 top-5 h-24 w-24 bg-white text-black rounded-sm flex flex-col justify-center items-center text-xs">
            <p>Atışalanı Cd.</p>
            <p>Esenler/İstanbul</p>
          </div>

          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          <ScaleControl />
          <Marker longitude={28.87619} latitude={41.0435} anchor="bottom">
            <div className="h-8 w-8 text-[#08fdd8]">
              <MapPinIcon />
            </div>
          </Marker>
        </Map>
      </div>
    </section>
  );
};

export default SectionFour;
