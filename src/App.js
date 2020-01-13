import React, {Component} from 'react';
import {connect} from "react-redux";
import {addElem, addContent, changeInput, deleteElem} from "./store/actions";
import {Button, Container, Form, Input, InputGroup, ListGroup, ListGroupItem} from "reactstrap";

class App extends Component {
    componentDidMount() {
        this.props.addContent();
    }

    addElem = e => {
        e.preventDefault();
        this.props.addElem(this.props.inpValue)
    };

    render() {
        return (
            <Container className='d-flex align-items-center flex-column bg-light border rounded p-3 mt-3'>
                <Form onSubmit={this.addElem} className='w-100'>
                   <InputGroup className='mb-3'>
                      <Input className='add-content-input mr-2' value={this.props.inpValue} onChange={this.props.changeInput} placeholder='add new task' />
                       <Button>ADD</Button>
                   </InputGroup>
                </Form>
                <ListGroup className='w-75'>
                    {
                        this.props.content && Object.keys(this.props.content).map(elem => {
                            return (
                                <ListGroupItem className='d-flex align-items-center' key={elem}>{this.props.content[elem].text} <Button onClick={() => this.props.deleteElem(this.props.content[elem].id)} className='ml-auto'>Delete</Button></ListGroupItem>
                            )
                         })
                    }
                </ListGroup>
            </Container>
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
      addElem: (text) => dispatch(addElem(text)),
      addContent: () => dispatch(addContent()),
      changeInput: e => dispatch(changeInput(e.target.value)),
      deleteElem: id => dispatch(deleteElem(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);