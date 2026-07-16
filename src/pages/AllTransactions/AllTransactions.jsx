// // import Footer from '../../components/Footer/Footer';
// // import Navbar from '../../components/Navbar/Navbar';

// import { useEffect, useState } from 'react';
// import MyTransactions from '../../components/MyTransactions/MyTransactions';

// const AllTransactions = () => {
//   const [transactions, setTransactions] = useState([]);
//   // const [loading, setLoading] = useState(true);
//   console.log(transactions);

//   useEffect(() => {
//     fetch('http://localhost:3000/transactions')
//       .then(res => res.json())
//       .then(data => {
//         setTransactions(data);
//         // setLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       {/* <h3>My transaction</h3> */}
//       {transactions.map((transaction, index) => (
//         <MyTransactions
//           transaction={transaction}
//           index={index}
//           key={transaction._id}
//         ></MyTransactions>
//       ))}
//     </div>
//   );
// };

// export default AllTransactions;

// ==================================================================================
import { use, useEffect, useRef, useState } from 'react';
import MyTransactions from '../../components/MyTransactions/MyTransactions';
import { AuthContext } from '../../provider/AuthContext';
// import { toast } from 'react-toastify';
import { CalendarDays, CircleX, FileText, Wallet } from 'lucide-react';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import { IoIosArrowBack } from 'react-icons/io';
// import withReactContent from 'sweetalert2-react-content';

// const MySwal = withReactContent(Swal);

