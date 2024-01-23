import { useState } from "react";

function DoneBtn({ text, onClick }) {
  //  완료 여부에 따라 내부 텍스트가 바뀌므로, prop을 통해 텍스트를 받기 위해 컴포넌트로 분리한다.
  return (
    <button className="done-btn" onClick={onClick}>
      {text}
    </button>
  );
}

export default DoneBtn;
