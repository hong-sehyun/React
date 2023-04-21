import './Hello.css';
import logo from '../logo.svg';
import '../App.css';

const Hello = () => {
    let n = '세현';
    let g = 'https://github.com/hong-sehyun';
    return (
        <main className='container'>
            <article data-theme='dark'>
                <div>
                    <img src={logo} className='App-logo' alt='logo' />
                </div>
                <footer>
                    <div>
                        <hgroup>
                            <h1>{n}</h1>
                            <h2><a href={g} > {g}</a></h2>
                        </hgroup>
                    </div>
                </footer>
            </article>
        </main>

    );
}

export default Hello;