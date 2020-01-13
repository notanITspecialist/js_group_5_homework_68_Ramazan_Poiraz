import React, {Component} from 'react';
import {connect} from "react-redux";
import {addElem, addContent, changeInput, deleteElem} from "./store/actions";

class App extends Component {
    componentDidMount() {
        this.props.addContent();
    }

    render() {
        return (
            <div>
                <input className='add-content-input' value={this.props.inpValue} onChange={this.props.changeInput} />
              <button onClick={() => this.props.addElem(this.props.inpValue)}>ADD</button>
                {this.props.content && Object.keys(this.props.content).map(elem => <li key={elem}>{this.props.content[elem].text} <button onClick={() => this.props.deleteElem(this.props.content[elem].id)}>Delete</button></li>)}
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    content: state.content,
    inpValue: state.inpValue
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addElem: text => dispatch(addElem(text)),
      addContent: () => dispatch(addContent()),
      changeInput: e => dispatch(changeInput(e.target.value)),
      deleteElem: id => dispatch(deleteElem(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);