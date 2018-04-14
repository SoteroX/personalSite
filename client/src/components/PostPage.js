import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions/blogs';

class PostPage extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
		this.props.getPost(this.props.match.params.id);
	}
    render(){
        return (
            <div>PostPage
                {console.log("PostPage Props", this.props.match.params.id)}
                {console.log("PostPage title", this.props.post.title)}
            </div>
        );
    }
};

function mapStateToProps(reduxState){
    return {
        post: reduxState.post
    };
}

export default connect(mapStateToProps, {getPost})(PostPage);
