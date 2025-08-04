"use client";

import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import { ExchangeRate } from "@/types/exchangeRate";

export default function CSRPage() {
  const [loading, setLoading] = useState(true);
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate[]>([]);

  const fetchData = async () => {
    setLoading(true);
    const now = DateTime.now().setZone("Asia/Seoul");
    const formatted = now.toFormat("yyyyMM");

    const tryFetch = async (ym: string) => {
      const response = await fetch(`/api?inqYm=${ym}&cocuCd=KRW`);
      if (!response.ok) throw new Error("No data for: " + ym);
      const data = await response.json();
      return data;
    };

    try {
      const data = await tryFetch(formatted);
      setExchangeRates(data.avrgXrtGrid);
    } catch (err1) {
      console.warn(err1);

      try {
        const prevMonth = now.minus({ months: 1 }).toFormat("yyyyMM");
        const data = await tryFetch(prevMonth);
        setExchangeRates(data.avrgXrtGrid);
      } catch (err2) {
        console.error(err2);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-black">loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">API TEST</h1>
        {exchangeRates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exchangeRates.map((rate, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-black"
              >
                <h2 className="text-xl font-semibold mb-2">
                  {rate.baseCrcd} to {rate.cocuCd}
                </h2>
                <p>월평균 고시환율: {rate.spcfMmavBltnXrt}</p>
                <p>연평균 고시환율: {rate.spcfYavrBltnXrt}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>환율 정보가 없습니다.</p>
        )}
      </div>
    </div>
  );
}
