import { ExchangeRateResponse } from "@/types/exchangeRate";
import { DateTime } from "luxon";

export const revalidate = 3600;

export default async function SSGPage() {
  const now = DateTime.now().setZone("Asia/Seoul");
  const formatted = now.toFormat("yyyyMM");
  const serviceKey = process.env.TEST_API_KEY;

  const tryFetch = async (ym: string) => {
    const res = await fetch(
      `https://apis.data.go.kr/B190021/mmavXrtInfoInq/getmmavXrtInfoInq?serviceKey=${serviceKey}&inqYm=${ym}&cocuCd=KRW`,
      {
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) throw new Error(`No data for ${ym}`);
    const data: ExchangeRateResponse = await res.json();
    return data;
  };

  let data: ExchangeRateResponse | null = null;

  try {
    data = await tryFetch(formatted);
  } catch (err1) {
    console.warn(
      "Current month data unavailable, trying previous month...",
      err1
    );

    const prevMonth = now.minus({ months: 1 }).toFormat("yyyyMM");
    try {
      data = await tryFetch(prevMonth);
    } catch (err2) {
      console.error("Error fetching data for both months:", err2);
    }
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          SSG - Static Site Generation
        </h1>
        <p className="text-gray-600 mb-4">
          이 페이지는 빌드 시간에 정적으로 생성되었습니다. ISR(Incremental
          Static Regeneration)로 1시간마다 업데이트됩니다.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
          <p className="text-blue-800">
            <strong>빌드 시간:</strong>
            {DateTime.now()
              .setZone("Asia/Seoul")
              .toFormat("yyyy-MM-dd HH:mm:ss")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
  );
}
