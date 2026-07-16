// import { useLoaderData } from 'react-router';

// const UpdateOrDetailsIncome = () => {
//   const income = useLoaderData();
//   console.log(income);
//   return (
//     <div>
//       <p>Update Or Details Income</p>

//       {/* income details */}
//       {/* income update */}

//     </div>
//   );
// };

// export default UpdateOrDetailsIncome;

// ===================================================================
import { useState } from 'react';
// import { ArrowLeft } from 'lucide-react';
import { toast } from 'react-toastify';
import { useLoaderData } from 'react-router';

const UpdateOrDetailsIncome = () => {
  const income = useLoaderData();
  // console.log(income);
  const [incomeData, setIncomeData] = useState(income);
  const {
    // _id,
    title,
    type,
    category,
    amount,
    description,
    date,
    email,
    name,
    currency,
    icon,
    color,
  } = incomeData;

  const handleChange = e => {
    const { name, value } = e.target;

    setIncomeData({
      ...incomeData,
      [name]: value,
    });
  };

  const handleUpdateIncome = e => {
    e.preventDefault();

    // API update logic here
    console.log(incomeData);

    toast.success('Income Updated Successfully');
  };

  return (
    <div className="min-h-screen bg-base-200 px-4 py-28">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        {/* <button className="flex items-center gap-2 text-base-content/70 hover:text-primary duration-300 mb-5">
          <ArrowLeft size={18} />
          Back To Income
        </button> */}

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold">
            <span className="bg-linear-to-r from-violet-600 to-fuchsia-800 bg-clip-text text-transparent">
              Update{' '}
            </span>
            <span className="bg-linear-to-r from-[#98ffdd] to-[#a4adaa] bg-clip-text text-transparent">
              Income
            </span>
          </h1>
        </div>

        {/* Form Card */}
        <div className="bg-base-100 shadow-2xl rounded-2xl p-8">
          <form onSubmit={handleUpdateIncome}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Income Title</span>
                </label>

                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  placeholder="Enter income title"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Category */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Category</span>
                </label>

                <select
                  name="category"
                  value={category}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                >
                  <option value="salary">Salary</option>
                  <option value="freelance">Freelance</option>
                  <option value="business">Business</option>
                  <option value="passive">Passive Income</option>
                </select>
              </div>

              {/* Amount */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Amount</span>
                </label>

                <input
                  type="number"
                  name="amount"
                  value={amount}
                  onChange={handleChange}
                  placeholder="Enter amount"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Currency */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Currency</span>
                </label>

                <select
                  name="currency"
                  value={currency}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                >
                  <option value="BDT">BDT</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Date</span>
                </label>

                <input
                  type="date"
                  name="date"
                  value={date}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>

              {/* Type */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Type</span>
                </label>

                <input
                  type="text"
                  name="type"
                  value={type}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>

              {/* Name */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold">User Name</span>
                </label>

                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Email */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>

                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Icon */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Icon Name</span>
                </label>

                <input
                  type="text"
                  name="icon"
                  value={icon}
                  onChange={handleChange}
                  placeholder="Enter icon name"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Color */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Theme Color</span>
                </label>

                <select
                  name="color"
                  value={color}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                >
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="violet">Violet</option>
                  <option value="orange">Orange</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <label className="label">
                <span className="label-text font-semibold">Description</span>
              </label>

              <textarea
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Write income details..."
                className="textarea textarea-bordered w-full h-32"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="btn w-full mt-8 border-none text-white text-lg bg-linear-to-r from-violet-600 to-fuchsia-800 hover:scale-[1.01] duration-300"
            >
              Update Income
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateOrDetailsIncome;