const AllTransactions = () => {
  const { user } = use(AuthContext);
  const [transactions, setTransactions] = useState([]);

  const [sortedTransactions, setSortedTransactions] = useState([]);

  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const detailsRef = useRef(null);

  const updateRef = useRef(null);
  console.log(transactions);

  const totalCategoryAmount = transactions
    .filter(
      transaction =>
        transaction.category === selectedTransaction?.category &&
        transaction.type === selectedTransaction?.type,
    )
    .reduce((total, transaction) => total + Number(transaction.amount), 0);

  useEffect(() => {
    // fetch(`http://localhost:3000/transactions?email=${user?.email}`)
    fetch(`http://localhost:3000/transactions`)
      .then(res => res.json())
      .then(data => {
        setTransactions(data);
        setSortedTransactions(data);
      });
  }, [user]);

  const handleView = transaction => {
    setSelectedTransaction(transaction);

    detailsRef.current.showModal();
  };

  const handleEdit = transaction => {
    setSelectedTransaction(transaction);

    updateRef.current.showModal();
  };

  const handleUpdate = e => {
    e.preventDefault();

    const form = e.target;

    const updatedData = {
      title: form.title.value,

      amount: Number(form.amount.value),

      category: form.category.value,

      date: form.date.value,

      type: form.type.value,

      description: form.description.value,
    };

    fetch(`http://localhost:3000/transactions/${selectedTransaction._id}`, {
      method: 'PATCH',

      headers: {
        'content-type': 'application/json',
      },

      body: JSON.stringify(updatedData),
    })
      .then(res => res.json())

      .then(() => {
        // setTransactions(prev =>
        //   prev.map(item =>
        //     item._id === selectedTransaction._id
        //       ? { ...item, ...updatedData }
        //       : item,
        //   ),
        // );
        const updatedList = transactions.map(item =>
          item._id === selectedTransaction._id
            ? { ...item, ...updatedData }
            : item,
        );

        setTransactions(updatedList);
        setSortedTransactions(updatedList);

        // toast.success('Updated Successfully');

        Swal.fire({
          title: 'Update Successfully',
          text: 'Now check the updated transaction',
          icon: 'success',
        });

        updateRef.current.close();
      });
  };

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed)
        fetch(
          `http://localhost:3000/transactions/${id}`,

          {
            method: 'DELETE',
          },
        )
          .then(res => res.json())

          .then(() => {
            // setTransactions(prev => prev.filter(item => item._id !== id));

            const updatedList = transactions.filter(item => item._id !== id);

            setTransactions(updatedList);
            setSortedTransactions(updatedList);

            // toast.success('Deleted Successfully');

            Swal.fire({
              title: 'Deleted!',
              text: 'Your transaction has been deleted.',
              icon: 'success',
            });
          });
    });
  };

  const handleSort = value => {
    let sorted = [...transactions];

    switch (value) {
      case 'default':
        sorted = [...transactions];
        break;

      case 'amountHigh':
        sorted.sort((a, b) => Number(b.amount) - Number(a.amount));
        break;

      case 'amountLow':
        sorted.sort((a, b) => Number(a.amount) - Number(b.amount));
        break;

      case 'income':
        sorted.sort((a, b) => {
          if (a.type === b.type) return 0;
          return a.type === 'Income' ? -1 : 1;
        });
        break;

      case 'expense':
        sorted.sort((a, b) => {
          if (a.type === b.type) return 0;
          return a.type === 'Expense' ? -1 : 1;
        });
        break;

      // category
      case 'salary':
        sorted.sort((a, b) => {
          if (a.category === b.category) return 0;
          return a.category === 'salary' ? -1 : 1;
        });
        break;

      case 'freelance':
        sorted.sort((a, b) => {
          if (a.category === b.category) return 0;
          return a.category === 'freelance' ? -1 : 1;
        });
        break;

      case 'business':
        sorted.sort((a, b) => {
          if (a.category === b.category) return 0;
          return a.category === 'business' ? -1 : 1;
        });
        break;

      case 'transport':
        sorted.sort((a, b) => {
          if (a.category === b.category) return 0;
          return a.category === 'transport' ? -1 : 1;
        });
        break;

      case 'investment':
        sorted.sort((a, b) => {
          if (a.category === b.category) return 0;
          return a.category === 'investment' ? -1 : 1;
        });
        break;

      case 'bill':
        sorted.sort((a, b) => {
          if (a.category === b.category) return 0;
          return a.category === 'bill' ? -1 : 1;
        });
        break;

      case 'rent':
        sorted.sort((a, b) => {
          if (a.category === b.category) return 0;
          return a.category === 'rent' ? -1 : 1;
        });
        break;

      case 'food':
        sorted.sort((a, b) => {
          if (a.category === b.category) return 0;
          return a.category === 'food' ? -1 : 1;
        });
        break;

      case 'buy':
        sorted.sort((a, b) => {
          if (a.category === b.category) return 0;
          return a.category === 'buy' ? -1 : 1;
        });
        break;

      case 'others':
        sorted.sort((a, b) => {
          if (a.category === b.category) return 0;
          return a.category === 'others' ? -1 : 1;
        });
        break;

      case 'newest':
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;

      case 'oldest':
        sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;

      default:
        sorted = [...transactions];
    }

    setSortedTransactions(sorted);
  };

  return (
    <div className="max-w-11/12 mx-auto py-15">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#5c23be]">
          All Of Your Transactions Are Here
        </h2>
        <p className="text-gray-600 mt-3">
          Check and update your transactions if necessary.
        </p>
      </div>

      {transactions.length > 0 ? (
        <>
          <div className="flex justify-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn">
                Sort By
              </label>

              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box w-56 shadow"
              >
                <li>
                  <summary onClick={() => handleSort('default')}>
                    Default
                  </summary>
                </li>
                <li>
                  <details>
                    <summary>Date</summary>

                    <ul>
                      <li>
                        <a onClick={() => handleSort('newest')}>Newest</a>
                      </li>

                      <li>
                        <a onClick={() => handleSort('oldest')}>Oldest</a>
                      </li>
                    </ul>
                  </details>
                </li>

                <li>
                  <details>
                    <summary>Amount</summary>

                    <ul>
                      <li>
                        <a onClick={() => handleSort('amountHigh')}>
                          High → Low
                        </a>
                      </li>

                      <li>
                        <a onClick={() => handleSort('amountLow')}>
                          Low → High
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>

                <li>
                  <details>
                    <summary>Type</summary>

                    <ul>
                      <li>
                        <a onClick={() => handleSort('income')}>Income First</a>
                      </li>

                      <li>
                        <a onClick={() => handleSort('expense')}>
                          Expense First
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>

                <li>
                  <details>
                    <summary>Category</summary>

                    <ul>
                      <li>
                        <a onClick={() => handleSort('salary')}>Salary</a>
                      </li>
                      <li>
                        <a onClick={() => handleSort('freelance')}>Freelance</a>
                      </li>
                      <li>
                        <a onClick={() => handleSort('business')}>Business</a>
                      </li>
                      <li>
                        <a onClick={() => handleSort('transport')}>Transport</a>
                      </li>
                      <li>
                        <a onClick={() => handleSort('investment')}>
                          Investment
                        </a>
                      </li>
                      <li>
                        <a onClick={() => handleSort('bill')}>Bill</a>
                      </li>
                      <li>
                        <a onClick={() => handleSort('rent')}>Rent</a>
                      </li>
                      <li>
                        <a onClick={() => handleSort('food')}>Food</a>
                      </li>
                      <li>
                        <a onClick={() => handleSort('buy')}>Buy</a>
                      </li>
                      <li>
                        <a onClick={() => handleSort('others')}>Others</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
          <div className="overflow-x-auto border-y border-neutral-200 mb-16 mt-4">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>#</th>

                  <th>User</th>

                  <th>Category</th>

                  <th>Amount</th>

                  <th>Date</th>

                  <th>Type</th>

                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {/* {transactions.map((transaction, index) => (
              <MyTransactions
                key={transaction._id}
                transaction={transaction}
                index={index}
                user={user}
                handleView={handleView}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))} */}
                {sortedTransactions.map((transaction, index) => (
                  <MyTransactions
                    key={transaction._id}
                    transaction={transaction}
                    index={index}
                    user={user}
                    handleView={handleView}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <p className="py-10 text-xl text-gray-400 text-center">
            Still, no transactions are added. Please create a transaction first.
            Then check the transaction data.
          </p>
          <div className="flex justify-center">
            <Link
              to={'/addTransactions'}
              className="my-8 border-none text-white text-lg bg-linear-to-r from-violet-500 hover:from-violet-600 to-fuchsia-800 hover:scale-[1.10] duration-300 rounded-2xl py-2 px-5 flex items-center gap-2"
            >
              <IoIosArrowBack className="text-4xl" />
              Add Transactions
            </Link>
          </div>
        </>
      )}

      {/* ================================================= */}
      <dialog ref={detailsRef} className="modal">
        <div className="modal-box rounded-3xl max-w-lg max-h-[90vh]">
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="p-3 rounded-2xl bg-linear-to-r from-violet-500 to-fuchsia-500 text-white">
              <FileText size={24} />
            </div>

            <div>
              <h3 className="text-2xl font-bold">Transaction Details</h3>

              <p className="text-sm opacity-60">
                Complete transaction information
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div className="bg-base-200 rounded-2xl p-4">
              <p className="text-sm opacity-60 mb-1">Transaction Type</p>

              <h2 className="font-bold text-lg">
                {selectedTransaction?.title}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-base-200 rounded-2xl p-4">
                <p className="text-sm opacity-60 mb-1">Amount</p>

                <h2
                  className={`font-bold text-lg ${
                    selectedTransaction?.type === 'Income'
                      ? 'text-green-600'
                      : 'text-red-500'
                  }`}
                >
                  ৳ {selectedTransaction?.amount}
                </h2>
              </div>

              <div className="bg-base-200 rounded-2xl p-4">
                <p className="text-sm opacity-60 mb-1">Category</p>

                <h2 className="font-bold capitalize">
                  {selectedTransaction?.category}
                </h2>
              </div>
              <div className="bg-base-200 rounded-2xl p-4">
                <p className="text-sm opacity-60 mb-1">Date</p>

                <h2 className="font-bold capitalize">
                  {new Date(selectedTransaction?.date).toLocaleDateString()}
                </h2>
              </div>
              <div className="bg-base-200 rounded-2xl p-4">
                <p className="text-sm opacity-60 mb-1">Type</p>

                <h2 className="font-bold capitalize">
                  {selectedTransaction?.type}
                </h2>
              </div>
            </div>

            <div className="bg-base-200 rounded-2xl p-4">
              <p className="text-sm opacity-60 mb-1">Description</p>

              <p className="leading-relaxed">
                {selectedTransaction?.description}
              </p>
            </div>
            <div className="bg-base-200 rounded-2xl p-4">
              <p className="text-sm opacity-60 mb-1">
                Total Amount Of This Category & Type
              </p>

              <h2
                className={`font-bold text-lg ${
                  selectedTransaction?.type === 'Income'
                    ? 'text-green-600'
                    : 'text-red-500'
                }`}
              >
                $ {totalCategoryAmount}
              </h2>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-end mt-8">
            <button
              className="btn border-none text-white rounded-xl bg-linear-to-r from-rose-500 to-red-600"
              onClick={() => detailsRef.current.close()}
            >
              <CircleX size={18} />
              Close
            </button>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      {/* ================================================= */}

      <dialog ref={updateRef} className="modal">
        <div className="modal-box rounded-3xl max-w-2xl p-0 max-h-[90vh] overflow-y-auto">
          {/* Top Gradient */}
          <div className="h-2 bg-linear-to-r from-violet-600 via-fuchsia-500 to-blue-500"></div>

          <div className="p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-linear-to-r from-violet-500 to-fuchsia-500 text-white">
                <FileText size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-bold">Update Transaction</h3>

                <p className="text-sm opacity-60">
                  Modify transaction information
                </p>
              </div>
            </div>

            <form onSubmit={handleUpdate}>
              {/* Title */}
              <div className="bg-base-200 rounded-2xl p-4 mb-4">
                <label className="font-semibold mb-2 block">Title</label>

                <input
                  name="title"
                  defaultValue={selectedTransaction?.title}
                  className="input input-bordered w-full rounded-xl"
                />
              </div>

              {/* Amount */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-base-200 rounded-2xl p-4">
                  <label className="font-semibold mb-2 block">Amount</label>

                  <input
                    name="amount"
                    type="number"
                    defaultValue={selectedTransaction?.amount}
                    className="input input-bordered w-full rounded-xl"
                  />
                </div>

                {/* Category */}
                <div className="bg-base-200 rounded-2xl p-4">
                  <label className="font-semibold mb-2 block">Category</label>

                  <select
                    name="category"
                    defaultValue={selectedTransaction?.category}
                    className="select select-bordered w-full rounded-xl"
                  >
                    <option value="salary">Salary</option>
                    <option value="freelance">Freelance</option>
                    <option value="business">Business</option>
                    <option value="transport">Transport</option>
                    <option value="investment">Investment</option>
                    <option value="bill">Bill</option>
                    <option value="rent">Rent</option>
                    <option value="food">Food</option>
                    <option value="buy">Buy</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                {/* Date */}
                <div className="bg-base-200 rounded-2xl p-4">
                  <label className="label">
                    <span className="label-text font-semibold">Date</span>
                  </label>

                  <label className="input input-bordered flex items-center gap-3 rounded-xl">
                    <CalendarDays size={18} className="text-pink-500" />

                    <input
                      type="date"
                      name="date"
                      // onChange={handleChange}
                      className="grow"
                    />
                  </label>
                </div>

                {/* Type */}
                <div className="bg-base-200 rounded-2xl p-4">
                  <label className="label">
                    <span className="label-text font-semibold">Type</span>
                  </label>

                  <label className="input input-bordered flex items-center gap-3 rounded-xl">
                    <Wallet size={18} className="text-orange-500" />

                    <select
                      name="type"
                      defaultValue="Expense"
                      // onChange={handleChange}
                      className="w-full bg-transparent outline-none"
                    >
                      <option value="Income">Income</option>
                      <option value="Expense">Expense</option>
                    </select>
                  </label>
                </div>
              </div>

              {/* Description */}

              <div className="bg-base-200 rounded-2xl p-4">
                <label className="font-semibold mb-2 block">Description</label>

                <textarea
                  name="description"
                  defaultValue={selectedTransaction?.description}
                  className="textarea textarea-bordered w-full h-28 rounded-xl resize-none"
                />
              </div>

              {/* Buttons */}

              <div className="flex justify-end gap-3 mt-8">
                <button
                  type="submit"
                  className="btn border-none text-white rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-500 hover:scale-105 duration-300"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => updateRef.current.close()}
                  className="btn border-none text-white rounded-xl bg-linear-to-r from-rose-500 to-red-600 hover:scale-105 duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default AllTransactions;
