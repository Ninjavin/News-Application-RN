import React from "react";
import { Text } from "native-base";
import moment from "moment";

const Time = (props) => {
  let date = props.time;
  const time = moment(date || moment.now()).fromNow();
  return <Text sub>{time}</Text>;
};

export default Time;
