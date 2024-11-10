import Logo from '../images/logo.png';
export default function Footer(){
    return (
        <div className="grid place-items-center bg-pink border-black border-t-2">
          <div className="p-6 rounded  w-full max-w-md">
            <div className="flex space-x-2">
              <div className=" text-white p-2 w-1/4 text-center rounded">
                <img className="rounded w-25 h-20 border-2 border-black" src={Logo} alt="footer" width={80} height={80} />
              </div>
              <div className=" text-white m-2 w-3/4 text-left rounded justify-center">
                <h1 className="text-3xl text-black font-extrabold animate-ping">MAAEYDAH MASROOR</h1>
              </div>
            </div>
          </div>
          <div className="p-2 rounded  w-full max-w-md">
            <div className="flex space-x-1">
              <div className=" text-black  w-1/5 text-left">
                Home
              </div>
              <div className=" text-black w-1/5 text-left">
                Features
              </div>
              <div className=" text-black  w-1/5 text-left">
                Skills
              </div>
              <div className=" text-black w-1/5 text-left">
                Work Experience
              </div>
              <div className=" text-black w-1/5 text-left">
                Contact
              </div>
            </div>
          </div>
        </div>    
        
    )
}