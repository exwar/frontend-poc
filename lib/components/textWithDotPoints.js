import { fetchGraphQL } from '../api';

const TEXT_WITH_DOT_POINTS_CONTENT_GRAPHQL_FIELDS = `
  name
  heading
  ctaText
  ctaUrl
  ctaVisible
  body {
    json
  }
  dotPoints {
    json
  }
`

function extractTextWithDotPointsEntries(fetchResponse) {
  return fetchResponse?.data?.textWithDotPointsCollection?.items
}

export async function getTextWithDotPointsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      textWithDotPointsCollection(preview: ${preview ? 'true' : 'false'}, limit: 1) {
        items {
          ${TEXT_WITH_DOT_POINTS_CONTENT_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return extractTextWithDotPointsEntries(entries)
}