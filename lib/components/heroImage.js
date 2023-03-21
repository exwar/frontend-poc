import { fetchGraphQL } from '../api';

const IMAGE_CONTENT_GRAPHQL_FIELDS = `
  name
  desktopImage {
    url
  }
  mobileImage {
    url
  }
`

function extractHeroImageEntries(fetchResponse) {
  return fetchResponse?.data?.imageContentModelCollection?.items
}

export async function getHeroImageForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      imageContentModelCollection(preview: ${preview ? 'true' : 'false'}, limit: 1) {
        items {
          ${IMAGE_CONTENT_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return extractHeroImageEntries(entries)
}