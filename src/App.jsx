
import './App.css';
import photo from './images/image-header-mobile.jpg';
import image from './images/image-header-desktop.jpg';
function App() {
  return (
    <div className="flex-col items-center bg-Dark-desaturated-blue-card-background w-container rounded-md md:flex md:flex-row-reverse md:w-full">
      <header className=" rounded-t-md md:rounded-none md:rounded-r-md  relative">
        <img className='rounded-t-md md:rounded-none md:rounded-r-md md:hidden ' src={photo} alt="a header" />
        <img className=' rounded-r-md hidden md:inline-block' src={image} alt="desktop" />
        <div className=' rounded-t-md md:rounded-none md:rounded-r-md  absolute top-0 w-full h-full bg-Dark-violet opacity-60 hover:opacity-70'></div>
      </header>
      <main className=' flex text-center flex-col p-9 font-mainthing font-normal gap-5 md:text-left md:w-desktop  md:mx-12'>
        <h1 className=' text-3xl font-title font-bold text-White-main-heading-stats'>Get <span className=' text-Soft-violet-accent'>insights</span> that help your business grow.</h1>
        <p className=' leading-7 text-Slightly-transparent-white-main-paragraph'>Discover the benefits of data analytics and make better decisions regarding revenus, customer experience, and overall efficiency.</p>
        <div className='flex flex-col gap-7 mt-7 md:flex-row'>
          <div>
            <p className=' text-2xl font-title font-bold text-White-main-heading-stats hover:text-Soft-violet-accent cursor-pointer'>10k+</p>
            <p className=' uppercase text-Slightly-transparent-white-stat-headings'>companies</p>
          </div>
          <div>
            <p className=' text-2xl font-title font-bold text-White-main-heading-stats hover:text-Soft-violet-accent cursor-pointer'>314</p>
            <p className=' uppercase text-Slightly-transparent-white-stat-headings'>templates</p>
          </div>
          <div>
            <p className=' text-2xl font-title font-bold text-White-main-heading-stats hover:text-Soft-violet-accent cursor-pointer'>12M+</p>
            <p className=' uppercase text-Slightly-transparent-white-stat-headings'>queries</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
