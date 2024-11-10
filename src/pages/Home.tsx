import Logo from '../images/logo.jpeg';
export default function Hero_Section(){
    return (
    <div className="flex flex-col md:flex-row">
    <div className="p-20  m-2 w-full md:w-1/2 h-auto">
        <div>HI THERE!<span>👋</span></div>
        <div className="text-3xl font-bold">I am MAAEYDAH MASROOR</div>
        <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-green-600/60 to-50% to-green-600">I AM A 
        <span className="text-orange inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
        <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block">
        <li>FULL STACK DEVELOPER</li>
        <li>UI UX DESIGNER</li>
        <li>GRAPHIC DESIGNER</li>
        <li>WEB DESIGNER</li>
        <li>BOOK WRITER</li>
        <li aria-hidden="true">AN ARTIST ALSO ... I LOVE TO WORK CHILDREN ILLUSTRATIONS...</li>
        </ul>
    </span></div>
    <div className="text-lg text-black">
    NICE TO MEET YOU
    </div>
    </div>
    <div className="pt-4  m-2 w-full md:w-1/2">
        <div className="pt-4 px-28  m-2">
        <img className="rounded-md" src={Logo} alt="c" width={300} height={300}/>  
        </div>
    </div>
    </div>
)
}