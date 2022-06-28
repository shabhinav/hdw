import React from "react";
import { Line } from "rc-progress";

const Card = ({ data }) => {
  return (
    <div className='rounded-lg p-4 text-grey mt-4'>
      <div className='flex justify-between'>
        <p className='text-left'>{data?.seriesName}</p>
      </div>
      <p className='text-left rounded-lg '>{data?.league}</p>
      <div>
        <div className='flex justify-between'>
          <p>
            {data?.homeTeamName}
            <span className='ml-1 break-words'>
              ({data?.matchScore[0]?.teamFullName})
            </span>
          </p>
          <p className='text-left'>{data?.matchType}</p>
          <p>
            {data?.awayTeamName}
            <span className='ml-1 break-words'>
              ({data?.matchScore[1]?.teamFullName})
            </span>
          </p>
        </div>
      </div>
      <div className='mt-4'>
        <p>{data?.matchdate}</p>
      </div>
      <div>
        <p className='text-left'>Win percentage</p>
        <div className='mt-3'>
          <Line
            percent={data?.teamsWinProbability?.homeTeamPercentage}
            strokeWidth={2}
            strokeColor='#D3D3D3'
          />
        </div>
        <ul className='flex justify-between'>
          <li>{data?.teamsWinProbability?.homeTeamShortName}</li>
          <li>{data?.teamsWinProbability?.awayTeamShortName}</li>
        </ul>
        <ul className='flex justify-between'>
          <li>
            {data?.teamsWinProbability?.homeTeamPercentage}
            {data?.teamsWinProbability?.homeTeamPercentage && "%"}
          </li>
          <li>
            {data?.teamsWinProbability?.awayTeamPercentage}
            {data?.teamsWinProbability?.awayTeamPercentage && "%"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
