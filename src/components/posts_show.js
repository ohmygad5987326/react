import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';


class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => { this.context.router.push('/'); });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

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
           <div className="btn btn-link pull-xs-left">
           <Link to="/" >Back To Index</Link>
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
                      <button
                      className="btn btn-danger pull-xs-right"
                      onClick={this.onDeleteClick.bind(this)}>
                      Delete Post
                      </button>
                    </div>
              </ul>
           </div>
        </nav>

<div className="container">


    <div className="row">
        <div className="col-lg-12">
            <h1 className="page-header">{post.title}
                <small> by   <a href="">{   post.categories }</a>
                </small>
            </h1>
            <ol className="breadcrumb">
                <li><a href="">Home</a>
                </li>
                <li className="active">Blog Post</li>
            </ol>
        </div>
    </div>
















    <div className="row">


        <div className="col-lg-8">



            <hr/>


            <p><i className="fa fa-clock-o"></i> Posted on August 24, 2013 at 9:00 PM</p>

            <hr/>


            <img className="img-responsive" src="../../img/bootstrap3.jpg" alt=""/>

            <hr/>


            <p className="lead">{post.content}</p>

            <hr/>



                            <div className="well">
                                <h4>Leave a Comment:</h4>
                                <form role="form">
                                    <div className="form-group">
                                        <textarea className="form-control" rows="3"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>

                            <hr/>


                            <div className="media">
                                <a className="pull-left" href="#">
                                    <img className="media-object" src="../../img/icon1.jpg" alt=""/>
                                </a>
                                <div className="media-body">
                                    <h4 className="media-heading">Start Bootstrap
                                        <small>August 25, 2014 at 9:30 PM</small>
                                    </h4>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </div>
                            </div>


                            <div className="media">
                                <a className="pull-left" href="#">
                                    <img className="media-object" src="../../img/icon2.jpg" alt=""/>
                                </a>
                                <div className="media-body">
                                    <h4 className="media-heading">Start Bootstrap
                                        <small>August 25, 2014 at 9:30 PM</small>
                                    </h4>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.





                        <div className="media">
                            <a className="pull-left" href="#">
                                <img className="media-object" src="../../img/icon3.jpg" alt=""/>
                            </a>
                            <div className="media-body">
                                <h4 className="media-heading">Nested Start Bootstrap
                                    <small>August 25, 2014 at 9:30 PM</small>
                                </h4>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>
                        </div>
                        </div>
                    </div>

  </div>
<div className="col-md-4">
                        <div className="well">
                                        <h4>Blog Search</h4>
                                        <div className="input-group">
                                            <input type="text" className="form-control"/>
                                            <span className="input-group-btn">
                                                <button className="btn btn-default" type="button"><i className="fa fa-search"></i></button>
                                            </span>
                                        </div>
                                    </div>








<div className="well">
<h4>Blog Categories</h4>
<div className="row">
    <div className="col-lg-6">
        <ul className="list-unstyled">
            <li><a href="#">Category Name</a>
            </li>
            <li><a href="#">Category Name</a>
            </li>
            <li><a href="#">Category Name</a>
            </li>
            <li><a href="#">Category Name</a>
            </li>
        </ul>
    </div>
    <div className="col-lg-6">
        <ul className="list-unstyled">
            <li><a href="#">Category Name</a>
            </li>
            <li><a href="#">Category Name</a>
            </li>
            <li><a href="#">Category Name</a>
            </li>
            <li><a href="#">Category Name</a>
            </li>
        </ul>
    </div>
</div>
</div>

<div className="well">
                  <h4>Side Widget Well</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, perspiciatis adipisci accusamus laudantium odit aliquam repellat tempore quos aspernatur vero.</p>
              </div>



  </div>

  </div>
  </div>?

















<hr/>
    <footer>
        <div className="row">
            <div className="col-lg-12">
                <p>Copyright &copy; Your Website 2014</p>
            </div>
        </div>
    </footer>
    </div>

    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
