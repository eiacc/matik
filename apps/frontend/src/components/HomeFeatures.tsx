import HomeCard, { HomeCardType } from "./HomeCard";
import homeIcon     from "../assets/img/home-icon.svg";
import starIcon     from "../assets/img/star-icon.svg";
import monitorIcon  from "../assets/img/monitor-icon.svg";
import bagIcon      from "../assets/img/bag-icon.svg";
import uptrendIcon  from "../assets/img/uptrend-icon.svg";
import webflowIcon  from "../assets/img/webflow-icon.svg";
import webflowLgIcon  from "../assets/img/webflow-lg-icon.svg";
import featuresImage from "../assets/img/features-image.png"

function HomeFeatures() {
  const cards: HomeCardType[] = [
    {
      icon        : homeIcon,
      title       : "Dashboard",
      details     : "Intuitive and powerful admin dashboards for seamless management and control.",
    },
    {
      icon        : starIcon,
      title       : "Themes",
      details     : "Beautiful, customizable themes to kickstart your website effortlessly.",
    },
    {
      icon        : monitorIcon,
      title       : "Responsive Design",
      details     : "Responsive—ready websites that engage and adapt seamlessly.",
    },
    {
      icon        : bagIcon,
      image       : featuresImage,
      imageAsIcon : false,
      title       : "E-commerce Solutions:",
      details     : "Seamless, scalable e-commerce solutions designed to drive sales and enhance customer experience.",
      flexibility : "row-start-1 row-end-3 col-start-4 col-end-4",
    },
    {
      icon        : webflowIcon,
      image       : webflowLgIcon,
      imageAsIcon : true,
      title       : "Webflow Migration",
      details     : "Smooth and hassle-free Webflow migration for a seamless transition. — coming soon",
      flexibility : "col-start-1 col-end-3",
    },
    {
      icon        : uptrendIcon,
      title       : "Analytics",
      details     : "Actionable insights to track, optimize, and grow your business with data-driven decisions.",
    },
  ]

  return (
    <div className="max-w-desktop">
      <h2 className="pb-8 raleway-700 font-bold text-6xl">Features:</h2>
      <div className="grid grid-cols-4 gap-8">
        {cards.map((card, idx) => (
          <HomeCard
            key={idx}
            icon={card.icon}
            title={card.title}
            details={card.details}
            image={card.image ?? undefined}
            imageAsIcon={card.imageAsIcon ?? undefined}
            flexibility={card.flexibility ?? undefined}
          />
        ))}
      </div>
    </div>
  )
}

export default HomeFeatures;