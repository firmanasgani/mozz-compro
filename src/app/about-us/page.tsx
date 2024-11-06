export default function AboutUsPage() {
  return (
    <div className="flex flex-row items-center justify-center gap-10 h-screen">
      <h1 className="text-4xl font-bold text-black">Let's connect <br /> with us!</h1>
      <div>
        PT MOZZ CITRA INDONESIA <br />
        Jl. Jerapah 3 Blok H2 No. 3A, <br />
        Cikarang Pusat - Bekasi <br />
        <div className="flex items-center gap-2 mt-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-xl">+62 851 5626 7097</span>
        </div>
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4 1.5" />
          </svg>
          <span className="text-xl">mozzcindo@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
