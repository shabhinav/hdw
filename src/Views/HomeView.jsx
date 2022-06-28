import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { MATCH_TIMING, MATCH_TYPE } from "../Resources/constant";
import { useSearchData } from "../Services/datasource";

const HomeView = () => {
  const [matchTiming, setMatchTiming] = useState("Upcoming");
  const [matchType, setMatchType] = useState("All");
  const { loading, data, refetch } = useSearchData(matchTiming, matchType);

  useEffect(() => {
    refetch();
  }, [matchTiming, matchType]);

  if (loading) {
    return <p className='bg-jetBlack h-screen text-white'>loading. . .</p>;
  }

  return (
    <div className='bg-jetBlack xs:h-screen'>
      <div className=' md:w-3/6 lg:w-2/5	xl:w-1/4 mx-auto'>
        <div className='py-2 px-4 text-xl'>
          <div className='flex justify-between'>
            {MATCH_TIMING?.map((item) => (
              <p
                onClick={() => setMatchTiming(item)}
                className={`${
                  item === matchTiming ? "text-white" : "text-author"
                } text-base`}
              >
                {item}
              </p>
            ))}
          </div>
          <div className='w-11/12	 m-auto mt-3'>
            <div className=' flex justify-between p-1 px-3 match_type rounded-full'>
              {MATCH_TYPE?.map((item) => (
                <p
                  onClick={() => setMatchType(item)}
                  className={`text-tiny ${
                    item === matchType ? "text-primary" : "text-white"
                  } `}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        {!data?.schedule?.length && (
          <p className='bg-jetBlack h-screen text-white text-center'>
            No Data Available
          </p>
        )}
        {data?.schedule?.map((item) => (
          <Card data={item} />
        ))}
      </div>
    </div>
  );
};

export default HomeView;
