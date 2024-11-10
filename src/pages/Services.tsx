export default function ContactMe(){
    return (
    <div>
    <div className="grid place-items-center m-10">
          <div className="text-black font-extrabold text-5xl">FEATURES</div>
          <div className="m-2 text-black justify-center text-7xl">WHAT I DO..</div>
    </div>
        <div className="flex flex-col md:flex-row">
        <div className="p-4  w-full md:w-1/2">
          <div className="text-black flex bg-pink p-4 rounded-md m-2 animate-bounce">
           <div className="rounded-full border-2 w-20 h-20">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-15 h-15 text-green-500"
          >
            <path d="M4.5 4h15a2.5 2.5 0 012.5 2.5v11a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 17.5v-11A2.5 2.5 0 014.5 4zm0 1.5a.5.5 0 00-.5.5v.67l7.25 4.5 7.25-4.5V6a.5.5 0 00-.5-.5h-15zm15 13a.5.5 0 00.5-.5v-8.55l-7.07 4.39a.75.75 0 01-.86 0L4 9.45V17a.5.5 0 00.5.5h15z" />
          </svg>
           </div>
           <div className="w-90 h-20 p-2">
              <h1 className="font-bold text-3xl">Mail & website</h1>
              <p className="text-gray-500">Email: iosattbsoft2021@gmail.com<a href="mailto:info@"></a></p>
              <p className="text-gray-500">Website:portfolio.vercel.com <a href="https://www.google"></a></p>
           </div>
          </div>
          <div className="text-black flex bg-pink p-4 rounded-md m-2 animate-bounce">
           <div className="rounded-full border-2 w-20 h-20">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-15 h-15 text-green-500"
          >
            <path d="M4.5 4h15a2.5 2.5 0 012.5 2.5v11a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 17.5v-11A2.5 2.5 0 014.5 4zm0 1.5a.5.5 0 00-.5.5v.67l7.25 4.5 7.25-4.5V6a.5.5 0 00-.5-.5h-15zm15 13a.5.5 0 00.5-.5v-8.55l-7.07 4.39a.75.75 0 01-.86 0L4 9.45V17a.5.5 0 00.5.5h15z" />
          </svg>
           </div>
           <div className="w-90 h-20 p-2">
              <h1 className="font-bold text-3xl">contact us</h1>
              <p className="text-gray-500">Email: <a href="mailto:info@"></a></p>
              <p className="text-gray-500">Website: <a href="https://www.google"></a></p>
           </div>
          </div>
          <div className="text-black flex bg-pink p-4 rounded-md m-2 animate-bounce">
           <div className="rounded-full border-2 w-20 h-20 p-2">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-15 h-15 text-green-500"
          >
            <path d="M4.5 4h15a2.5 2.5 0 012.5 2.5v11a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 17.5v-11A2.5 2.5 0 014.5 4zm0 1.5a.5.5 0 00-.5.5v.67l7.25 4.5 7.25-4.5V6a.5.5 0 00-.5-.5h-15zm15 13a.5.5 0 00.5-.5v-8.55l-7.07 4.39a.75.75 0 01-.86 0L4 9.45V17a.5.5 0 00.5.5h15z" />
          </svg>
           </div>
           <div className="w-90 h-20 p-2">
              <h1 className="font-bold">Address</h1>
              <p className="text-gray-500">Pakistan,Karachi<a href="mailto:info@"></a></p>
              <p className="text-gray-500">DEFENCE PHASE V<a href="https://www.google"></a></p>
           </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 m-0">
        <form className="w-full md:w-1/2 p-4">
          <div className="mb-5 bg-pink animate-bounce">
            <input type="fullname" id="email" className="bg-gray-50 border border-green-600 text-black text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5 dark:bg-green dark:border-green dark:placeholder-black dark:text-black dark:focus:ring-green dark:focus:border-green" placeholder="Fullname" required />
          </div>
          <div className="mb-5 bg-pink animate-bounce">
          <input type="fullname" id="email" className="bg-gray-50 border border-green-600 text-black text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5 dark:bg-green dark:border-green dark:placeholder-black dark:text-black dark:focus:ring-green dark:focus:border-green" placeholder="Email" required />
       
           </div>
          <div className="mb-5 bg-pink animate-bounce">
          <input type="fullname" id="email" className="bg-gray-50 border border-green-600 text-black text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5 dark:bg-green dark:border-green dark:placeholder-black dark:text-black dark:focus:ring-green dark:focus:border-green" placeholder="Phone number" required />
       
           </div>
          <div className="mb-5 bg-pink animate-bounce">
          <input type="fullname" id="email" className="bg-gray-50 border border-green-600 text-black text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5 dark:bg-green dark:border-green dark:placeholder-black dark:text-black dark:focus:ring-green dark:focus:border-green" placeholder="Messages" required />
          </div>
          <div className="mb-5 bg-green animate-bounce">
           <button type="submit" className="text-white bg-yellow-300 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-700 dark:hover:bg-green-700 dark:focus:ring-orange">Submit</button>
           </div>
        </form>
        </div>
        </div>
        </div>
 
    )
}