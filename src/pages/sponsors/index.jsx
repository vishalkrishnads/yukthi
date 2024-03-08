import { useState } from "react";
import { FaLinkedin, FaGlobe } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import fsPromises from "fs/promises";
import path from "path";
import Title from "@/components/Head";

function Sponsor(props) {
  const [loading, setLoading] = useState({});

  return (
    <div className="h-fit w-screen bg-soothing_black">
      <Title route={"/sponsors"} />
      <Header id="navbar" />

      <main>
        <div className="relative w-screen h-full">
          <Image
            alt="Banner"
            src={"/banner.png"}
            fill
            style={{
              objectFit: "contain",
            }}
          />
          <div className="h-[15rem] z-50 md:h-[20rem] text-white font-clash tracking-wide font-black flex flex-col items-center justify-center">
            <span className="text-[1rem] pt-12 md:pt-16 md:text-[4rem]">
              YUKTHI '24
            </span>
            <span className="text-[2.5rem] tracking-wider">SPONSORS</span>
          </div>
        </div>
        <div className="text-[.8rem] md:text-[1rem] p-8 font-semibold font-chakra flex gap-4 md:gap-12 items-center justify-center text-white" />

        <div className="w-full h-fit pb-10 flex justify-center">
          <div className="flex flex-col gap-10 px-4 lg:px-[6rem] md:pt-6 ">
            {props.roles.map((role) => (
              <div key={role.id}>
                <h1 className="text-white font-clash uppercase font-semibold text-4xl py-4 pb-8">
                  {role.name}
                </h1>

                <div className="flex flex-wrap justify-evenly gap-16 w-fit h-fit pt-6 rounded-sm">
                  {role.sponsors.map((sponsor) => (
                    <div
                      key={sponsor.id}
                      className=" shadow-2xl hover:shadow-main_primary transition-all duration-500 ease-in-out"
                    >
                      {loading[sponsor.id] !== false ? (
                        <div className="w-[300px] h-[300px] flex justify-center items-center">
                          <div className="spinner" />
                        </div>
                      ) : null}
                      <div>
                        <Image
                          src={sponsor.img}
                          alt={sponsor.name}
                          width={loading[sponsor.id] !== false ? 0 : 300}
                          height={loading[sponsor.id] !== false ? 0 : 300}
                          onLoad={() =>
                            setLoading((prevState) => ({
                              ...prevState,
                              [sponsor.id]: false,
                            }))
                          }
                          className={`object-cover ${
                            loading[sponsor.id] !== false
                              ? "w-[0rem] h-[0rem]"
                              : "w-[20rem] h-[22rem]"
                          }`}
                        />
                      </div>
                      <div className="flex flex-col p-2 bg-black bg-opacity-20 ">
                        <div>
                          <h1 className=" text-white font-chakra font-semibold text-[1.5rem] pt-4">
                            {sponsor.name}
                          </h1>
                          <p className="text-white font-chakra font-medium text-[1rem]">
                            {sponsor.post}
                          </p>
                        </div>
                        <div className="flex justify-end pb-2">
                          <div
                            className={`flex ${
                              sponsor.github
                                ? "justify-between w-30"
                                : "justify-end"
                            } space-x-2`}
                          >
                            {sponsor.linkedin && (
                              <Link
                                href={`https://www.linkedin.com/company/${sponsor.linkedin}/`}
                                target={"_blank"}
                              >
                                <FaLinkedin
                                  size="2rem"
                                  className="text-white hover:text-[#CAFA19] transition-all duration-500 ease-in-out"
                                />
                              </Link>
                            )}
                            {sponsor.website && (
                              <Link href={sponsor.website} target={"_blank"}>
                                <FaGlobe
                                  size="2rem"
                                  className="text-white hover:text-[#CAFA19] transition-all duration-500 ease-in-out"
                                />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Sponsor;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/sponsors.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}
