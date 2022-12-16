import { SHOW_ALL, SHOW_COMPLETE } from "../actions";

const initalState = "ALL";

export default function filter(previousState = initalState, action) {
  // 초기값을 설정해주는 부분, 위에서 initalState를 설정해주지 않았을 때는 아래 코드처럼 이용하면 된다.
  // if (previousState === undefined) {
  //   return [];
  // }

  if (action.type === SHOW_COMPLETE) {
    return "COMPLETE";
  }
  if (action.type === SHOW_ALL) {
    return "ALL";
  }

  return previousState;
}
