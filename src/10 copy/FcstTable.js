import React from 'react';

const FcstTable = ({datas, gubun}) => {

  
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
  

  // const arr = datas.filter((item) => item[0] === dt)
  // console.log("arr",arr);

  const categ = ['category', 'fcstDate', 'fcstTime', 'fcstValue'];
//datas = [...new Set(datas)] ;
  let tags = categ.map((item) =>
      <tr>
        <td>{datas[item]}</td>            
      </tr>
   );
  
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