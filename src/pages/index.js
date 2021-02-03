import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from 'components/layout'
import HeroPersonalVideo from 'sections/hero/HeroPersonalVideo.js'
import AboutPersonal from 'sections/about/AboutPersonal.js'
import ServicesThree from 'sections/services/ServicesThree.js'
import PortfolioThree from 'sections/portfolio/PortfolioThree.js'

class Index extends React.Component {

    render() {

        const { site } = this.props.data

        return (
            <div>
                <Helmet>
                    <title>{site.meta.title}</title>
                    <meta name="description" content={site.meta.description} />
                </Helmet>
                <Layout
                    isHome={true}
                    sections={['home', 'about', 'services', 'portfolio']}
                >
                    <HeroPersonalVideo />
                    <AboutPersonal />
                    <ServicesThree />
                    <PortfolioThree />
                </Layout>
            </div>
        )
    }
}

export default Index

export const personalVideoQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`