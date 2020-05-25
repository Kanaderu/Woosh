import React from 'react';

const NewsletterWidget: React.FC<{}> = () => {
  return (
    <>
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
    </>
  );
}

export default NewsletterWidget;
