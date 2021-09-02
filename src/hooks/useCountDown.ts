import dayjs, { Dayjs } from "dayjs";
import { useState, useEffect, useReducer } from "react";
import { getDefaultLibFilePath } from "typescript";

const useCountDown = (endTime: Dayjs) => {
  const [data, setData] = useState<{
    h: number;
    m: number;
    s: number;
    isFinished: boolean;
  }>({ h: 0, m: 0, s: 0, isFinished: true });
  useEffect(() => {
    const id: NodeJS.Timer = setInterval(() => {
      const now = dayjs();

      const diffInHour = dayjs(endTime).diff(now, "hour");
      const diffInMinute = dayjs(endTime).diff(now, "minute") - diffInHour * 60;
      const diffInSecond =
        dayjs(endTime).diff(now, "second") -
        (diffInMinute * 60 + diffInHour * 3600);

      if (diffInHour <= 0 && diffInMinute <= 0 && diffInSecond <= 0) {
        setData({
          h: 0,
          m: 0,
          s: 0,
          isFinished: true,
        });
        clearInterval(id);
      } else {
        setData({
          h: diffInHour,
          m: diffInMinute,
          s: diffInSecond,
          isFinished: false,
        });
      }
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return [data];
};

export default useCountDown;
