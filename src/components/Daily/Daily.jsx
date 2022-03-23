import React from "react";

import { useGetStickers } from './hooks/getStickers';
import { DailyRendering } from './DailyRendering';

const Daily = () => {
    return (
      <DailyRendering useGetStickers={useGetStickers} />
    )
}

export default Daily;
