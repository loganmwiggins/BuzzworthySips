import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'fthrdm44';
const dataset = import.meta.env.VITE_SANITY_DATASET || (import.meta.env.PROD ? 'production' : 'development');
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2026-05-30';

export const sanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: import.meta.env.PROD,
})

const imageBuilder = createImageUrlBuilder(sanityClient);

export function getSanityImageUrl(source) {
    const hasAssetRef = Boolean(source?.asset?._ref || source?.asset?._id);

    if (!source || !hasAssetRef) {
        return null;
    }

    try {
        return imageBuilder.image(source).auto('format').fit('max').url();
    } catch {
        return null;
    }
}