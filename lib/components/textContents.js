import { fetchGraphQL } from '../api';

const TEXT_CONTENT_GRAPHQL_FIELDS = `
  name
  heading
  body {
    json
  }
  ctaText
  ctaUrl
  ctaVisible
  alignment
`

function extractTextContentEntries(fetchResponse) {
  return fetchResponse?.data?.textContentModelCollection?.items
}

export async function getTextContentsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      textContentModelCollection(preview: ${preview ? 'true' : 'false'}, order: date_ASC,) {
        items {
          ${TEXT_CONTENT_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return extractTextContentEntries(entries)
}