import htmlToDOM from '../html-to-dom.js';

class Component {
    constructor(props) {
        this.props = props;
    }
    
    render() {
        return this.renderDom();
    }

    renderDom() {
        const html = this.renderTemplate();
        console.log(html);
        const dom = htmlToDOM(html);
        this.rootElement = dom;
        return dom;
    }

    update(props) {
        // update the props:
        Object.keys(props).forEach(key => {
            this.props[key] = props[key];
        });
        const oldRoot = this.rootElement;
        const newDOM = this.render();
        oldRoot.replaceWith(newDOM);
    }
}

export default Component;