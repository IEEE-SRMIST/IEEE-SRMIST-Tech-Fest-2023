import Image from "next/image";
import InfiniteLooper from "@/utils/infinitelooper";

function Sponsors() {
  const imageUrls: { [key: number]: string } = {
    1: "/assets/salesforce.png",
    2: "/assets/Sharepoint.png",
    3: "/assets/Documentum.png",
    4: "/assets/Drive.png",
    5: "/assets/edgar.png",
  };

  return (
    <div className="w-full flex flex-col gap-6 items-center py-4 overflow-hidden">
      <div className="flex justify-center items-center w-full">
        <h1 className="text-4xl">SPONSORS</h1>
      </div>

      <InfiniteLooper speed={10} direction="right">
        {Object.keys(imageUrls).map((boxNumber: string, index: number) => (
          <div className="flex bg-transparent" key={index}>
            {/* Image box */}
            <div
              className={`h-[100px] w-[200px] rounded-md px-[3px] pt-[3px] ${
                parseInt(boxNumber, 10) % 2 === 0
                  ? "bg-gradient-to-r from-[#f5832c] via-[#edc77c] to-[#efb643]"
                  : "bg-gradient-to-r from-[#a36fd7] via-[#cc00ff] to-[#a36fd7]"
              }`}
            >
              <div className="h-full w-full bg-primary rounded-md">
                <div className="flex items-center justify-center h-full w-full space-x-2 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50">
                  <Image
                    src={imageUrls[parseInt(boxNumber, 10)]}
                    alt={`Image ${boxNumber}`}
                    className="flex p-3 w-full h-full rounded-md object-fill"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>

            {/* Arrow box */}
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="h-[3px] w-16 bg-gradient-to-r from-[#b283e2] via-[#cc00ff] to-[#ae83d8]"></div>
              {parseInt(boxNumber, 10) % 2 === 0 && (
                <div className="h-[3px] w-16 bg-gradient-to-r from-[#b283e2] via-[#cc00ff] to-[#ae83d8]"></div>
              )}
            </div>
          </div>
        ))}
      </InfiniteLooper>
    </div>
  );
}

export default Sponsors;
