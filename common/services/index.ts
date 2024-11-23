import axios from "axios";

export type TickersParams = {
  params: {
    apiKey: string;
    limit: number;
    exchange: string;
    cursor?: string;
    search?: string;
  };
};
const fetchTickers = async ({ params }: TickersParams) => {
  const response = await axios.get(
    `https://api.polygon.io/v3/reference/tickers`,
    { params }
  );
  return response;
};

export default { fetchTickers };
