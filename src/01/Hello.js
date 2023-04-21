import logo from '../logo.svg';

const Hello = () => {
    return (
        <main className='container'>
            <article data-theme='dark'>


                <img src={logo} alt='logo' />
                <footer>
                    <div>
                        Hello React
                    </div>
                </footer>

            </article>
        </main>

    );
}

export default Hello;