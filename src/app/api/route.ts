export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const inqYm = searchParams.get("inqYm");
  const cocuCd = searchParams.get("cocuCd");

  const res = await fetch(
    `https://apis.data.go.kr/B190021/mmavXrtInfoInq/getmmavXrtInfoInq?serviceKey=${process.env.NEXT_PUBLIC_TEST_API_KEY}&inqYm=${inqYm}&cocuCd=${cocuCd}`
  );
  const data = await res.json();

  return Response.json(data);
}
