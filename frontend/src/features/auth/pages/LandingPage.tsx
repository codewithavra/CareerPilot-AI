/**
 * @copyright 2026 codewithavra
 * @license apache-2.0
 */


/**
 *
 * node modules
 */
import { useNavigate } from 'react-router';
import { FaPaperPlane } from 'react-icons/fa';
import { IoSparklesSharp } from "react-icons/io5";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className='relative flex h-dvh w-full flex-col items-center justify-center gap-5 bg-white p-5'>
      {/* Magenta Orb Grid Background */}
      <div
        className='absolute inset-0 z-0'
        style={{
          background: '#e4e8ec',
          backgroundImage: `
     linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
     linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
     radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
   `,
          backgroundSize: '40px 40px, 40px 40px, 100% 100%',
        }}
      />


      {/* Your Content/Components */}

      {/* top bar */}
      <div className='absolute top-5 mx-auto mt-5 flex w-[90%] l justify-between items-center px-2 md:px-10 sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] z-60 border-b pb-5 border-neutral-800 border-dashed'>
        <div className='size-fit flex justify-center items-center font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl gap-2 '>
          <p>CareerPoilot.Ai</p>
          <FaPaperPlane className='size-4 md:size-6' />
        </div>
        <div className='text-sm md:text-md '>
          <button
            onClick={() => navigate('/login')}
            className='cursor-pointer rounded-l-sm border-r border-neutral-300 bg-neutral-950 py-2 pr-3 pl-3 text-white shadow-lg shadow-neutral-700 active:scale-[95%] transition-transform duration-200 ease-in-out'
          >
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            className='cursor-pointer rounded-r-sm border-l border-neutral-300 bg-neutral-950 py-2 pr-3 pl-3 text-white shadow-lg shadow-neutral-700 active:scale-[95%] transition-transform duration-200 ease-in-out'
          >
            Signup
          </button>
        </div>
      </div>


      <div className='z-20 flex h-full w-full flex-col items-center justify-center  text-center sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] border-x border-neutral-700 border-dashed'>

        {/* headline */}
        <div className='w-fit  bg-linear-to-r from-blue-800 via-violet-800 to-orange-700 bg-clip-text text-transparent text-3xl font-bold md:text-5xl lg:text-6xl xl:text-7xl text-wrap py-5 '>
            <h1>Build your ATS friendly Job Winning Resume with AI </h1>
        </div>

        {/* sub heading */}
        <div className=' max-w-full md:max-w-[70%] w-fit  text-neutral-500 font-semibold text-xs md:text-sm lg:text-md xl:text-lg text-wrap px-8 py-3'>
            <p>Generate a professional, ATS optimized resume in minutes. Let AI write, structure, and optimize your resume for the roles you want.</p>
        </div>

        {/* button */}
        <div className='size-fit mt-8'>
            <button
              onClick={() => navigate('/register')}
              className='size-fit px-10 py-3 text-sm md:text-md lg:text-lg xl:text-xl bg-blue-700 text-white shadow-lg shadow-blue-500 rounded-sm cursor-pointer active:scale-[95%] transition-transform duration-200 ease-in-out flex justify-center items-center gap-2'
            >
              <p>Create Your Resume</p>
              <IoSparklesSharp />

            </button>
        </div>
      </div>
    </div>
  );
};


  

  
