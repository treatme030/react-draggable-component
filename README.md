<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black"><img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

## 🖱 react-draggable-component
### 🔸요구 사항
   * Draggable 컴포넌트를 생성하여 라이브러리 없이 Box 컴포넌트를 드래그 가능하게 만들기
     * Box 컴포넌트에 마우스 이벤트 설정 및 적용(다른 부분 드래그시 Box 컴포넌트 드래그 안됨)
     * event.pageX, event.pageY를 이용해서 Box 컴포넌트의 x, y 좌표 계산하고, 위치 설정
     
   * 드래그 가능 영역이 현재 화면을 넘어가지 않도록 하기
     * 이동한 x, y 값이 0보다 크거나 작은 경우를 조건으로 설정하고,<br/>이동한 x, y 값을 화면의 넓이와 비교해서 화면에서 벗어나지 않는 값 적용
     * 마우스를 누른 상태로 마우스 포인터가 화면 밖으로 나가서 움직이는 경우<br/> 
     => 화면 왼쪽, 오른쪽으로 나가는 경우 : y값만 변경되고, y축으로 이동 가능<br/>
     => 화면 위쪽, 아래쪽으로 나가는 경우 : x값만 변경되고, x축으로 이동 가능
     
### 🔸기타
   * 렌더링 최적화
     * useCallback 함수를 사용하여 렌더링될 때 만들었던 함수 재사용
     
### 🔸테스트
   * 브라우저 호환성(Cross Browsing) 확인
   
   ![box3](https://user-images.githubusercontent.com/74355328/148484261-d8373434-6a04-4464-a74c-85786d6a4092.gif)
