import { LinkContainer } from 'react-router-bootstrap'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Service from './service'
import About from './about'
import LearnProps from '../Pages/LearnProps';
import LearnEvents from '../Pages/LearnEvent';
import LearnForm from '../Pages/LearnForms';
import LearnHook from '../Pages/LearnHook';
import LearnList from '../Pages/LearnList';
import Counter from '../Pages/Counter';
import LearnFetch from '../Pages/LearnFetch';
import SearchFiler from '../Pages/SearchFilter';
import Conditionals from '../Pages/LearnConditionals';
import LearnOneWayDataBinding from '../Pages/LearnOneWayDataBinding';
import LearnTwoWayDataBinding from '../Pages/LearnTwoWayDataBinding';
import LearnUseContext from '../Pages/LearnUseContext';
import IfPropertyEditor from '../Pages/IfPropertyEditor';
import AssignPropertyEditor from '../Pages/AssignPropertyEditor';
import DynamicRendering from '../Pages/DynamicRendering';
import FunctionalComp from '../Pages/FunctionalComp';
import LearnUseEffect from '../Pages/LearnUseEffect';
import LearnXMLHttpReq from '../Pages/LearnXMLHttpReq';
import DynamicForm from '../dynamic-component-with-react/DynamicForm';
import LogPropertyEditor from '../Pages/LogPropertyEditor';
import LearnOnClick from '../Pages/LearnOnClick';

export default function IndexPages() {
    return (
        <>
            
            <div className="container row text-success">
                <LinkContainer to="/LearnProps"><div className="col-md-1"> <button type="button" className="btn btn-outline-dark btn-sm">Props</button></div></LinkContainer>
                <LinkContainer to="/LearnEvents"><div className="col-md-1"> <button type="button" className="btn btn-outline-dark btn-sm">Events</button></div></LinkContainer>
                <LinkContainer to="/LearnForm"><div className="col-md-1"> <button type="button" className="btn btn-outline-dark btn-sm">Forms</button></div></LinkContainer>
                <LinkContainer to="/LearnHook"><div className="col-md-1"> <button type="button" className="btn btn-outline-dark btn-sm">Hook</button></div></LinkContainer>
                <LinkContainer to="/LearnList"><div className="col-md-1"> <button type="button" className="btn btn-outline-dark btn-sm">List</button></div></LinkContainer>
                <LinkContainer to="/Counter"><div className="col-md-1"> <button type="button" className="btn btn-outline-dark btn-sm">Counter</button></div></LinkContainer>
                <LinkContainer to="/LearnFetch"><div className="col-md-1"> <button type="button" className="btn btn-outline-dark btn-sm">Fetch</button></div></LinkContainer>
                <LinkContainer to="/SearchFiler"><div className="col-md-1"> <button type="button" className="btn btn-outline-dark btn-sm">SearchFiler</button></div></LinkContainer>
                <LinkContainer to="/Conditionals"><div className="col-md-1"> <button type="button" className="btn btn-outline-dark btn-sm">Conditionals</button></div></LinkContainer>
            </div><br />
            <div className="container row text-success">
                <LinkContainer to="/LearnOneWayDataBinding"><div className="col-md-2"> <button type="button" className="btn btn-outline-dark btn-sm">OneWayDataBinding</button></div></LinkContainer>
                <LinkContainer to="/LearnTwoWayDataBinding"><div className="col-md-2"> <button type="button" className="btn btn-outline-dark btn-sm">TwoWayDataBinding</button></div></LinkContainer>
                <LinkContainer to="/LearnUseContext"><div className="col-md-2"> <button type="button" className="btn btn-outline-dark btn-sm">UseContext</button></div></LinkContainer>
                <LinkContainer to="/IfPropertyEditor"><div className="col-md-2"> <button type="button" className="btn btn-outline-dark btn-sm">IfPropertyEditor</button></div></LinkContainer>
                <LinkContainer to="/AssignPropertyEditor"><div className="col-md-2"> <button type="button" className="btn btn-outline-dark btn-sm">AssignPropertyEditor</button></div></LinkContainer>
                <LinkContainer to="/DynamicRendering"><div className="col-md-2"> <button type="button" className="btn btn-outline-dark btn-sm">DynamicRendering</button></div></LinkContainer>
            </div><br />
            <div className="container row text-success">
                <LinkContainer to="/FunctionalComp"><div className="col-md-2"> <button type="button" className="btn btn-outline-dark btn-sm">FunctionalComp</button></div></LinkContainer>
                <LinkContainer to="/LearnUseEffect"><div className="col-md-2"> <button type="button" className="btn btn-outline-dark btn-sm">LearnUseEffect</button></div></LinkContainer>
                <LinkContainer to="/LearnXMLHttpReq"><div className="col-md-2"> <button type="button" className="btn btn-outline-dark btn-sm">LearnXMLHttpReq</button></div></LinkContainer>
                <LinkContainer to="/DynamicForm"><div className="col-md-2"> <button type="button" className="btn btn-outline-dark btn-sm">DynamicForm</button></div></LinkContainer>
                <LinkContainer to="/LogPropertyEditor"><div className="col-md-2"> <button type="button" className="btn btn-outline-dark btn-sm">LogPropertyEditor</button></div></LinkContainer>
                <LinkContainer to="/LearnOnClick"><div className="col-md-2"> <button type="button" className="btn btn-outline-dark btn-sm">LearnOnClick</button></div></LinkContainer>
                
            </div><hr />
            <Routes>
                
                <Route exact path="/" element={<Home />} />
                <Route path="/service" element={<Service />} />
                <Route path="/about" element={<About />} />
                <Route path="/LearnProps" element={<LearnProps />} />
                <Route path="/LearnEvents" element={<LearnEvents />} />
                <Route path="/LearnForm" element={<LearnForm />} />
                <Route path="/LearnHook" element={<LearnHook />} />
                <Route path="/LearnList" element={<LearnList />} />
                <Route path="/Counter" element={<Counter />} />
                <Route path="/LearnFetch" element={<LearnFetch />} />
                <Route path="/SearchFiler" element={<SearchFiler />} />
                <Route path="/Conditionals" element={<Conditionals />} />
                <Route path="/LearnOneWayDataBinding" element={<LearnOneWayDataBinding />} />
                <Route path="/LearnTwoWayDataBinding" element={<LearnTwoWayDataBinding />} />
                <Route path="/LearnUseContext" element={<LearnUseContext />} />
                <Route path="/IfPropertyEditor" element={<IfPropertyEditor />} />
                <Route path="/AssignPropertyEditor" element={<AssignPropertyEditor />} />
                <Route path="/DynamicRendering" element={<DynamicRendering />} />
                <Route path="/FunctionalComp" element={<FunctionalComp />} />
                <Route path="/LearnUseEffect" element={<LearnUseEffect />} />
                <Route path="/LearnXMLHttpReq" element={<LearnXMLHttpReq />} />
                <Route path="/DynamicForm" element={<DynamicForm />} />
                <Route path="/LogPropertyEditor" element={<LogPropertyEditor />} />
                <Route path="/LearnOnClick" element={<LearnOnClick />} />
                
            </Routes>
        </>
    );
}