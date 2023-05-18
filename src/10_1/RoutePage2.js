import React from 'react'
import { useLocation } from 'react-router-dom'
import qs from 'query-string'

const RoutePage2 = () => {
    const loc = useLocation().search;
    console.log('loc', loc);

    const item = qs.parse(loc).item;
    const item2 = qs.parse(loc).item2;
    console.log('item', item);

    let  loc2 = loc.replace('?','');
    loc2 = loc2.split('&')
    loc2 = loc2.map((i) => i.split('='))

    return (
        <article>
            <header>RoutePage2</header>
            <h1>{item}</h1>
            <h1>{item2}</h1>
        </article>
    )
}

export default RoutePage2