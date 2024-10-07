import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_API_URL } from "../../constants/constants";

const Bnbtransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBnbTransactions = async () => {
    setLoading(true);
    const res = await axios.get(`${BACKEND_API_URL}/transactions/bsc`);
    setTransactions(res.data.EVM.Transactions);
    setLoading(false);
  }
console.log(transactions, 'trasnacss')
  useEffect(() => {
    fetchBnbTransactions();
  }, []);

  return (
    <div className="nyxToolkit nyxBorderTop nyxContainer" id="usecases">
      <div className="nyxBorderX">
        <div className="relative ">
          <div className="2xl:mx-[155px] xl:mx-[120px] lg:mx-[95px] md:mx-[60px] sm:mx-[30px] mx-[6px] xl:pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[40px] pt-[40px] md:pb-[22px] sm:pb-[16px] pb-[16px] text-center">
            <p className="bg-gradient-to-r from-[#5AB0FF] to-[#01FFC2] inline-block text-transparent bg-clip-text font-regular text-[16px] sm:text-[24px] font-[RobotoMono]">
              Latest Transactions
            </p>
            <h1 className=" text-white text-[26px] sm:text-[35px] md:text-[57px] font-[VioletSans]">
              10 Whale Accounts:{" "}
              <font className="bg-gradient-to-r from-[#5AB0FF] to-[#01FFC2] inline-block text-transparent bg-clip-text">
                Binance network
              </font>
            </h1>
          </div>
          
          <div className="transaction-list px-6 py-4 overflow-hidden">
            {transactions.length > 0 ? (
              <table className="min-w-full border border-gray-200 overflow-x-scroll">
                <thead>
                  <tr className="bg-transparent text-gray-300">
                    <th className="px-4 py-2 border border-zinc-700 text-start">Block Time</th>
                    <th className="px-4 py-2 border border-zinc-700 text-start">Block Number</th>
                    <th className="px-4 py-2 border border-zinc-700 text-start">Transaction Hash</th>
                    <th className="px-4 py-2 border border-zinc-700 text-start">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx, index) => (
                    <tr key={index} className="text-gray-300 text-center">
                      <td className="px-4 py-2 border border-zinc-700 text-start">{tx.Block.Time}</td>
                      <td className="px-4 py-2 border border-zinc-700 text-start">{tx.Block.Number}</td>
                      <td className="px-4 py-2 border border-zinc-700 text-start">
                        <a
                          href={`https://bscscan.com/tx/${tx.Transaction.Hash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          {tx.Transaction.Hash}
                        </a>
                      </td>
                      <td className="px-4 py-2 border border-zinc-700 text-start">{tx.Transaction.Cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-white">Loading transactions...</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Bnbtransactions;
