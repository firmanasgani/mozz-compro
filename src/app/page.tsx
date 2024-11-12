export default function Home() {
  return (
    <div className="flex flex-col items-center justify-around h-screen">
      <div className="flex flex-row item-center justify-center mt-10 h-[800px]">
        <div className="w-1/4 flex justify-center items-center">
          <h1 className="text-4xl font-bold text-center">PT MOZZ CITRA INDONESIA</h1>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <p className="text-md font-weight-600 w-[80%]">
            We take pride in its diverse and passionate team of driven
            professionals, including LED technicians, R&D experts to sales,
            supports and marketing specialist. Our main goal is to serve and
            support our distributors, users and customers and strive to provide
            the best possible support.
          </p>
        </div>
      </div>

      <div className="flex flex-col item-center justify-center mt-10 mb-10">
        <h1 className="text-4xl font-bold text-center">Market Scope</h1>
        <div className="flex flex-col gap-2  items-center justify-center mt-10">
          <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
            <div
              className="bg-cover bg-no-repeat bg-center h-80 w-80"
              style={{
                backgroundImage: `url(https://picsum.photos/1600/900?random=1)`,
              }}
            >
              <div className="bg-black bg-opacity-50 h-full flex items-end p-4">
                <h2 className="text-2xl font-bold text-white">Intelligent Display</h2>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat bg-center h-80 w-80"
              style={{
                backgroundImage: `url(https://picsum.photos/1600/900?random=2)`,
              }}
            >
              <div className="bg-black bg-opacity-50 h-full flex items-end p-4">
                <h2 className="text-2xl font-bold text-white">Urban Light Environment</h2>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat bg-center h-80 w-80"
              style={{
                backgroundImage: `url(https://picsum.photos/1600/900?random=3)`,
              }}
            >
              <div className="bg-black bg-opacity-50 h-full flex items-end p-4">
                <h2 className="text-2xl font-bold text-white">Tourist Scenery Lightning</h2>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat bg-center h-80 w-80"
              style={{
                backgroundImage: `url(https://picsum.photos/1600/900?random=4)`,
              }}
            >
              <div className="bg-black bg-opacity-50 h-full flex items-end p-4">
                <h2 className="text-2xl font-bold text-white">VR & XR Technology</h2>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col item-center justify-center mt-10 mb-10">
        <h1 className="text-4xl font-bold text-center">Our Products</h1>
        <div className="flex flex-col gap-2  items-center justify-center mt-10">
          <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
            <div
              className="bg-cover bg-no-repeat bg-center h-80 w-80"
              style={{
                backgroundImage: `url(https://picsum.photos/1600/900?random=1)`,
              }}
            >
              <div className="bg-black bg-opacity-50 h-full flex items-end p-4">
                <h2 className="text-2xl font-bold text-white">Module</h2>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat bg-center h-80 w-80"
              style={{
                backgroundImage: `url(https://picsum.photos/1600/900?random=2)`,
              }}
            >
              <div className="bg-black bg-opacity-50 h-full flex items-end p-4">
                <h2 className="text-2xl font-bold text-white">Cabinet</h2>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat bg-center h-80 w-80"
              style={{
                backgroundImage: `url(https://picsum.photos/1600/900?random=3)`,
              }}
            >
              <div className="bg-black bg-opacity-50 h-full flex items-end p-4">
                <h2 className="text-2xl font-bold text-white">Rental</h2>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat bg-center h-80 w-80"
              style={{
                backgroundImage: `url(https://picsum.photos/1600/900?random=4)`,
              }}
            >
              <div className="bg-black bg-opacity-50 h-full flex items-end p-4">
                <h2 className="text-2xl font-bold text-white">Creative</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
}
