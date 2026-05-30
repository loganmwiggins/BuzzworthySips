import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'fthrdm44';
const dataset = process.env.SANITY_STUDIO_DATASET || 'development';

export default defineConfig({
  name: 'default',
  title: 'Buzzworthy Sips',

  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});