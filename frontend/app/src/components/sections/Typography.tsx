import React from 'react';

const Typography: React.FC<{}> = () => {
  return (
    <>
      <div className="section-row">
        <div className="section-title">
          <h3 className="title">Typography</h3>
        </div>
        <h1>H1 Typography heading.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <h2>H2 Typography heading.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <h3>H3 Typography heading.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <h4>H4 Typography heading.</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <h5>H5 Typography heading.</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div className="section-row">
        <div className="section-title">
          <h3 className="title">list style</h3>
        </div>
        <ul className="list-style">
          <li><p>Vix mollis admodum ei, vis legimus voluptatum ut.</p></li>
          <li><p>Cu cum alia vide malis. Vel aliquid facilis adolescens.</p></li>
          <li><p>Laudem rationibus vim id. Te per illum ornatus.</p></li>
        </ul>

        <ol className="list-style">
          <li><p>Vix mollis admodum ei, vis legimus voluptatum ut.</p></li>
          <li><p>Cu cum alia vide malis. Vel aliquid facilis adolescens.</p></li>
          <li><p>Laudem rationibus vim id. Te per illum ornatus.</p></li>
        </ol>
      </div>

      <div className="section-row">
        <div className="section-title">
          <h3 className="title">blockquote</h3>
        </div>
        <blockquote className="blockquote">
          <p>Ei prima graecis consulatu vix, per cu corpora qualisque voluptaria. Bonorum moderatius in per, ius cu albucius voluptatum. Ne ius torquatos dissentiunt. Brute illum utroque eu quo. Cu tota mediocritatem vis, aliquip cotidieque eu ius, cu lorem suscipit eleifend sit.</p>
          <footer className="blockquote-footer">John Doe</footer>
        </blockquote>
      </div>

      <div className="section-row">
        <div className="section-title">
          <h3 className="title">buttons</h3>
        </div>
        <a href="#" className="primary-button">primary</a>
        <a href="#" className="secondary-button">secondary</a>
      </div>
    </>
  );
}

export default Typography;
