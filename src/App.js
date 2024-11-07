const App = () => {
  return (
    <div className="resume-wrapper">
  <section className="profile section-padding">
    <div className="container">
      <div className="picture-resume-wrapper">
        <div className="picture-resume">
          <span><img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" alt /></span>
          <svg version="1.1" viewBox="0 0 350 350">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation={8} result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9" result="cm" />
              </filter>
            </defs>
            <g filter="url(#goo)">  
              <circle id="main_circle" className="st0" cx="171.5" cy="175.6" r={130} />
              <circle id="circle" className="bubble0 st1" cx="171.5" cy="175.6" r="122.7" />
              <circle id="circle" className="bubble1 st1" cx="171.5" cy="175.6" r="122.7" />
              <circle id="circle" className="bubble2 st1" cx="171.5" cy="175.6" r="122.7" />
              <circle id="circle" className="bubble3 st1" cx="171.5" cy="175.6" r="122.7" />
              <circle id="circle" className="bubble4 st1" cx="171.5" cy="175.6" r="122.7" />
              <circle id="circle" className="bubble5 st1" cx="171.5" cy="175.6" r="122.7" />
              <circle id="circle" className="bubble6 st1" cx="171.5" cy="175.6" r="122.7" />
              <circle id="circle" className="bubble7 st1" cx="171.5" cy="175.6" r="122.7" />
              <circle id="circle" className="bubble8 st1" cx="171.5" cy="175.6" r="122.7" />
              <circle id="circle" className="bubble9 st1" cx="171.5" cy="175.6" r="122.7" />
              <circle id="circle" className="bubble10 st1" cx="171.5" cy="175.6" r="122.7" />
            </g>  
          </svg>
        </div>
        <div className="clearfix" />
      </div>
      <div className="name-wrapper">
        <h1>John <br />Anderson</h1>{/* YOUR NAME AND LAST NAME  */}
      </div>
      <div className="clearfix" />
      <div className="contact-info clearfix">
        <ul className="list-titles">
          <li>Call</li>
          <li>Mail</li>
          <li>Web</li>
          <li>Home</li>
        </ul>
        <ul className="list-content ">
          <li>+34 123 456 789</li> {/* YOUR PHONE NUMBER  */}
          <li>j.anderson@gmail.com</li> {/* YOUR EMAIL */}
          <li><a href="#">janderson.com</a></li> {/* YOUR WEBSITE  */}
          <li>Los Angeles, CA</li> {/* YOUR STATE AND COUNTRY  */}
        </ul>
      </div>
      <div className="contact-presentation"> {/* YOUR PRESENTATION RESUME  */}
        <p><span className="bold">Lorem</span> ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod congue nisi, nec consequat quam. In consectetur faucibus turpis eget laoreet. Sed nec imperdiet purus. </p>
      </div>
      <div className="contact-social clearfix">
        <ul className="list-titles">
          <li>Twitter</li>
          <li>Dribbble</li>
          <li>Codepen</li>
        </ul>
        <ul className="list-content"> {/* REMEMBER TO PUT THE URL ON THE HREF TAG  */}
          <li><a href>@janderson</a></li> {/* YOUR TWITTER USER  */}
          <li><a href>janderson</a></li> {/* YOUR DRIBBBLE USER  */}
          <li><a href>janderson</a></li> {/* YOUR BEHANCE USER  */}
        </ul>
      </div>
    </div>
  </section>
  <section className="experience section-padding">
    <div className="container">
      <h3 className="experience-title">Experience</h3>
      <div className="experience-wrapper">
        <div className="company-wrapper clearfix">
          <div className="experience-title">Company name</div> {/* NAME OF THE COMPANY YOUWORK WITH  */}
          <div className="time">Nov 2012 - Present</div> {/* THE TIME YOU WORK WITH THE COMPANY  */}
        </div>
        <div className="job-wrapper clearfix">
          <div className="experience-title">Front End Developer </div> {/* JOB TITLE  */}
          <div className="company-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>  {/* JOB DESCRIPTION  */}
          </div>
        </div>
        <div className="company-wrapper clearfix">
          <div className="experience-title">Company name</div> {/* NAME OF THE COMPANY YOUWORK WITH  */}
          <div className="time">Nov 2010 - Present</div> {/* THE TIME YOU WORK WITH THE COMPANY  */}
        </div>
        <div className="job-wrapper clearfix">
          <div className="experience-title">Freelance, Web Designer / Web Developer</div> {/* JOB TITLE  */}
          <div className="company-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>  {/* JOB DESCRIPTION  */}
          </div>
        </div>
        <div className="company-wrapper clearfix">
          <div className="experience-title">Company name</div> {/* NAME OF THE COMPANY YOUWORK WITH  */}
          <div className="time">Nov 2009 - Nov 2010</div> {/* THE TIME YOU WORK WITH THE COMPANY  */}
        </div> 
        <div className="job-wrapper clearfix">
          <div className="experience-title">Web Designer </div> {/* JOB TITLE  */}
          <div className="company-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>   {/* JOB DESCRIPTION  */}
          </div>
        </div>
      </div>{/*Skill experience*/}
      <div className="section-wrapper clearfix">
        <h3 className="section-title">Skills</h3>  {/* YOUR SET OF SKILLS  */}
        <ul>
          <li className="skill-percentage">HTML / HTML5</li>
          <li className="skill-percentage">CSS / CSS3 / SASS / LESS</li>
          <li className="skill-percentage">Javascript</li>
          <li className="skill-percentage">Jquery</li>
          <li className="skill-percentage">Wordpress</li>
          <li className="skill-percentage">Photoshop</li>
        </ul>
      </div>
      <div className="section-wrapper clearfix">
        <h3 className="section-title">Hobbies</h3>  {/* DESCRIPTION OF YOUR HOBBIES */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p> 
      </div>
    </div>
  </section>
  <div className="clearfix" />
</div>


  );
}

export default App;
