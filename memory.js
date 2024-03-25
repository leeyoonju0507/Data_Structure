// 데이터를 효율적으로 사용하려면: 자료구조

// 메모리 = RAM = Random Access Memory
// 임의 접근 = 접근하는데 O(1)의 시간 복잡도가 걸린다
// 순차 접근 = 접근하는데 O(n)의 시간 복잡도가 걸린다
// 메모리는 메모리 공간의 주소를 알면 임의 접근을 하기 때문에 O(1)의 시간 복잡도로 접근이 가능하다

// 스위치 1개 = on/off = 1/0 = true/false = 1비트
// 메모리 1칸 = 1바이트 = 8비트 = 256 가지의 정보 표현이 가능
// 정수 = 메모리 4칸 = 4바이트 = 32비트 = 2^32 가지의 정보 표현이 가능 = (-2^31) ~ (0) ~ (2^31 - 1)


// C++
// 포인터 = 주소값

// C#, 자바, 파이썬, 자바스크립트, 타입스크립트
// 주소를 저장하는 변수의 별명 = 주소값
// 레퍼런스 변수 = 주소값

// 기본 자료구조: 원리를 배운다
// 1. 배열(array)(동적 / 정적)
// 2. 링크드리스트(싱글리 / 더블리)
// 3. 해쉬테이블
// 4. 트리
// 5. 그래프

// 추상 자료구조: 실제로 사용한다
// 1. 리스트: 순서가 있고 접근 탐색 삭제 삽입 연산이 가능한 추상 자료형 > 동적 배열 또는 링크드 리스트로 구현할 수 있다
// 2. 스택: 맨 뒤 추가 / 맨 뒤 삭제 / 맨 뒤 접근: 동배와 링크리모두로 구현 가능 > 링크리가 유리한 듯?
// 3. 큐: 맨 뒤 추가 / 맨 앞 삭제 / 맨 앞 접근: 동배와 링크리모두로 구현 가능 > 링크리가 유리한 듯?
// 4. 순환큐
// 5. 우선순위큐
// 6. 힙
// 7. 이진탐색트리
