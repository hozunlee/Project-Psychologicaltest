<div>
  <h1>직업가치관검사 결과표</h1>
  <p>
    직업가치관이란 직업을 선택할 때 영향을 끼치는 자신만의 믿음과 신념입니다.
    따라서 여러분의 직업생활과 관련하여 포기하지 않는 무게중심의 역할을 한다고
    볼 수 있습니다. 직업가치관검사는 여러분이 직업을 선택할 때 상대적으로 어떠한
    가치를 중요하게 생각하는지를 알려줍니다. 또한 본인이 가장 중요하게 생각하는
    가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.
  </p>
  {readData && Object.keys(readData).length > 0 ? (
    <>
      <table border="1">
        <th>이름</th>
        <th>성별</th>
        <th>검사일</th>
        <tr>
          <td>{name}</td>
          <td>{gender === "100323" ? "남" : "여"}</td>
          <td>{realData.result["endDtm"].slice(0, 10).split("-").join(".")}</td>
        </tr>
      </table>
    </>
  ) : undefined}
  <h2>직업가치관 결과</h2>
  <h2>가치관과 관련이 높은 직업</h2>
  <Link to="/">
    <button>다시 검사하기</button>
  </Link>
</div>;
