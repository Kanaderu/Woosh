import React from 'react';

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import '../../assets/callie/css/style.css';

//<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700%7CMuli:400,700" rel="stylesheet">
const BlogSection: React.FC<{}> = () => {
  return (
    <>
    {/* Section */}
  	<div className="section">
      {/* Container */}
      <div className="container">
        {/* Row */}
        <div className="row">
          <div className="col-md-8">
            {/* post share */}
            <div className="section-row">
              <div className="post-share">
                <a href="#" className="social-facebook"><i className="fab fa-facebook"></i><span>Share</span></a>
                <a href="#" className="social-twitter"><i className="fab fa-twitter"></i><span>Tweet</span></a>
                <a href="#" className="social-pinterest"><i className="fab fa-pinterest"></i><span>Pin</span></a>
                <a href="#" ><i className="fa fa-envelope"></i><span>Email</span></a>
              </div>
            </div>
            {/* /post share */}

            {/* post content */}
  					<div className="section-row">
  						<h3>Ea vix periculis sententiae, ea blandit pericula abhorreant pri.</h3>
  						<p>Lorem ipsum dolor sit amet, mea ad idque detraxit, cu soleat graecis invenire eam. Vidisse suscipit liberavisse has ex, vocibus patrioque vim et, sed ex tation reprehendunt. Mollis volumus no vix, ut qui clita habemus, ipsum senserit est et. Ut has soluta epicurei mediocrem, nibh nostrum his cu, sea clita electram reformidans an.</p>
  						<p>Est in saepe accusam luptatum. Purto deleniti philosophia eum ea, impetus copiosae id mel. Vis at ignota delenit democritum, te summo tamquam delicata pro. Utinam concludaturque et vim, mei ullum intellegam ei. Eam te illum nostrud, suas sonet corrumpit ea per. Ut sea regione posidonium. Pertinax gubergren ne qui, eos an harum mundi quaestio.</p>
  						<figure className="pull-right">
  							<img src="./img/media-1.jpg" alt="" />
  							<figcaption>Lorem ipsum dolor sit amet, mea ad idque detraxit,</figcaption>
  						</figure>
  						<p>Nihil persius id est, iisque tincidunt abhorreant no duo. Eripuit placerat mnesarchum ius at, ei pro laoreet invenire persecuti, per magna tibique scriptorem an. Aeque oportere incorrupte ius ea, utroque erroribus mel in, posse dolore nam in. Per veniam vulputate intellegam et, id usu case reprimique, ne aperiam scaevola sed. Veritus omnesque qui ad. In mei admodum maiorum iracundia, no omnis melius eum, ei erat vivendo his. In pri nonumes suscipit.</p>
  						<p>Sit nulla quidam et, eam ea legimus deserunt neglegentur. Et veri nostrud vix, meis minimum atomorum ex sea, stet case habemus mea no. Ut dignissim dissentiet his, mei ea delectus delicatissimi, debet dissentiunt te duo. Sonet partiendo et qui, pro et veri solet singulis. Vidit viderer eleifend ad nam. Minimum eligendi suscipit ius et, vis ex laoreet detracto scripserit, at sumo sale solum pro.</p>
  						<blockquote className="blockquote">
  							<p>Ei prima graecis consulatu vix, per cu corpora qualisque voluptaria. Bonorum moderatius in per, ius cu albucius voluptatum. Ne ius torquatos dissentiunt. Brute illum utroque eu quo. Cu tota mediocritatem vis, aliquip cotidieque eu ius, cu lorem suscipit eleifend sit.</p>
  							<footer className="blockquote-footer">John Doe</footer>
  						</blockquote>
  						<p>Mei cu diam sonet audiam, his ad impetus fuisset indoctum. Te sit altera qualisque, stet suavitate ne vel. Euismod suavitate duo eu, habemus rationibus neglegentur ei qui. Debet omittam ad usu, ex vero feugait oporteat eos, id usu sint numquam sententiae.</p>
  						<figure>
  							<img src="./img/media-2.jpg" alt="" />
  						</figure>
  						<h3>Sit nulla quidam et, eam ea legimus deserunt neglegentur.</h3>
  						<p>No possim singulis sea, dolores salutatus interpretaris eam ad. An singulis postulant his, an inermis urbanitas mel. Wisi veri noster eu est, diam ridens eum in. Omnium imperdiet patrioque quo in, est sumo persecuti abhorreant ei. Sed feugiat iracundia id, inermis percipit eu has.</p>
  						<p>In vidit homero ullamcorper his, ea mea senserit constituto, et alia idque congue sit. Postea percipit his ne. Probo movet noluisse in nam, sed ex utroque inermis corrumpit, oratio tation vix at. Usu aperiri assentior at, eam et melius iudicabit pertinacia.</p>
  					</div>
            {/* /post content */}

            {/* post author */}
            <div className="section-row">
  						<div className="section-title">
  							<h3 className="title">About <a href="author.html">John Doe</a></h3>
  						</div>
  						<div className="author media">
  							<div className="media-left">
  								<a href="author.html">
  									<img className="author-img media-object" src="./img/avatar-1.jpg" alt="" />
  								</a>
  							</div>
  							<div className="media-body">
  								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  								<ul className="author-social">
  									<li><a href="#"><i className="fab fa-facebook"></i></a></li>
  									<li><a href="#"><i className="fab fa-twitter"></i></a></li>
  									<li><a href="#"><i className="fab fa-google-plus"></i></a></li>
  									<li><a href="#"><i className="fab fa-instagram"></i></a></li>
  								</ul>
  							</div>
  						</div>
  					</div>
            {/* /post content */}

            {/* /related post */}
  					<div>
  						<div className="section-title">
  							<h3 className="title">Related Posts</h3>
  						</div>
  						<div className="row">
                {/* post */}
  							<div className="col-md-4">
  								<div className="post post-sm">
  									<a className="post-img" href="blog-post.html"><img src="./img/post-4.jpg" alt="" /></a>
  									<div className="post-body">
  										<div className="post-category">
  											<a href="category.html">Health</a>
  										</div>
  										<h3 className="post-title title-sm"><a href="blog-post.html">Postea senserit id eos, vivendo periculis ei qui</a></h3>
  										<ul className="post-meta">
  											<li><a href="author.html">John Doe</a></li>
  											<li>20 April 2018</li>
  										</ul>
  									</div>
  								</div>
  							</div>
                {/* /post */}

                {/* post */}
  							<div className="col-md-4">
  								<div className="post post-sm">
  									<a className="post-img" href="blog-post.html"><img src="./img/post-6.jpg" alt="" /></a>
  									<div className="post-body">
  										<div className="post-category">
  											<a href="category.html">Fashion</a>
  											<a href="category.html">Lifestyle</a>
  										</div>
  										<h3 className="post-title title-sm"><a href="blog-post.html">Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.</a></h3>
  										<ul className="post-meta">
  											<li><a href="author.html">John Doe</a></li>
  											<li>20 April 2018</li>
  										</ul>
  									</div>
  								</div>
  							</div>
                {/* /post */}

                {/* post */}
  							<div className="col-md-4">
  								<div className="post post-sm">
  									<a className="post-img" href="blog-post.html"><img src="./img/post-7.jpg" alt="" /></a>
  									<div className="post-body">
  										<div className="post-category">
  											<a href="category.html">Health</a>
  											<a href="category.html">Lifestyle</a>
  										</div>
  										<h3 className="post-title title-sm"><a href="blog-post.html">Ne bonorum praesent cum, labitur persequeris definitionem quo cu?</a></h3>
  										<ul className="post-meta">
  											<li><a href="author.html">John Doe</a></li>
  											<li>20 April 2018</li>
  										</ul>
  									</div>
  								</div>
  							</div>
                {/* /post */}
  						</div>
  					</div>
            {/* /related post */}

            {/* post comments */}
  					<div className="section-row">
  						<div className="section-title">
  							<h3 className="title">3 Comments</h3>
  						</div>
  						<div className="post-comments">
					      {/* comment */}
  							<div className="media">
  								<div className="media-left">
  									<img className="media-object" src="./img/avatar-2.jpg" alt="" />
  								</div>
  								<div className="media-body">
  									<div className="media-heading">
  										<h4>John Doe</h4>
  										<span className="time">5 min ago</span>
  									</div>
  									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  									<a href="#" className="reply">Reply</a>
  									{/* comment */}
  									<div className="media media-author">
  										<div className="media-left">
  											<img className="media-object" src="./img/avatar-1.jpg" alt="" />
  										</div>
  										<div className="media-body">
  											<div className="media-heading">
  												<h4>John Doe</h4>
  												<span className="time">5 min ago</span>
  											</div>
  											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  											<a href="#" className="reply">Reply</a>
  										</div>
  									</div>
    					      {/* /comment */}
  								</div>
  							</div>
                {/* /comment */}

                {/* comment */}
  							<div className="media">
  								<div className="media-left">
  									<img className="media-object" src="./img/avatar-3.jpg" alt="" />
  								</div>
  								<div className="media-body">
  									<div className="media-heading">
  										<h4>John Doe</h4>
  										<span className="time">5 min ago</span>
  									</div>
  									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  									<a href="#" className="reply">Reply</a>
  								</div>
  							</div>
                {/* /comment */}
  						</div>
  					</div>
  					{/* /post comments */}

  					{/* post reply */}
  					<div className="section-row">
  						<div className="section-title">
  							<h3 className="title">Leave a reply</h3>
  						</div>
  						<form className="post-reply">
  							<div className="row">
  								<div className="col-md-12">
  									<div className="form-group">
  										<textarea className="input" name="message" placeholder="Message"></textarea>
  									</div>
  								</div>
  								<div className="col-md-4">
  									<div className="form-group">
  										<input className="input" type="text" name="name" placeholder="Name" />
  									</div>
  								</div>
  								<div className="col-md-4">
  									<div className="form-group">
  										<input className="input" type="email" name="email" placeholder="Email" />
  									</div>
  								</div>
  								<div className="col-md-4">
  									<div className="form-group">
  										<input className="input" type="text" name="website" placeholder="Website" />
  									</div>
  								</div>
  								<div className="col-md-12">
  									<button className="primary-button">Submit</button>
  								</div>
  							</div>
  						</form>
  					</div>
  					{/* /post reply */}
          </div>


          <div className="col-md-4">
            {/* ad widget */}
  					<div className="aside-widget text-center">
  						<a href="#" style={{display: "inline-block", margin: "auto"}}>
  							<img className="img-responsive" src="./img/ad-3.jpg" alt="" />
  						</a>
  					</div>
  					{/* /ad widget */}

  					{/* social widget */}
  					<div className="aside-widget">
  						<div className="section-title">
  							<h2 className="title">Social Media</h2>
  						</div>
  						<div className="social-widget">
  							<ul>
  								<li>
  									<a href="#" className="social-facebook">
  										<i className="fab fa-facebook"></i>
  										<span>21.2K<br />Followers</span>
  									</a>
  								</li>
  								<li>
  									<a href="#" className="social-twitter">
  										<i className="fab fa-twitter"></i>
  										<span>10.2K<br />Followers</span>
  									</a>
  								</li>
  								<li>
  									<a href="#" className="social-google-plus">
  										<i className="fab fa-google-plus"></i>
  										<span>5K<br />Followers</span>
  									</a>
  								</li>
  							</ul>
  						</div>
  					</div>
  					{/* /social widget */}

  					{/* category widget */}
  					<div className="aside-widget">
  						<div className="section-title">
  							<h2 className="title">Categories</h2>
  						</div>
  						<div className="category-widget">
  							<ul>
  								<li><a href="#">Lifestyle <span>451</span></a></li>
  								<li><a href="#">Fashion <span>230</span></a></li>
  								<li><a href="#">Technology <span>40</span></a></li>
  								<li><a href="#">Travel <span>38</span></a></li>
  								<li><a href="#">Health <span>24</span></a></li>
  							</ul>
  						</div>
  					</div>
  					{/* /category widget */}

            {/* newsletter widget */}
  					<div className="aside-widget">
  						<div className="section-title">
  							<h2 className="title">Newsletter</h2>
  						</div>
  						<div className="newsletter-widget">
  							<form>
  								<p>Nec feugiat nisl pretium fusce id velit ut tortor pretium.</p>
  								<input className="input" placeholder="Enter Your Email" />
  								<button className="primary-button">Subscribe</button>
  							</form>
  						</div>
  					</div>
            {/* /newsletter widget */}

            {/* post widget */}
  					<div className="aside-widget">
  						<div className="section-title">
  							<h2 className="title">Popular Posts</h2>
  						</div>
              {/* post */}
  						<div className="post post-widget">
  							<a className="post-img" href="blog-post.html"><img src="./img/widget-3.jpg" alt="" /></a>
  							<div className="post-body">
  								<div className="post-category">
  									<a href="category.html">Lifestyle</a>
  								</div>
  								<h3 className="post-title"><a href="blog-post.html">Ne bonorum praesent cum, labitur persequeris definitionem quo cu?</a></h3>
  							</div>
  						</div>
              {/* /post */}

              {/* post */}
  						<div className="post post-widget">
  							<a className="post-img" href="blog-post.html"><img src="./img/widget-2.jpg" alt="" /></a>
  							<div className="post-body">
  								<div className="post-category">
  									<a href="category.html">Technology</a>
  									<a href="category.html">Lifestyle</a>
  								</div>
  								<h3 className="post-title"><a href="blog-post.html">Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.</a></h3>
  							</div>
  						</div>
              {/* /post */}

              {/* post */}
  						<div className="post post-widget">
  							<a className="post-img" href="blog-post.html"><img src="./img/widget-4.jpg" alt="" /></a>
  							<div className="post-body">
  								<div className="post-category">
  									<a href="category.html">Health</a>
  								</div>
  								<h3 className="post-title"><a href="blog-post.html">Postea senserit id eos, vivendo periculis ei qui</a></h3>
  							</div>
  						</div>
              {/* /post */}

              {/* post */}
  						<div className="post post-widget">
  							<a className="post-img" href="blog-post.html"><img src="./img/widget-5.jpg" alt="" /></a>
  							<div className="post-body">
  								<div className="post-category">
  									<a href="category.html">Health</a>
  									<a href="category.html">Lifestyle</a>
  								</div>
  								<h3 className="post-title"><a href="blog-post.html">Sed ut perspiciatis, unde omnis iste natus error sit</a></h3>
  							</div>
  						</div>
              {/* /post */}
  					</div>
            {/* /post widget */}

            {/* gallery widget */}
  					<div className="aside-widget">
  						<div className="section-title">
  							<h2 className="title">Instagram</h2>
  						</div>
  						<div className="galery-widget">
  							<ul>
  								<li><a href="#"><img src="./img/galery-1.jpg" alt="" /></a></li>
  								<li><a href="#"><img src="./img/galery-2.jpg" alt="" /></a></li>
  								<li><a href="#"><img src="./img/galery-3.jpg" alt="" /></a></li>
  								<li><a href="#"><img src="./img/galery-4.jpg" alt="" /></a></li>
  								<li><a href="#"><img src="./img/galery-5.jpg" alt="" /></a></li>
  								<li><a href="#"><img src="./img/galery-6.jpg" alt="" /></a></li>
  							</ul>
  						</div>
  					</div>
            {/* /gallery widget */}

            {/* Ad widget */}
  					<div className="aside-widget text-center">
  						<a href="#" style={{display: "inline-block", margin: "auto"}}>
  							<img className="img-responsive" src="./img/ad-1.jpg" alt="" />
  						</a>
  					</div>
            {/* /Ad widget */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default BlogSection;
