export default function HtmlPage() {
  const myVariable = 3;
  return (
    <div style={style.wrapper}>
      <div>
        <h1>html로 작성된 react app 라우트에요</h1>
        <div>
          <p>Html 코드가 여기 return문 안에 들어온다고 생각하면 편해요</p>
        </div>
      </div>
      <div>
        <h2>리액트의 역할</h2>
        <div>
          <p>사실, html 코드처럼 보이는 이 코드들은 react element 에요</p>
        </div>
        <div>
          <p>
            태그로 구분된 한 덩어리를 react element 요소로 만들어서, 페이지한테
            넘겨준다고 생각하면 돼요
          </p>
          <p>
            react는 함수형 프로그래밍 언어로, 하나의 함수는 한 개의 태그
            덩어리를 반환해요
            <br />
            <span style={style.bold}>
              꼭 기억하세요 : 한 개의 함수는 한 개의 덩어리를 반환해야 해요
            </span>
          </p>
        </div>
      </div>
      <div>
        <h2>사용자 지정 태그</h2>
        <div>
          <p>
            결국, 리액트는 함수 단위로 사용자 지정 태그를 만들고, 그 태그들을
            엮어서 하나의 웹 애플리케이션을 만들어요!
          </p>
        </div>
      </div>
      <div>
        <h2>프로그래밍 요소</h2>
        <div>
          <p>
            그리고 이렇게 return 문 밖에서 선연한 변수를 불러올 수 있어요 :{" "}
            {myVariable} (대박..!)
          </p>
        </div>
      </div>
    </div>
  );
}

const style = {
  wrapper: {
    width: "100vw",
    height: "100vh",
    padding: 10,
    boxSizing: "border-box",
  },
  bold: {
    fontWeight: "bold",
  },
};
