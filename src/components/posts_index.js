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

<nav className="navbar navbar-inverse narbar-fixed-top" role="navigation">
  <div className="navbar-header">
    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
     </button>
     <a className="navbar-brand" href="">FullStack Field</a>
   </div>

   <div className="collapse navbar-collapse bs-example-navbar-collapse-1">
      <ul className ="nav navbar-nav navbar-right">
        <li clasName="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">Javascript</a>
            <ul className="dropdown-menu">
              <li>
                <a href="##">1 Column Portfolio</a>
              </li>
              <li>
                <a href="##">2 Column Portfolio</a>
              </li>
              <li>
                <a href="##">Single Portfolio Item</a>
              </li>
            </ul>
        </li>

        <li>
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Css</a>
        </li>
        <li>
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Html</a>
        </li>
        <li>
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Bootstarp</a>
        </li>
            <div className="text-xs-right">
              <Link to="/posts/new" className="btn btn-primary">
                Add a Post
              </Link>
            </div>
      </ul>
   </div>
</nav>

                <h3>Posts</h3>
            <ul className="list-group">
              {this.renderPosts()}
            </ul>

  <div className="myCarousel carousel slide">
    <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
    </ol>
 <div className="carousel-inner" >
    <div className="item active">
        <img src="../../img/slider1.jpg" className="fill"/>
        <div className="carousel-caption">
              <h2>Caption 1</h2>
        </div>
    </div>
    <div className="item">
         <img src="../../img/slider2.jpg" className="fill"/>
         <div className="carousel-caption">
              <h2>Caption 2</h2>
         </div>
    </div>
    <div className="item">
         <img src="../../img/slider3.jpg" className="fill"/>
         <div className="carousel-caption">
              <h2>Caption 3</h2>
         </div>
    </div>
    <div className="item">
        <img src="../../img/slider4.jpg" className="fill"/>
        <div className="carousel-caption">
             <h2>Caption 4</h2>
        </div>
    </div>
  </div>
  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#myCarousel" data-slide="next">
   <span className="glyphicon glyphicon-chevron-right"></span>
   <span className="sr-only">Next</span>
  </a>
 </div>
</div>

    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
