/**
 * rn-animation
 * Created by leduong on 11/12/2020
 */

import {
  block,
  clockRunning,
  cond,
  Easing,
  set,
  startClock,
  timing,
  Value,
} from 'react-native-reanimated';

function runTiming(clock, value, dest,duration) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration,
    toValue: new Value(0),
    easing: Easing.linear,
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    timing(clock, state, config),
    set(value, state.position),
  ]);
}

export default runTiming
