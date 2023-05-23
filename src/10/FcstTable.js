import React from 'react';

const FcstTable = ({row}) => {
  const tags = [];
  for(let item of row) {
    tags.push (
    <tr>
      <td>{item.category}</td>
      <td>{item.fcstDate}</td>
      <td>{item.fcstTime}</td>
      <td>{item.fcstValue}</td>
    </tr>
    );
  }

  // const categ = ['category', 'fcstDate', 'fcstTime', 'fcstValue'];

  // let tags = categ.map((item) =>
  //       <tr>
  //         <td>{content[item]}</td>            
  //       </tr>
  // );

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">항목명</th>
          <th scope="col">예측일자</th>
          <th scope="col">예측시간</th>
          <th scope="col">예보 값</th>
        </tr>        
          {tags}        
      </thead>
    </table>
  )
}

export default FcstTable