import React from 'react';

const CallieFooter: React.FC<{}> = () => {
  return (
    <>
      {/* Footer */}
    	<footer id="footer">
        {/* container */}
    		<div className="container">
          {/* row */}
    			<div className="row">
    				<div className="col-md-3">
    					<div className="footer-widget">
    						<div className="footer-logo">
    							<a href="index.html" className="logo"><img src="./img/logo-alt.png" alt="" /></a>
    						</div>
    						<p>Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus in mollis nunc sed. Nunc non blandit massa enim nec.</p>
    						<ul className="contact-social">
    							<li><a href="#" className="social-facebook"><i className="fab fa-facebook"></i></a></li>
    							<li><a href="#" className="social-twitter"><i className="fab fa-twitter"></i></a></li>
    							<li><a href="#" className="social-google-plus"><i className="fab fa-google-plus"></i></a></li>
    							<li><a href="#" className="social-instagram"><i className="fab fa-instagram"></i></a></li>
    						</ul>
    					</div>
    				</div>
    				<div className="col-md-3">
    					<div className="footer-widget">
    						<h3 className="footer-title">Categories</h3>
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
    				</div>
    				<div className="col-md-3">
    					<div className="footer-widget">
    						<h3 className="footer-title">Tags</h3>
    						<div className="tags-widget">
    							<ul>
    								<li><a href="#">Social</a></li>
    								<li><a href="#">Lifestyle</a></li>
    								<li><a href="#">Blog</a></li>
    								<li><a href="#">Travel</a></li>
    								<li><a href="#">Technology</a></li>
    								<li><a href="#">Fashion</a></li>
    								<li><a href="#">Life</a></li>
    								<li><a href="#">News</a></li>
    								<li><a href="#">Magazine</a></li>
    								<li><a href="#">Food</a></li>
    								<li><a href="#">Health</a></li>
    							</ul>
    						</div>
    					</div>
    				</div>
    				<div className="col-md-3">
    					<div className="footer-widget">
    						<h3 className="footer-title">Newsletter</h3>
    						<div className="newsletter-widget">
    							<form>
    								<p>Nec feugiat nisl pretium fusce id velit ut tortor pretium.</p>
    								<input className="input" name="newsletter" placeholder="Enter Your Email" />
    								<button className="primary-button">Subscribe</button>
    							</form>
    						</div>
    					</div>
    				</div>
    			</div>
          {/* /row */}

          {/* row */}
    			<div className="footer-bottom row">
    				<div className="col-md-6 col-md-push-6">
    					<ul className="footer-nav">
    						<li><a href="index.html">Home</a></li>
    						<li><a href="about.html">About Us</a></li>
    						<li><a href="contact.html">Contacts</a></li>
    						<li><a href="#">Advertise</a></li>
    						<li><a href="#">Privacy</a></li>
    					</ul>
    				</div>
    				<div className="col-md-6 col-md-pull-6">
    					<div className="footer-copyright">
                Copyright &copy; {(new Date().getFullYear())}
    					</div>
    				</div>
    			</div>
          {/* /row */}
    		</div>
        {/* /container */}
    	</footer>
      {/* /Footer */}
    </>
  );
}

export default CallieFooter;
