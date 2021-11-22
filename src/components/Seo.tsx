import { Helmet } from 'react-helmet'

type SEOProps = {
  title: string
  description?: string
  lang?: string
  meta?: ({
    name: string
    content: any  // eslint-disable-line @typescript-eslint/no-explicit-any
    property?: undefined
  } | {
    property: string
    content: any  // eslint-disable-line @typescript-eslint/no-explicit-any
    name?: undefined
  })[]
}

const SEO = ({ description, meta = [], title }: SEOProps): JSX.Element => {
  const metaDescription = description

  return (
    <Helmet
      htmlAttributes={{
        lang: `en`,
      }}
      title={title}
      meta={[
        {
          name: `google-site-verification`,
          content: `H0acSGcS1g-P3_CO7LylwKL3Q7Do7ISnl93tcr5gtDU`
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `Janelle Solviletti`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        }
      ].concat(meta)}
    />
  )
}

export default SEO
