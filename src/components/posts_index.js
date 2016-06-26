import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';



class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <div>
            <Link to={"posts/" + post.id}>
              <span className="pull-xs-right">{post.categories}</span>
              <strong>{post.title}</strong>
            </Link>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="wrapper">
            <div className="overlay"></div>
            <nav className="navbar navbar-inverse navbar-fixed-top sidebar-wrapper"  role="navigation">
                <ul className="nav sidebar-nav">
                    <li className="sidebar-brand">
                        <a href="#">
                            Brand
                        </a>
                    </li>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Events</a>
                    </li>
                    <li>
                        <a href="#">Team</a>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Works <span className="caret"></span></a>
                        <ul className="dropdown-menu" role="menu">
                            <li className="dropdown-header">Dropdown heading</li>
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li><a href="#">Separated link</a></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/maridlcrmn">Follow me</a>
                    </li>
                </ul>
            </nav>
            <div className="page-content-wrapper">
                <button type="button" className="hamburger is-closed" data-toggle="offcanvas">
                    <span className="hamb-top"></span>
                    <span className="hamb-middle"></span>
                    <span className="hamb-bottom"></span>
                </button>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2">
                          <div className="text-xs-right">
                            <Link to="/posts/new" className="btn btn-primary">
                              Add a Post
                            </Link>
                          </div>
                              <h3>Posts</h3>
                          <ul className="list-group">
                            {this.renderPosts()}
                          </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
