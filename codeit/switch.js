// 윤식이는 공연 티켓 판매 프로그램을 개발하고 있습니다.
// 다른 부분은 어느 정도 정리가 되었는데, 좌석 등급에 따라서 가격을 
// 알려주는 부분을 해결하지 못했는데요. 힘들어하는 윤식이를 위해 
// switch문을 활용해서 각 등급이 선택되었을 때 등급에 따라 가격을 표시해주는 checkPrice 함수를 완성해 주세요.

// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요
function checkPrice(grade) {
	// 여기에 코드를 작성하세요
	switch (grade) {
	  case 'R':
	  console.log(`${grade}석은 ${RPrice}만원 입니다.`)
	  break;
	  case 'VIP':
	  console.log(`${grade}석은 ${VIPPrice}만원 입니다.`)
	  break;
	  case 'S':
	  console.log(`${grade}석은 ${SPrice}만원 입니다.`)
	  break;
	  case 'A':
	  console.log(`${grade}석은 ${APrice}만원 입니다.`)
	  break;
	  default :
	  console.log(`VIP, R, S, A 중에서 하나를 선택해 주세요.`)
	}
}

// 테스트 코드
checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');