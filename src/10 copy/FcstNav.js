import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Fcst.module.css';

const FcstNav = () => {
  return (
    <nav>
      <ul>
        <li><strong>기상청 단기예보</strong></li>
      </ul>
      <ul>
      <li><Link to='/' role='button' id={styles.homebt} className="outline">메인으로</Link></li>
      </ul>
    </nav>

  )
}

export default FcstNav