// fot 반복문

// for (초기화부분; 조건부분; 추가동작부분) {
//    동작부분
//  추가동작부분을 위 말고 아래 i++ 작성해도된다.
// }

// 초기화부분에서 생성한 변수는 for문의 로컬변수다.

//for 반복문을 사용하여 1 이상 100 이하의 짝수를 모두 출력해 보세요.

// 해설1
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
}
// 해설 2
for (let i = 1; i <= 1000; i++) {
    console.log(i * 2);
}

// 해설 3
for (let i = 2; i <= 100; i++) {
    console.log(i);
}

//주어진 높이(height)에 맞게 '*'로 삼각형을 그려주는 함수 printTriangle을 완성해 봅시다.
function printTriangle(height) {
    // 여기에 코드를 작성해 주세요.
    let message = '';
    for (let i = 0; i < height; i++) {
      message += '*';
      console.log(message);
    }
  }
