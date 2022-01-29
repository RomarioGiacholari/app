function Content() {
    return (
        <div className="container is-max-desktop mt-4 p-4">
            <div className="block">
                <h1 className="title is-4">ROMARIO GIACHOLARI</h1>
                <p>Hello and welcome to the site. I am a software developer and computer science graduate from <a href="https://www.aston.ac.uk/" style={{textDecoration: 'underline'}}>aston university</a>.</p>
            </div>

            <hr />

            <div className="block">
                <h3 className="title is-6">ABOUT</h3>
                <p>
                    I primarily work on the backend, as in maintaining, integrating to and developing web services. I have been doing so with <strong>Laravel</strong>, <strong>PHP</strong> and <strong>JavaScript</strong>.
                    Moreoever, I have spent a year during my placement, developing web applications with <strong>C#</strong> and the <strong>ASP.NET</strong> framework.
                    I am familiar with <strong>Vue.js</strong> too. Other technologies I have worked with include but not limited to <strong>Git</strong>, <strong>Stripe</strong>, <strong>MYSQL</strong>, <strong>Cloudflare</strong>, <strong>Rollbar</strong>,
                    <strong>Heroku</strong>, <strong>Digital Ocean</strong>.
                    Lately, I focus on web application security (hashing, encryption/decryption) and database query optimizations. I am a proponent of <strong>TDD</strong> and the <strong>SOLID</strong> principles.
                    If you want to get in touch, send me an email <a href="/cdn-cgi/l/email-protection#294e40484a414645485b40694e44484045074a4644"  style={{textDecoration: 'underline'}}><span className="__cf_email__" data-cfemail="1f78767e7c7770737e6d765f78727e7673317c7072">[email&#160;protected]</span></a>.
                </p>
            </div>

            <hr />

            <div className="block">
                <h3 className="title is-6">EMPLOYMENT</h3>
                <ul>
                    <li><a href="https://tillo.io/" style={{textDecoration: 'underline'}}>Tillo</a> - Software Developer 2020/Present</li>
                    <li><a href="https://www.pinewood.co.uk/"  style={{textDecoration: 'underline'}}>Pinewood Technologies</a> - Placement Student 2018/2020 </li>
                    <li><a href="https://www.bootcampmedia.co.uk/"  style={{textDecoration: 'underline'}}>Bootcampmedia</a> - Web Developer 2018</li>
                    <li><a href="https://beautifulcanoe.com/"  style={{textDecoration: 'underline'}}>Beautiful Canoe</a> - Web Developer Intern 2017</li>
                </ul>
            </div>

            <hr />

            <div className="block">
                <h3 className="title is-6">PHOTOS</h3>
                <div>
                    <img src="https://assets.giacholari.com/images/gallery/me-posing.jpg" style={{width:'170px', height:'170px', borderRadius:'5px'}} />
                    <img src="https://assets.giacholari.com/images/gallery/me-traxila-greece.jpg" style={{width:'170px', height:'170px', borderRadius:'5px'}} />
                    <img src="https://assets.giacholari.com/images/gallery/reservoir-sunset.jpg" style={{width:'170px', height:'170px', borderRadius:'5px'}} />
                    <img src="https://assets.giacholari.com/images/gallery/reservoir-default.jpg" style={{width:'170px', height:'170px', borderRadius:'5px'}} />
                    <img src="https://assets.giacholari.com/images/gallery/kardamyli-greece.jpg" style={{width:'170px', height:'170px', borderRadius:'5px'}} />
                    <img src="https://assets.giacholari.com/images/gallery/kardamyli-greece-clouds.jpg" style={{width:'170px', height:'170px', borderRadius:'5px'}} />
                    <img src="https://assets.giacholari.com/images/gallery/birmingham-city-view.jpg" style={{width:'170px', height:'170px', borderRadius:'5px'}} />
                </div>
            </div>
      </div>
    );
  }
  
  export default Content;
  