import { z } from "zod";
import services from "./index";

const TickerSchema = z
  .object({
    ticker: z.string(),
    name: z.string(),
  })
  .transform((tickerInfo) => ({
    ticker: tickerInfo.ticker,
    name: tickerInfo.name,
  }));

export const TickersSchema = z
  .object({
    next_url: z.string(),
    results: z.array(TickerSchema),
  })
  .transform((tickerData) => ({
    data: {
      next_url: tickerData.next_url,
      results: tickerData.results,
    },
  }));

export type TickerType = z.infer<typeof TickerSchema>;

export type TickersParams = {
  params: {
    apiKey: string;
    limit: number;
    exchange: string;
    cursor?: string;
    search?: string;
  };
};

export const getTickers = async ({ params }: TickersParams) => {
  const { data } = await services.fetchTickers({
    params,
  });

  return TickersSchema.parse(data);
};
