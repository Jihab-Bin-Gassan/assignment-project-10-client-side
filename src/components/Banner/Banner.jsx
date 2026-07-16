import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

const Banner = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');

      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <section
      className="bg-linear-to-br from-[#72CFE7]/30 via-[#fbc3f1]/20 to-[#fbe4c2] py-20"
      id="branding"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#5c23be] leading-tight">
            Smart finance starts here—track, save, and grow with ease.
          </h1>

          <p className="mt-5 text-gray-600 text-lg">
            Take control of your income, expenses, and savings goals with
            FinEase. Visualize your finances, stay on budget, and build a secure
            future—one step at a time.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">
            <button className="btn bg-[#5c23be] text-white hover:bg-[#4a1ea3] border-none">
              Get Started <ArrowRight size={18} />
            </button>

            <button className="btn btn-outline border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-white">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Glow Background */}
            <div className="absolute inset-0 bg-linear-to-tr from-[#5c23be]/30 to-[#10B981]/30 blur-3xl rounded-full"></div>

            {/* Image Card */}
            <div className="relative bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl">
              <img
                src="https://img.freepik.com/free-vector/financial-dashboard-concept-illustration_114360-1772.jpg"
                alt="finance dashboard"
                className="w-[320px] md:w-96 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
