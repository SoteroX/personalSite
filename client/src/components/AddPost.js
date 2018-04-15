import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/blogs';

class AddPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            content: "",
            authorName: "",
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onAuthorChange = this.onAuthorChange.bind(this);
        this.onContentChange = this.onContentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    onTitleChange(e){
        const title = e.target.value;
        this.setState(() => ({title: title}));
    };

    onAuthorChange(e) {
        const author = e.target.value;
        this.setState(() => ({authorName: author}));
    };
     onContentChange(e){
        const content = e.target.value;
        this.setState(() => ({content}));
     };

    handleSubmit(e) {
        e.preventDefault();
        let newState = this.state;
        console.log("E:", newState);
        this.props.addPost(newState);
        this.setState({
            authorName: "",
            content: "",
            title: ""
        });
    }
    render(){
        return(
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <h3>Title</h3>
                    <input value={this.state.title} type="text" placeholder="Title" onChange={this.onTitleChange}/>
                    <h3>Author</h3>
                    <input value={this.state.authorName} type="text" placeholder="Author" onChange={this.onAuthorChange} />
                    <h3>Description</h3>
                    <input value={this.state.content} type="text" placeholder= "Content" onChange={this.onContentChange} />
                    <button onClick={this.handleSubmit}>Add Post</button>  
                </form>
            </div>
        );
    };
}

export default connect(undefined, {addPost})(AddPost);