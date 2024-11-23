import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { debounce, isEmpty } from "lodash";
import { z } from "zod";

import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";
import { Grow } from "@mui/material";

import styles from "./styles";
import NasdaqAppBar from "../common/components/AppBar/index.tsx";
import SplashScreen from "./Splash";
import Card from "../common/components/Card";
import { TickersSchema, getTickers } from "../common/services/models.ts";

const useStyles = makeStyles<Theme>(styles);

function App() {
  const classes = useStyles();

  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const [retryCount, setRetryCount] = useState<number>(0);
  const [searchStock, setSearchStock] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  const debouncedSetSearchStock = useMemo(
    () =>
      debounce((value: string) => {
        setDebouncedSearch(value);
      }, 1000),
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setShowSplash(false), 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  type TickerType = z.infer<typeof TickersSchema>;
  const { data, fetchNextPage, hasNextPage, isLoading, error } =
    useInfiniteQuery<TickerType, Error>({
      queryKey: ["tickers", debouncedSearch],
      queryFn: ({ pageParam = null }) =>
        getTickers({
          params: {
            limit: 100,
            cursor: typeof pageParam === "string" ? pageParam : "",
            apiKey: import.meta.env.VITE_POLYGON_API,
            exchange: "XNAS",
            search: debouncedSearch || undefined,
          },
        }),
      getNextPageParam: (lastPage) => {
        if (lastPage.data.next_url) {
          const parsedUrl = new URL(lastPage.data.next_url);
          const cursor = parsedUrl.searchParams.get("cursor");
          return cursor ?? null;
        }
        return null;
      },
      retry: (failureCount) => {
        setRetryCount(failureCount);
        return failureCount < 4;
      },
      retryDelay: (attemptIndex) => Math.min(5000 * 2 ** attemptIndex, 30000),
      initialPageParam: null,
    });

  const tickers = data?.pages.flatMap((page) => page.data.results) ?? [];

  return (
    <>
      {showSplash ? (
        <Grow in={!fadeOut}>
          <div>
            <SplashScreen />
          </div>
        </Grow>
      ) : (
        <Grow in={fadeOut}>
          <div>
            <NasdaqAppBar
              setSearchStock={(value: string) => {
                setSearchStock(value);
                debouncedSetSearchStock(value);
              }}
              searchStock={searchStock}
            />
            {isLoading ? (
              <div className={classes.container}>
                {Array.from({ length: 100 }).map((_, index) => (
                  <div className={classes.row} key={index}>
                    <Card isLoading number={"ad"} label={""} />
                  </div>
                ))}
              </div>
            ) : isEmpty(tickers) && !error ? (
              <>No Data is Available</>
            ) : error && tickers.length === 0 ? (
              <div className={classes.center}>Error loading data</div>
            ) : (
              <InfiniteScroll
                dataLength={tickers.length}
                next={fetchNextPage}
                hasMore={!!hasNextPage && retryCount !== 4}
                loader={<div className={classes.center}>Loading</div>}
              >
                <div className={classes.container}>
                  {tickers.map((item, index) => (
                    <div className={classes.row} key={index}>
                      <Card number={item.ticker} label={item.name} />
                    </div>
                  ))}
                </div>
              </InfiniteScroll>
            )}
          </div>
        </Grow>
      )}
    </>
  );
}

export default App;
