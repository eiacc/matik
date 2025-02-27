export type HomeCardType = {
  icon          : string;
  image        ?: string;
  title         : string;
  details       : string;
  flexibility  ?: string;
  imageAsIcon  ?: boolean;
}

function HomeCard(props: HomeCardType) {
  const {
    icon,
    image,
    title,
    details,
    flexibility,
    imageAsIcon
  } = props

  return(
    <div className={`${flexibility} flex justify-between ${imageAsIcon ? 'flex-row' : 'flex-col'} rounded-xl card-bg border border-[#2B2B2B] min-h-64`}>
      <div className="py-7 px-6">
        { icon    ? <span className="grid w-max rounded-lg p-2.5 bg-black/20"><img src={icon} alt={title + " icon"} /></span> : null }
        { title   ? <p className="inter-600 pt-[19px] text-lg">{title}</p> : null }
        { details ? <p className="inter-400 pt-4.5 text-sm max-w-[231px]">{details}</p> : null }
      </div>


      {
        image ?
          !imageAsIcon ?
            <div className="grow pt-7 pb-5 px-6"><img className="h-full w-full" src={image} /></div>
            :
            <div className="p-[19px]">
              <div className="aspect-square w-full h-full rounded-md bg-[#4E47FF] grid place-items-center"><img src={image} /></div>
            </div>
          :
          null
      }
    </div>
  )
}

export default HomeCard;