import React, {Component} from "react";

class Subject extends Component {
    render () {
        return (
            <header>
                <h1>{this.props.title}</h1>
                {this.props.sub}
            </header>
        );
    }
}

class TOC extends Component {
    render () {
        return (
            <nav>
                <ul>
                    <li><a href="1.html">html</a></li>
                    <li><a href="2.html">css</a></li>
                    <li><a href="3.html">js</a></li>
                </ul>
            </nav>
        );
    }
}

class Content extends Component {
    render () {
        return (
            <article>
                <h2>HTML</h2>
                HTML is HyperText Markup Language.
            </article>
        );
    }
}

const Hello = () => {

    return (
        <div>
            <Subject title="WEB" sub="world wide web!"/>
            <TOC />
            <Content />
        </div>
    );
}

export default Hello;