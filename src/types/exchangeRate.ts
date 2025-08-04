export interface ExchangeRate {
  baseCrcd: string; // 기준 통화
  cocuCd: string; // 상대 통화
  spcfMmavBltnXrt: number; // 월평균 고시환율
  spcfYavrBltnXrt: number; // 연평균 고시환율
}

export interface ExchangeRateResponse {
  baseYy: string; // 기준 년도
  baseMm: string; // 기준 월
  avrgXrtGridRowCount: number; // 환율 행 개수
  avrgXrtGrid: ExchangeRate[]; // 환율 리스트
}
