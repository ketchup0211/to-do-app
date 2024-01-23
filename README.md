# to-do-app

1. **JSX 문법**이란 무엇일까요?<br>
   : JSX(JavaScript XML)는 JavaScript의 확장 문법으로, React에서 UI를 구성하는 데 사용되는 문법입니다. JSX는 JavaScript 코드 안에 HTML 스타일의 코드를 작성할 수 있게 해 주어, 컴포넌트의 UI 구조를 더 직관적이고 가독성 있게 표현할 수 있도록 도와줍니다.<br>

2. 사용자가 입력하는 값, 또는 이미 입력된 값, 투두의 타이들과 같은 **애플리케이션의 상태를 관리하기 위해 리액트의 어떤 기능을 사용하셨나요**?<br>
   : useState를 사용하여 애플리케이션의 상태를 관리했습니다. useState는 각각의 상태 변수를 선언하고 해당 상태를 업데이트하는 함수를 반환합니다.<br>

3. 애플리케이션의 **상태 값들을 컴포넌트 간 어떤 방식으로 공유하셨나요**?<br>
   : 상태 값들은 App 컴포넌트에서 관리되고, 필요한 값들은 해당 값을 사용하는 하위 컴포넌트에 props로 전달하는 방식으로 공유했습니다. (Ex. ToDoCard와 DoneBtn 컴포넌트에 title, toDo, done, index, toggleDone, onDelete, onClick, text 등의 값들을 props로 전달하여 사용했습니다. 이 외에 ToDoList에는 isDone, toDos, toggleDone, onDelete를 props로 전달받아 사용하였습니다.)<br>

4. 기능 구현을 위해 **불변성 유지가** 필요한 부분이 있었다면 하나만 설명해 주세요.<br>
   : toggleDone 함수에서 상태 배열을 업데이트할 때, 불변성을 유지하기 위해 map 함수를 사용하고, 변경이 필요한 요소만 새로운 객체로 복사하여 업데이트 하도록 했습니다.(새로운 배열을 생성) 해당 state가 변경됨에 따라 리렌더링이 발생할수 있기에, 효율적으로 리렌더링을 수행하기 위해서는 해당 부분에 불변성을 유지하는 것이 중요했습니다.<br>

5. 반복되는 컴포넌트를 파악하고 재사용할 수 있는 **컴포넌트로 분리해 보셨나요?** 그렇다면 **어떠한 이점이 있었나요?**<br>
   : ToDoList와 ToDoCard는 반복되는 패턴을 가지고 있었고, 재사용성을 높이기 위해 컴포넌트 단위로 분리하였습니다. 이렇게 컴포넌트를 분리하여 유지보수성을 향상시켰고, 코드 중복을 줄일 수 있었다는 이점이 존재했습니다. 또한, 컴포넌트 단위로 역할이 분리되어 코드 가독성 향상의 이점이 있습니다.

# 구현한 기능들

1. 제목과 내용을 입력하고, [할 일 추가] 버튼을 클릭하면 '진행 중..🔥'에 새로운 Todo가 추가되고 제목 input과 내용 input은 다시 빈 값으로 바뀌도록 구성하였습니다.<br>
   : 제목 또는 내용이 공란인 상태로 [할 일 추가] 버튼을 클릭하면 아무런 이벤트도 발생하지 않도록 하였습니다.<br>
2. Todo의 isDone 상태가 true이면, 상태 버튼의 라벨을 취소, isDone이 false 이면 라벨을 완료 로 조건부 렌더링하였습니다.<br>
3. Todo의 상태가 Working 이면 위쪽에 위치하고, Done이면 아래쪽에 위치하도록 구현하였습니다.<br>
   : 완료를 눌렀을 때, Done 에 있는 텍스트는 취소선을 그어 완료한 투두임을 사용자로 하여금 명시적으로 알 수 있게 하였습니다. 또한, 배경 색을 바꾸어 완료된 투두임을 더욱 강조하였습니다.<br>
4. Layout의 최대 넓이는 1200px, 최소 넓이는 800px로 제한하고, 전체 화면의 가운데로 정렬하였습니다. <br>
5. 카드가 없을 때도, 진행 중과 완료 사이에 너비를 주어 화면을 깔끔하게 구성했습니다.<br>
6. My Todo List의 오른쪽에 현재 화면에 있는 모든 투두의 개수를 표시하였습니다.<br>
