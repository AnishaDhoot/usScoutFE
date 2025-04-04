import Image from "next/image";
import {TextHoverEffect} from "../components/ui/text-hover-effect";
import { FloatingNav } from "../components/ui/floating-navbar";
import heropageimage from "@/app/assets/heropageimage.png"
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import round from "@/app/assets/round.png";
import under from "@/app/assets/under.png";
import Carousel from "../components/ui/carousel";
import { GridItem } from "@/components/ui/glowing-effect";
import star from "@/app/assets/star.png";
export default function Home() {
  const navItems = [
    {
      name: "About us",
      link: "#about",
    },
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Use Cases",
      link: "#usecases",
    },
    // {
    //   name: "Pricing",
    //   link: "#pricing",
    // }
  ];
  const slideData = [
    {
      title: "",
      button: "Read more",
      src: "/assets/c1.png",
      link:"/CWCN",
    },
    {
      title: "",
      button: "Read more",
      src: "/assets/c2.png",
      link:"/CQAR",
    },
    {
      title: "",
      button: "Read more",
      src: "/assets/c3.png",
      link:"/USASA",
    },
    {
      title: "",
      button: "Read more",
      src: "/assets/c4.png",
      link:"/PMO",
    },
    {
      title: "",
      button: "Read more",
      src: "/assets/c5.png",
      link:"/UAE",
    },
    {
      title: "",
      button: "Read more",
      src: "/assets/c6.png",
      link:"/UBEA",
    }
  ];
  return (
    <div className="bg-[#1A1A1C] text-white text-center  flex flex-col items-center justify-center scrollbar-hide">
     <FloatingNav navItems={navItems} className="lato-font scrollbar-hide" />

     <TextHoverEffect text="UXSCOUT" duration={0.01}/> 
    <div id="about" className=" flex flex-row items-center justify-center">
      <div className="flex-[50%] flex flex-col color-[#F5F5F5] Fraunces-font">
      <h1 className="Fraunces-font text-7xl/[109px] text-left ml-12 mr-12 relative z-10">
  Optimize Your Website
  <Image
    src={round}
    alt="circle"
    className="absolute z-[-1] top-1/2 left-1/6 transform -translate-x-1/2 -translate-y-1/2"
  />
  , Keep Visitors Engaged
</h1>

        <h2 className=" font-[helvetica]  text-3xl/[40px] text-left ml-12 mr-12 mt-4">UX Scout maps your entire site, highlights user struggles, and provides ranked solutions to boost conversions effortlessly.</h2>
      </div>
      <div className="flex-[50%]">
      <CardContainer className="inter-var dark lato-font">
      <CardBody className="bg-[#36141d] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#2B1C20] dark:border-[#C3073F]/[0.2] border-[#C3073F]/[0.1] border-2 w-[75%] ml-2 sm:w-[30rem] h-auto rounded-xl p-8 border  ">
        <CardItem
          translateZ={40}
          className="text-2xl font-bold text-neutral-600 dark:text-white font-[helvetica] "
        >
          Know more about us 
        </CardItem>
        <CardItem
          as="p"
          translateZ={60}
          className="text-neutral-500 text-lg text-left max-w-sm mt-2 dark:text-neutral-300 font-[helvetica] "
        >
       At UX Scout, we help businesses create seamless digital experiences by identifying user friction points and providing actionable solutions.
        </CardItem>
        <CardItem translateZ={100} className="w-full mt-4">
          <Image
            src={heropageimage}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-right items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-[#4E4E50] font-[helvetica]  align-right dark:text-white dark:border-white ml-auto dark:border-1 text-white text-md font-bold"
          >
           <a href="/try"> Try now →</a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
      </div>
    </div>
    {/* =========================================================================== */}
    <h1 id="features" className="Fraunces-font text-left text-7xl/[109px] text-white w-[95%] z-10 relative mb-8">
    What UX Scout
      <span className="ml-4"> 
        <Image
          src={under}
          alt="under"
          className="absolute z-[-1] top-[35%] left-[36.5%] transform -translate-x-1/3 h-[70%] w-[10%]" 
        />
      </span>
      Does for You
    </h1>
    {/* ============================================================================= */}
    <Carousel slides={slideData}  />
    {/* ===================================================================================== */}
    <h1 id="usecases" className="Fraunces-font text-right text-7xl/[109px] text-white w-[95%] z-10 relative mb-8 mt-12 mr-8"> How UX Scout
    <span className="ml-4"> 
    <Image
          src={star}
          alt="under"
          className="absolute z-[-1] top-[-10%] left-[88%] transform -translate-x-1/3 h-[52%] w-[6%]" 
        />
          </span>Helps You</h1>
    {/*=============================================*/  }
    <ul className=" ml-12 grid grid-cols-1 h-full grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4   xl:grid-rows-2">
    <GridItem
    area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
    icon={
    <Image 
      className="h-4 w-4 text-[#F5F5F5] dark:text-neutral-400" 
      src="/assets/icon1.png" 
      alt="icon 1" 
      width={4} 
      height={4} 
    />
  }
  title="Improving Conversion Rates"
  description="By identifying friction points on key pages (like checkout or lead forms), businesses can reduce abandonment and boost conversions."
/>
 
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={
          <Image 
            className="h-4 w-4 text-[#F5F5F5] dark:text-neutral-400" 
            src="/assets/icon2.png" 
            alt="icon 1" 
            width={4} 
            height={4} 
          />
        }
        title="Optimizing Marketing Campaigns"
        description="Understand user interaction with landing pages to refine strategies, improve targeting, and maximize ROI on ads."
      />
 
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={
          <Image 
            className="h-4 w-4 text-[#F5F5F5] dark:text-neutral-400" 
            src="/assets/icon3.png" 
            alt="icon 1" 
            width={4} 
            height={4} 
          />
        }
        title="Enhancing Customer Retention"
        description="Address user frustration by identifying pain points, improving experience, and increasing loyalty."
      />
 
      <GridItem
        area="md:[grid-area:2/7/3/12] xl:[grid-area:1/8/2/12]"
        icon={
          <Image 
            className="h-4 w-4 text-[#F5F5F5] dark:text-neutral-400" 
            src="/assets/icon4.png" 
            alt="icon 1" 
            width={4} 
            height={4} 
          />
        }
        title="Improving SEO Performance"
        description="Optimize website structure and content to improve search rankings, driving more organic traffic and increasing visibility."
      />
 
      <GridItem
        area="md:[grid-area:3/1/4/12] xl:[grid-area:2/8/3/12]"
        icon={
          <Image 
            className="h-4 w-4 text-[#F5F5F5] dark:text-neutral-400 " 
            src="/assets/icon5.png" 
            alt="icon 1" 
            width={4} 
            height={4} 
          />
        }
        title="Streamlining User Onboarding"
        description="Identify and resolve friction in the onboarding process to reduce drop-offs and improve user retention."
      />
      </ul>
      <div className="mt-10 text-[#1A1A1C]">
        hehe
      </div>
      </div>
  );
}
