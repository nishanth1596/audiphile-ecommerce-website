import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type RelatedProductsItem = {
  relatedImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  title: string;
  navigateTo: string;
};

function RelatedProductsItem({
  relatedImage,
  title,
  navigateTo,
}: RelatedProductsItem) {
  const navigate = useNavigate();

  const mobile = relatedImage.mobile.replace("./assets/", "/assets/");
  const tablet = relatedImage.tablet.replace("./assets/", "/assets/");
  const desktop = relatedImage.desktop.replace("./assets/", "/assets/");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 sm:gap-10">
      <picture>
        <source srcSet={mobile} media="(max-width:767px)" />
        <source
          srcSet={tablet}
          media="(min-width:768px) and (max-width:1023px)"
        />
        <source srcSet={desktop} media="(min-width:1024px)" />
        <img src={mobile} alt="" className="rounded-lg" />
      </picture>

      <h4 className="leading-[2.06rem] tracking-[1.71px] sm:text-2xl sm:leading-[33px] sm:tracking-[1.71px]">
        {title}
      </h4>
      <button
        onClick={() => navigate(navigateTo)}
        className="bg-PrimaryColor hover:bg-SecondaryColor text-White cursor-pointer px-7 py-4 uppercase transition-all duration-300 ease-in-out"
      >
        see product
      </button>
    </div>
  );
}

export default RelatedProductsItem;
