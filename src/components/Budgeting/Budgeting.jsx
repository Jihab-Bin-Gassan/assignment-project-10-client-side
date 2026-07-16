import { useEffect } from "react";
import { useLocation } from "react-router";

const Budgeting = () => {
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
      id="budgeting"
      className="py-16 bg-linear-to-br from-[#72CFE7]/30 via-[#fbc3f1]/20 to-[#fbe4c2] my-30 rounded-2xl"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#5c23be]">
            Smart Budgeting, Better Tomorrow
          </h2>
          <p className="text-gray-600 mt-3">
            Manage your money wisely with simple and effective budgeting habits.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="card bg-[#72CFE7]/30 shadow-md hover:shadow-xl transition">
            <div className="card-body items-center text-center">
              <div className="p-3 rounded-full bg-[#72CFE7] text-white text-xl">
                💰
              </div>
              <h3 className="font-semibold text-[#5c23be] mt-2">
                Track Spending
              </h3>
              <p className="text-sm text-gray-500">
                Know where your money goes.
              </p>
            </div>
          </div>

          <div className="card bg-[#72CFE7]/30 shadow-md hover:shadow-xl transition">
            <div className="card-body items-center text-center">
              <div className="p-3 rounded-full bg-[#fbe4c2] text-white text-xl">
                🎯
              </div>
              <h3 className="font-semibold text-[#5c23be] mt-2">Set Goals</h3>
              <p className="text-sm text-gray-500">
                Plan short & long-term targets.
              </p>
            </div>
          </div>

          <div className="card bg-[#72CFE7]/30 shadow-md hover:shadow-xl transition">
            <div className="card-body items-center text-center">
              <div className="p-3 rounded-full bg-[#fbc3f1] text-white text-xl">
                💡
              </div>
              <h3 className="font-semibold text-[#5c23be] mt-2">
                Save Smartly
              </h3>
              <p className="text-sm text-gray-500">Save a portion regularly.</p>
            </div>
          </div>

          <div className="card bg-[#72CFE7]/30 shadow-md hover:shadow-xl transition">
            <div className="card-body items-center text-center">
              <div className="p-3 rounded-full bg-[#72CFE7] text-white text-xl">
                📊
              </div>
              <h3 className="font-semibold text-[#5c23be] mt-2">
                Review Budget
              </h3>
              <p className="text-sm text-gray-500">
                Adjust and improve monthly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Budgeting;
