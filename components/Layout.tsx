import { BellIcon } from "@heroicons/react/24/outline";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import slideImage from "../utils/imageslider";
import Footer from "./footer";
import SideBar from "./SideMenu";
import Slider from "./Slider";

export default function Layout({ title, children, description }: any) {
  const [open, setOpen] = useState(false);
  const [openModal, setopenModal] = useState(false);
  const router = useRouter();
  // function createBubble() {
  //   const section = document.querySelector(".canva");
  //   const span = document.createElement("span");
  //   var size = Math.random() * 60;
  //   span.style.width = 20 + size + "px";
  //   span.style.height = 20 + size + "px";
  //   span.style.left = Math.random() * innerWidth + "px";

  //   setTimeout(() => {
  //     span.remove();
  //   }, 3000);
  // }

  // setInterval(createBubble, 100);
  const nav = [
    {
      path: "/",
      title: "Home",
    },
    // {
    //   path: "/our-services",
    //   title: "Our Service",
    // },
    // {
    //   path: "/about-us",
    //   title: "About Us",
    // },
    // {
    //   path: "/career",
    //   title: "Career",
    // },
    // {
    //   path: "/blog",
    //   title: "Blog",
    // },
  ];

  return (
    <>
      <Head>
        <title>{title ? title + " - Pace Code" : "Pace Code"}</title>

        <meta
          content="PaceCode"
          name="author"
          style={{ userSelect: "text" }}
        ></meta>
        <meta
          content="enterprise solution, product development, develop software, apps developer, agile for software development, create software, software coding, companies software development, application software developers, custom-developed software, app developer software, custom software development companies, process development software, software developing companies, app build software, methodology software development, software outsourcing, offshore, pwa, custom software, cybersecurity, cyber security, cyber, security, engineering software development, app create software, building software, website software, agile methodologies for software development, software company, Node, nodejs, Nextjs, nextjs, nestjs, nest, react, reactjs, reactnative, flutter, iOS development, android development,   python, django framework, django, restAPI, RESTAPI, restapi, nodejs, vue js, typescript,  digital signage, display network, building your own website, digital experience, customer software management, javascript, outsourcing business, team augmentation, pace code, pace, code, pacecode, gamedevelopment, game development, game, wordpress, wordpress development, wordpress design, phaser, threejs, three js, 2d game development, 2d, 2d game, 3d game development, 3d, 3d game"
          name="keywords"
          style={{ userSelect: "text" }}
        ></meta>
        <meta
          name="description"
          content={description ? description : ""}
          style={{ userSelect: "text" }}
        ></meta>
        <meta
          httpEquiv="x-ua-compatible"
          content="ie=edge"
          style={{ userSelect: "text" }}
        ></meta>
        <meta
          httpEquiv="Cache-control"
          content="private"
          style={{ userSelect: "text" }}
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          style={{ userSelect: "text" }}
        ></meta>

        <link rel="icon" href="/images/logo.png" type="image/x-icon"></link>
      </Head>
      <div className="flex  min-h-screen flex-col justify-between">
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <nav className="container m-auto flex h-14 items-center justify-between ">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 hidden max-md:block"
                onClick={() => setOpen(true)}
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
              <Link href="/">
                <Image
                  width={100}
                  height={100}
                  src="/images/logo.png"
                  style={{ width: "4rem ", height: "2rem" }}
                  alt={"bibash"}
                />
              </Link>
            </div>
            <div className="flex">
              <Link target="_blank" href="https://calendly.com/pacecode/30min">
                <span className="p-3 button-primary">Lets talk</span>
              </Link>
              <Link href="/contact-us">
                <span className="button-primary p-3 ml-2"> Contact Us</span>
              </Link>
            </div>
          </nav>
        </header>
        <SideBar
          open={open}
          setOpen={setOpen}
          setopenModal={setopenModal}
          item={nav}
        ></SideBar>
        <Carousel>
          {slideImage.map((item: any, id: any) => (
            <Slider image={item} key={id}></Slider>
          ))}
        </Carousel>
        <div
          className="absolute z-10 max-md:hidden"
          style={{ top: "10%", left: "5%" }}
        >
          <div className="flex container m-auto">
            {nav.map((item: any, id: any) => (
              <div className="p-4 text-white font-bold text-lg " key={id}>
                <Link
                  href={item.path}
                  className={
                    router.pathname == `${item.path}` ? "c-active" : ""
                  }
                >
                  {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <main className="">{children}</main>
        <footer>
          <div className=" bg-gray-200 text-black shadow-inner h-auto ">
            <div className="container m-auto flex justify-between">
              <Footer nav={nav}></Footer>
            </div>
          </div>
          <div className=" flex h-10  justify-center items-center shadow-inner">
            <div>Copyright &#169; 2022 Pace Code</div>
          </div>
        </footer>
      </div>
    </>
  );
}
