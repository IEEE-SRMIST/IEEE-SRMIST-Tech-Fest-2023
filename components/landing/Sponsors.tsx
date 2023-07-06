import Image from "next/image";

function Sponsors() {
  const sponsors = [
    { url: '/assets/layouts/logo.svg', name: "IEEE Logo" },
    { url: '/assets/layouts/logo.svg', name: "IEEE Logo" },
    { url: '/assets/layouts/logo.svg', name: "IEEE Logo" },
    { url: '/assets/layouts/logo.svg', name: "IEEE Logo" },
    { url: '/assets/layouts/logo.svg', name: "IEEE Logo" },
    { url: '/assets/layouts/logo.svg', name: "IEEE Logo" },
    { url: '/assets/layouts/logo.svg', name: "IEEE Logo" },
    { url: '/assets/layouts/logo.svg', name: "IEEE Logo" },
    { url: '/assets/layouts/logo.svg', name: "IEEE Logo" },
    { url: '/assets/layouts/logo.svg', name: "IEEE Logo" },
  ]

  return (
    <div className="w-full flex flex-col gap-6 items-center mt-20 overflow-hidden">
      <div className="flex justify-center items-center w-full">
        <h1 className="text-4xl font-syne font-extrabold">SPONSORS</h1>
      </div>
      <section className="w-full">
        <div className="relative flex overflow-x-hidden mt-6 bg-white/20">
              <div className="flex py-5 animate-marquee whitespace-nowrap">
                  {sponsors.map((sponsor, index) => (
                      <Image key={index} className="mx-4" src={sponsor.url} alt={sponsor.name} width={200} height={200}/>
                  ))}
              </div>
              <div className="flex absolute top-0 py-5 animate-marquee2 whitespace-nowrap">
                  {sponsors.map((sponsor, index) => (
                      <Image key={index} className="mx-4" src={sponsor.url} alt={sponsor.name} width={200} height={200}/>
                  ))}
              </div>
          </div>
      </section>
    </div>
  );
}

export default Sponsors;
