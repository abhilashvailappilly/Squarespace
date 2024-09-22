import React from 'react'

const BuildingLoaderPage = () => {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
   
      <video className='w-full h-full object-cover' src="/assets/Video/buildingVideo.webm" autoPlay 
        loop 
        muted/>
        <div className=" absolute bottom-10 left-10 w-1/4 h-1/3 flex justify-center items-start bg-white">
            <div className="w-2/3 h-2/3 ">
                <div className="w-10 h-10 mt-5 bg-black rotate-square"></div>

        <div className="text-animation">
        <h1 className="text-xl mt-3">Just a few more moments......</h1>
        </div>
            </div>
        </div>
    </div>
  )
}

export default BuildingLoaderPage
