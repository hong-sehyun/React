import React from 'react';

const FcstTable = () => {

  
  // const tags = [];
  // for(let item of datas) {
  //   //datas = [...new Set(datas)] ;
  //   tags.push (
  //   <tr>
  //     <td>{item.category}</td>
  //     <td>{item.fcstDate}</td>
  //     <td>{item.fcstTime}</td>
  //     <td>{item.fcstValue}</td>
  //   </tr>
  //   );
  // }
  
  
  return (
        <tr>
          <th scope="col">항목명</th>
          <th scope="col">예측일자</th>
          <th scope="col">예측시간</th>
          <th scope="col">예보 값</th>
        </tr>              
  )
}

export default FcstTable