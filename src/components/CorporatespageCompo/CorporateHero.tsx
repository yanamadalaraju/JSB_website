import bannerImage from "../../asstes/corporatebanner.png";

export default function CorporateHero() {
  return (
    <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <img
        src={bannerImage}
        alt="Corporate Banner"
        className="w-full h-auto object-cover block"
      />
    </section>
  );
}