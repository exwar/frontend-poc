import { fetchGraphQL } from "../api";

function extractFAQPreviewContentEntries(fetchResponse) {
  return fetchResponse?.data?.faqPreviewContentModelCollection?.items;
}

export async function getFAQPreviewContentsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      faqPreviewContentModelCollection {
        items {
          name
          heading
          body {
            json
          }
          faQsCollection {
            items {
              name
              faqTitle
              faqBody {
                json
              }
            }
          }
          ctaText
          ctaUrl
        }
      }
    }`,
    preview
  );
  return extractFAQPreviewContentEntries(entries);
}
