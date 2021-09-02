import React from "react";

interface Props {
  hour: number;
  minute: number;
  second: number;
  isFinished: boolean;
}
const defaultProps: Props = {
  hour: 0,
  minute: 0,
  second: 0,
  isFinished: false,
};

const Timer: React.FC<Props> = ({ hour, minute, second, isFinished }) => {
  return (
    <div style={{ color: "red" }}>
      {isFinished ? (
        <div>تمووووم</div>
      ) : (
        <div>
          <span style={{ marginRight: "1.2rem" }}>{hour}</span>
          <span style={{ marginRight: "1.2rem" }}>{minute}</span>
          <span style={{ marginRight: "1.2rem" }}>{second}</span>
        </div>
      )}
    </div>
  );
};

Timer.defaultProps = defaultProps;
export default Timer;
