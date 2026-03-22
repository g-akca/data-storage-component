function StorageInfo() {
  return (
    <section className="relative bg-blue-850 px-8 py-10 rounded-[10px] shadow-[0_75px_100px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col items-center gap-4">
        <p>You’ve used <span className="font-bold">815 GB</span> of your storage</p>
        
        <div className="flex flex-col items-center gap-2 self-stretch">
          <div className="bg-blue-900 rounded-[10px] h-5 p-0.75 self-stretch flex justify-start items-center">
            <div className="bg-linear-[to_right,#FFA197_0%,#FF4A95_100%] w-47.5 h-full rounded-[10px] p-0.5">
              <div className="bg-white h-full aspect-square ml-auto rounded-full" />
            </div>
          </div>

          <div className="flex justify-between font-extrabold text-[12px] leading-base self-stretch">
            <p>0 GB</p>
            <p>1000 GB</p>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 bg-white rounded-[10px] h-18 w-44.75 flex justify-center items-center gap-2 text-blue-950">
        <span className="font-bold text-[40px] leading-[100%]">185</span>
        <p className="uppercase font-bold text-[12px] leading-base opacity-50">GB left</p>
      </div>
    </section>
  )
}

export default StorageInfo;