export default {
  name: 'media',
  title: 'Media',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the movie or game',
      validation: (Rule) => Rule.required().error('A title is required'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('A slug is required'),
    },
    {
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      description: 'Specify if this media is a movie or a game',
      options: {
        list: [
          {title: 'Movie', value: 'movie'},
          {title: 'Game', value: 'game'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required().error('Please select a media type'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Main image or poster for the media',
      validation: (Rule) => Rule.required().error('An image is required'),
    },
    {
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description: 'Alternative text for the image',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
      description: 'Additional categories (e.g., action, adventure, comedy, etc.)',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      description: 'A description or review of the media',
    },
  ],
}
