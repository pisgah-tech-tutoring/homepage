import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Helmet>

        <section id="mission" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>Our Mission</h2>
              </header>
              <p>
                The Pisgah Tech Tutoring mission is to provide valuable
                mentorship to 9-12th grade students in the Transylvania County,
                NC area by teaching the programming fundamentals and modern
                software development skills.
              </p>
              <p>
                We promise to uphold this to all children interested, regardless
                of background of any kind.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic01} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="who-and-why" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <ul className="major-icons">
                <li>
                  <span className="icon style1 major fa-code" />
                </li>
                <li>
                  <span className="icon style2 major fa-bolt" />
                </li>
                <li>
                  <span className="icon style3 major fa-user" />
                </li>
                <li>
                  <span className="icon style4 major fa-cog" />
                </li>
                <li>
                  <span className="icon style5 major fa-desktop" />
                </li>
                <li>
                  <span className="icon style6 major fa-users" />
                </li>
              </ul>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>Why We Are</h2>
              </header>
              <p>
                Ever worried your high-schooler isn't learning what they need to
                be learning to be competitive in the 21st century world? Have a
                child with an interest in programming, but the local area and
                schools don't have the resources to foster their curiosity?
              </p>
              <p>
                We hope to help teenagers and families that need help
                kickstarting or developing their programming career right in
                their backyard. No one, no matter where they live, should miss
                the opportunity to learn this valuable skill.
              </p>
              <header className="major">
                <h2>Who We Are</h2>
              </header>
              <p>
                <i>We</i>, when it comes to Pisgah Tech Tutoring, is really a
                one man operation by{' '}
                <a href="https://www.graysonhicks.com">Grayson Hicks</a>. An
                experienced web developer, he has a passion for technology and
                preparing the next generation of young people in his community
                to be leaders in the fast-paced 21st century.
              </p>
              <p>
                A father of five and hasbeen camp counselor, he understands the
                importance and methods of passing on new skills to youthful
                minds.
              </p>
            </div>
          </div>
        </section>

        <section id="how" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>How We Teach</h2>
              </header>
              <p>Our three tutoring programs, built to fit your needs.</p>
            </div>

            <div className="col-4">
              <span className="image fit">
                <img src={pic02} alt="" />
              </span>
              <h3>One-on-one</h3>
              <p>
                Meet within 20 minutes of Brevard, NC and study from our
                curriculum, or bring your challenge to us. Been trying to learn
                Python on your own? Want to learn Javascript from us? Set up a
                scheduled appointment and grow your skills. Think of it is 21st
                century piano lessons.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
              <h3>Small Group</h3>
              <p>
                This is our favorite way to learn programming. A bi-monthly
                social, challenging program for groups up to 6 students. Meet
                twice a month to learn what it's like to be on a modern software
                development team. Like band practice for programming teens.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Summer Camp</h3>
              <p>
                Similar to our Small Group, but meets once a week for 9-weeks.
                Limited to 6 students, we build a foundation of computer
                programming and each student finishes with a self-built website.
                Fast-paced, fun and made for the teen looking for a mentally
                productive summer.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Ready to sign up? Have questions?</h2>
            </header>
            <p>Contact us with your questions and we'll be happy to help.</p>
            <ul className="actions uniform">
              <li>
                <a href="#" className="button special">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="#" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

Homepage.propTypes = {
  route: React.PropTypes.object,
}

export default Homepage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`