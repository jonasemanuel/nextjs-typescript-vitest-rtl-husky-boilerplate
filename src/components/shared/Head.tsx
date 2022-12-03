import NextHead from 'next/head'

type Head = {
  title: string
  description: string
  icon: string
}

export const Head = ({ title, description, icon }: Head) => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="icon" href={icon} />
  </NextHead>
)
