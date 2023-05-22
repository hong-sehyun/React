import React from 'react'
import { Link } from 'react-router-dom'

const FcstNav = () => {
  return (
    <nav>
      <ul>
        <li><strong>기상청 단기예보</strong></li>
      </ul>
      <ul>
      <li><Link to='/' role='button'>단기 예보 확인</Link></li>
      </ul>
    </nav>

  )
}

export default FcstNav