# to-do-app
1. **JSX 문법**이란 무엇일까요?<br>
  : JSX(JavaScript XML)는 JavaScript의 확장 문법으로, React에서 UI를 구성하는 데 사용되는 문법입니다. JSX는 JavaScript 코드 안에 HTML 스타일의 코드를 작성할 수 있게 해 주어, 컴포넌트의 UI 구조를 더 직관적이고 가독성 있게 표현할 수 있도록 도와줍니다.<br>


2. 사용자가 입력하는 값, 또는 이미 입력된 값, 투두의 타이들과 같은 **애플리케이션의 상태를 관리하기 위해 리액트의 어떤 기능을 사용하셨나요**?<br>
  : useState를 사용하여 애플리케이션의 상태를 관리했습니다. useState는 각각의 상태 변수를 선언하고 해당 상태를 업데이트하는 함수를 반환합니다.<br>
  
3. 애플리케이션의 **상태 값들을 컴포넌트 간 어떤 방식으로 공유하셨나요**?<br>
  : 상태 값들은 App 컴포넌트에서 관리되고, 필요한 값들은 해당 값을 사용하는 하위 컴포넌트에 props로 전달하는 방식으로 공유했습니다. (Ex. ToDoCard와 DoneBtn 컴포넌트에 title, toDo, done, index 등의 값들을 props로 전달하여 사용했습니다.)<br>
  
4. 기능 구현을 위해 **불변성 유지가** 필요한 부분이 있었다면 하나만 설명해 주세요.<br>
  : toggleDone 함수에서 상태 배열을 업데이트할 때, 불변성을 유지하기 위해 map 함수를 사용하고, 변경이 필요한 요소만 새로운 객체로 복사하여 업데이트 하도록 했습니다. 해당 state가 변경됨에 따라 리렌더링이 발생할수 있기에, 효율적으로 리렌더링을 수행하기 위해서는 해당 부분에 불변성을 유지하는 것이 중요했습니다.<br>
  
5. 반복되는 컴포넌트를 파악하고 재사용할 수 있는 **컴포넌트로 분리해 보셨나요?** 그렇다면 **어떠한 이점이 있었나요?**<br>
   : ToDoCard와 DoneBtn 컴포넌트는 반복되는 패턴을 가지고 있어, 재사용성을 높이기 위해 분리하였습니다. 이렇게 컴포넌트를 분리함을 통해 유지보수성을 향상시켰고, 코드 중복을 줄일 수 있었다는 이점이 존재했습니다. 또한, 컴포넌트 단위로 역할과 책임이 분리되어 코드의 가독성도 좋아졌다는 이점이 있습니다.
