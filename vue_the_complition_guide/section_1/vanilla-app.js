const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

const addGoal = () => {
  // 1) 인풋 값
  const enteredValue = inputEl.value;
  // 2) li 마크업 생성
  const listItemEl = document.createElement("li");
  // 3) li 값 주입
  listItemEl.textContent = enteredValue;
  // 4) li -> ul에 주입
  listEl.appendChild(listItemEl);
  // 5) 인풋 값 삭제
  inputEl.value = "";
};
// 인자로 들어가는 콜백 함수는 실행이 아닌 참조임
// addGoal() => (x) / addGoal => (o)
buttonEl.addEventListener("click", addGoal);
