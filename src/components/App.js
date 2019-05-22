import Component from './Component.js';

class App extends Component {
    
    // render() {
    //     const dom = this.renderDOM();
    //     return dom;
    // }

    renderTemplate() {
        return /*html*/`
        <div>
            <main>
                <p>YO!</p>
            </main>
        </div>
        `;
    }
}

export default App;