import 'bootstrap/dist/js/bootstrap.bundle.js';

const Dropdown_menu = () => {
    return (
        <div className="btn-group dropstart">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Topics</button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/LearnProps">Props</a></li>
                <li><a className="dropdown-item" href="/LearnEvents">Events</a></li>
                <li><a className="dropdown-item" href="/LearnForm">Forms</a></li>
                <li><a className="dropdown-item" href="/LearnHook">Hook</a></li>
                <li><a className="dropdown-item" href="/LearnList">List</a></li>
                <li><a className="dropdown-item" href="/Counter">Counter</a></li>
                <li><a className="dropdown-item" href="/LearnFetch">Fetch</a></li>
                <li><a className="dropdown-item" href="/SearchFiler">SearchFiler</a></li>
                <li><a className="dropdown-item" href="/Conditionals">Conditionals</a></li>
                <li><a className="dropdown-item" href="/LearnOneWayDataBinding">OneWayDataBinding</a></li>
                <li><a className="dropdown-item" href="/LearnTwoWayDataBinding">TwoWayDataBinding</a></li>
                <li><a className="dropdown-item" href="/LearnUseContext">UseContext</a></li>
                <li><a className="dropdown-item" href="/IfPropertyEditor">IfPropertyEditor</a></li>
                <li><a className="dropdown-item" href="/AssignPropertyEditor">AssignPropertyEditor</a></li>
                <li><a className="dropdown-item" href="/DynamicRendering">DynamicRendering</a></li>
                <li><a className="dropdown-item" href="/FunctionalComp">FunctionalComp</a></li>
                <li><a className="dropdown-item" href="/LearnUseEffect">LearnUseEffect</a></li>
                <li><a className="dropdown-item" href="/LearnXMLHttpReq">LearnXMLHttpReq</a></li>
                <li><a className="dropdown-item" href="/DynamicForm">DynamicForm</a></li>
                <li><a className="dropdown-item" href="/LogPropertyEditor">LogPropertyEditor</a></li>
            </ul>
            &nbsp;
        </div>
    )
}

export default Dropdown_menu;