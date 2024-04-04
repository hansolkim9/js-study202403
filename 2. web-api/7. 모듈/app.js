
import { $btn as $button } from "./getDom.js"; // 불러온 변수
import { clickHandler } from "./event.js";
import wow from "./pow.js";

const pow = () => {
    console.log('pow pow pow pow pow pow pow pow pow !!');
};

const $btn = '11'; // 내가만든 변수
console.log(`내가만든 btn: ${$btn}`);
console.log(`불러온 btn:`, $button);

console.log(wow.pow(5));
pow();
console.log(wow.add(3, 4));

// event.js에서 만든 이벤트 핸들러 등록
$button.addEventListener('click', clickHandler);