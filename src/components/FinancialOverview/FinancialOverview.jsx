import { GiExpense, GiMoneyStack } from 'react-icons/gi';
import { MdAccountBalance } from 'react-icons/md';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';

const FinancialOverview = () => {
  return (
    <div>
      <div>
        <p className="pt-25 pb-10 font-bold text-[#5c23be] text-4xl text-center">
          Your Financial Overview
        </p>

        <div className="flex justify-center gap-x-6">
          <div className="bg-[#72CFE7] w-110 h-105 rounded-2xl">
            <p className="px-5 py-10 text-[#3b3b3b] font-semibold text-2xl">
              Balance
            </p>
            <div className="">
              <MdAccountBalance className="text-9xl text-[#ffffffb2] ml-5" />
            </div>
            <div className="flex justify-between px-7 items-center">
              <div className="mt-8 flex flex-col gap-y-6">
                <p className="font-bold text-white text-2xl">1000000 BAL</p>
                <p className="font-bold text-white text-lg">1000000 USD</p>
              </div>
              <RiMoneyDollarCircleFill className="text-8xl text-[#3b3b3bc1] mt-10" />
            </div>
          </div>

          <div className="bg-[#fbc3f1] w-80 h-105 rounded-2xl">
            <p className="px-5 py-10 text-[#3b3b3b] font-semibold text-2xl">
              Income
            </p>
            <div className="">
              <GiMoneyStack className="text-9xl text-[#ffffffb2] ml-5" />
            </div>
            <div className="flex justify-between px-7 items-center">
              <div className="mt-10 flex flex-col gap-y-6">
                <p className="font-bold text-[#3b3b3b] text-2xl">1000000 BAL</p>
                <p className="font-bold text-[#3b3b3b] text-lg">1000000 USD</p>
              </div>
            </div>
          </div>

          <div className="bg-[#fbe4c2] w-80 h-105 rounded-2xl">
            <p className="px-5 py-10 text-[#3b3b3b] font-semibold text-2xl">
              Expenses
            </p>
            <div className="">
              <GiExpense className="text-9xl text-[#ffffffb2] ml-5" />
            </div>
            <div className="flex justify-between px-7 items-center">
              <div className="mt-10 flex flex-col gap-y-6">
                <p className="font-bold text-[#3b3b3b] text-2xl">1000000 BAL</p>
                <p className="font-bold text-[#3b3b3b] text-lg">1000000 USD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialOverview;
