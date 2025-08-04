import { ExchangeRateResponse } from "@/types/exchangeRate";
import { DateTime } from "luxon";

export default async function SSRPage() {
  const now = DateTime.now().setZone("Asia/Seoul");
  const formatted = now.toFormat("yyyyMM");
  const serviceKey = process.env.TEST_API_KEY;

  const tryFetch = async (ym: string) => {
    const res = await fetch(
      `https://apis.data.go.kr/B190021/mmavXrtInfoInq/getmmavXrtInfoInq?serviceKey=${serviceKey}&inqYm=${ym}&cocuCd=KRW`
    );
    if (!res.ok) throw new Error(`No data for ${ym}`);
    const data: ExchangeRateResponse = await res.json();
    return data;
  };

  let data: ExchangeRateResponse | null = null;

  try {
    data = await tryFetch(formatted);
  } catch (err1) {
    console.warn(err1);

    const prevMonth = now.minus({ months: 1 }).toFormat("yyyyMM");
    try {
      data = await tryFetch(prevMonth);
    } catch (err2) {
      console.error(err2);
    }
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          SSR - Server-Side Rendering
        </h1>
        <p className="text-gray-600 mb-4">
          이 페이지는 매 요청마다 서버에서 실시간으로 렌더링됩니다. 페이지를
          새로고침할 때마다 최신 데이터를 가져옵니다.
        </p>
        <div className="bg-green-50 border border-green-200 rounded-md p-4">
          <p className="text-green-800">
            <strong>렌더링 시간:</strong> {now.toFormat("yyyy-MM-dd HH:mm:ss")}
          </p>
        </div>
      </div>
      {data && data.avrgXrtGrid.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.avrgXrtGrid.map((rate, index) => (
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
  );
}
