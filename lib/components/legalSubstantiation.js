import { fetchGraphQL } from "../api";

function extractLegalSubstantiationContentsEntries(fetchResponse) {
  return fetchResponse?.data?.legalSubstantiationContentModelCollection?.items;
}

export async function getLegalSubstantiationContentsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      legalSubstantiationContentModelCollection {
        items {
          name
          heading
          body {
            json
          }
        }
      }
    }`,
    preview
  );
  return extractLegalSubstantiationContentsEntries(entries);
}
