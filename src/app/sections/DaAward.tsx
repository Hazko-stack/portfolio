import Image from "next/image";
import { Cotton, SansFrans, SansFransBold } from "../utils/fonts";

export default function DaAward() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:place-items-center bg-njblue-500">
      <div className="relative h-20 xl:h-fit">
        <div className="grid grid-cols-3 place-items-center">
          <div className="col-span-1 relative">
            <Image
              src="/assets/image/me2.png"
              width={600}
              height={600}
              alt="me2"
              className="block lg:translate-x-14 -rotate-12 lg:opacity-75 w-44 opacity-30 lg:translate-y-0 translate-y-64 translate-x-32  "
            />
            <Image
              src="/assets/image/me3.png"
              width={600}
              height={600}
              alt="me_hanbok"
              className="block absolute lg:top-8 w-52 rotate-12 left-96 lg:opacity-60 lg:left-72 opacity-30 top-52"
            />
          </div>
          <div
            className={`relative rotate-6 ${Cotton.className} -translate-y-44 lg:-translate-y-16 text-6xl md:text-7xl lg:text-8xl lg:-translate-x-36`}
          >
            <p className={`text-white absolute opacity-20 left-2`}>Award</p>
            <p className={`text-white absolute top-4`}>Award</p>
            <p className={`text-white absolute top-8 opacity-25 left-1`}>
              Award
            </p>
          </div>
        </div>
        <Image
          src={`/assets/image/camera_retro.png`}
          width={700}
          height={700}
          alt="camera_retro"
          className="w-8 absolute right-4 rotate-6 -bottom-4"
        />
        <Image
          src={`/assets/image/bubble_teal.png`}
          width={700}
          height={700}
          alt="bubble"
          priority
          className="w-5 absolute right-56 bottom-3"
        />
        <Image
          src={`/assets/image/dot_teal.png`}
          width={700}
          height={700}
          alt="bubble"
          priority
          className="w-2 absolute right-24 -bottom-2"
        />
        <Image
          src={`/assets/image/star_teal.png`}
          width={700}
          height={700}
          alt="bubble"
          priority
          className="w-8 absolute right-16 bottom-20"
        />
      </div>

      <div className="lg:p-12 md:p-8 rounded-md">
        <div className="">
          <div className={`${SansFrans.className} text-white max-w-lg mx-auto`}>
            <div className="pb-3 pt-3 grid grid-cols-3 border-t-2 border-white bg-white text-njblue-500 rounded-t-lg">
              <div className="px-2">&lt;</div>
              <p className="w-full text-center">かおり (Kaori)</p>
            </div>

            <div className="border-2 border-white rounded-b-lg">
              <div className="px-3 py-5 text-njblue-700 grid grid-cols-1 gap-y-4">
                {" "}
                <div className=" bg-gray-50 px-3 pt-2 pb-1 ml-3 mr-5 rounded-xl -translate-x-1 text-sm relative">
                  <Image
                    src={`/assets/image/reaction_bubble.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-10 -right-4 -top-3"
                    priority
                  />
                  <Image
                    src={`/assets/image/first_place.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -right-1 -top-1"
                    priority
                  />
                  <p className={SansFransBold.className}>
                    
                    <span className={SansFrans.className}>
                      1st Winner - Internet of Things PNB IT National 2024
                    </span>
                  </p>
                  <p className={SansFransBold.className}>
                    by{" "}
                    <span className={SansFrans.className}>
                      Politeknik Negeri Bali
                    </span>
                  </p>
                  <p
                    className={`w-full text-end text-xs ${SansFransBold.className} text-gray-400`}
                  >
                    Received 2024
                  </p>
                  <Image
                    src={`/assets/image/bubble_tail.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -left-[7px] bottom-0 -z-10"
                    priority
                  />
                </div>
                <div className=" bg-gray-50 px-3 pt-2 pb-1 ml-3 mr-5 rounded-xl -translate-x-1 text-sm relative">
                  <Image
                    src={`/assets/image/reaction_bubble.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-10 -right-4 -top-3"
                    priority
                  />
                  <Image
                    src={`/assets/image/graduation_cap.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -right-1 -top-1"
                    priority
                  />
                  <p className={SansFransBold.className}>
                    
                    <span className={SansFrans.className}>
                    Appreciation - discovering vulnerability in the Sistem Elektronik Pemerintah Daerah DIY
                    </span>
                  </p>
                  <p className={SansFransBold.className}>
                    by{" "}
                    <span className={SansFrans.className}>
                    CSIRT & Diskominfo DIY
                    </span>
                  </p>
                  <p
                    className={`w-full text-end text-xs ${SansFransBold.className} text-gray-400`}
                  >
                    Received 2025
                  </p>
                  <Image
                    src={`/assets/image/bubble_tail.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -left-[7px] bottom-0 -z-10"
                    priority
                  />
                </div>
                <div className=" bg-gray-50 px-3 pt-2 pb-1 ml-3 mr-5 rounded-xl -translate-x-1 text-sm relative">
                  <Image
                    src={`/assets/image/reaction_bubble.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-10 -right-4 -top-3"
                    priority
                  />
                  <Image
                    src={`/assets/image/puzzle.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -right-1 -top-1"
                    priority
                  />
                  <p className={SansFransBold.className}>
                    
                    <span className={SansFrans.className}>
                      Participant - TECHNOCORNER UGM Soccer Robot Competition
                    </span>
                  </p>
                  <p className={SansFransBold.className}>
                    by{" "}
                    <span className={SansFrans.className}>
                      Universitas Gadjah Mada
                    </span>
                  </p>
                  <p
                    className={`w-full text-end text-xs ${SansFransBold.className} text-gray-400`}
                  >
                    Received 2024
                  </p>
                  <Image
                    src={`/assets/image/bubble_tail.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -left-[7px] bottom-0 -z-10"
                    priority
                  />
                  
                </div>
                <div className=" bg-gray-50 px-3 pt-2 pb-1 ml-3 mr-5 rounded-xl -translate-x-1 text-sm relative">
                  <Image
                    src={`/assets/image/reaction_bubble.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-10 -right-4 -top-3"
                    priority
                  />
                  <Image
                    src={`/assets/image/puzzle.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -right-1 -top-1"
                    priority
                  />
                  <p className={SansFransBold.className}>
                    
                    <span className={SansFrans.className}>
                      Participant - TECHNOCORNER UGM Transporter Robot Competition
                    </span>
                  </p>
                  <p className={SansFransBold.className}>
                    by{" "}
                    <span className={SansFrans.className}>
                      Universitas Gadjah Mada
                    </span>
                  </p>
                  <p
                    className={`w-full text-end text-xs ${SansFransBold.className} text-gray-400`}
                  >
                    Received 2024
                  </p>
                  <Image
                    src={`/assets/image/bubble_tail.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -left-[7px] bottom-0 -z-10"
                    priority
                  />
                  
                </div>
                <div className=" bg-gray-50 px-3 pt-2 pb-1 ml-3 mr-5 rounded-xl -translate-x-1 text-sm relative">
                  <Image
                    src={`/assets/image/reaction_bubble.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-10 -right-4 -top-3"
                    priority
                  />
                  <Image
                    src={`/assets/image/puzzle.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -right-1 -top-1"
                    priority
                  />
                  <p className={SansFransBold.className}>
                    
                    <span className={SansFrans.className}>
                      Participant - MAN 2 Madiun graphic design
                    </span>
                  </p>
                  <p className={SansFransBold.className}>
                    by{" "}
                    <span className={SansFrans.className}>
                      MAN 2 Madiun 
                    </span>
                  </p>
                  <p
                    className={`w-full text-end text-xs ${SansFransBold.className} text-gray-400`}
                  >
                    Received 2021
                  </p>
                  <Image
                    src={`/assets/image/bubble_tail.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -left-[7px] bottom-0 -z-10"
                    priority
                  />
                  
                </div>
                <div className=" bg-gray-50 px-3 pt-2 pb-1 ml-3 mr-5 rounded-xl -translate-x-1 text-sm relative">
                  <Image
                    src={`/assets/image/reaction_bubble.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-10 -right-4 -top-3"
                    priority
                  />
                  <Image
                    src={`/assets/image/puzzle.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -right-1 -top-1"
                    priority
                  />
                  <p className={SansFransBold.className}>
                    
                    <span className={SansFrans.className}>
                      Participant -  Bebras Challenge Computional Thinking
                    </span>
                  </p>
                  <p className={SansFransBold.className}>
                    by{" "}
                    <span className={SansFrans.className}>
                    Universitas Kristen Petra 
                    </span>
                  </p>
                  <p
                    className={`w-full text-end text-xs ${SansFransBold.className} text-gray-400`}
                  >
                    Received 2021
                  </p>
                  <Image
                    src={`/assets/image/bubble_tail.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="absolute w-5 -left-[7px] bottom-0 -z-10"
                    priority
                  />
                  
                </div>
              </div>

              <div className="flex bg-white rounded-full p-2 m-2 items-center">
                <p className=" text-gray-400 flex-1 px-2">Send message</p>
                <div className="bg-white rounded-full text-gray-400">
                  <Image
                    src={`/assets/image/ios_send.png`}
                    width={200}
                    height={200}
                    alt="cap"
                    className="w-8 aspect-square"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
