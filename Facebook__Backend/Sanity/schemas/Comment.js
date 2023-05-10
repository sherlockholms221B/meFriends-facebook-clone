export default {
  name: 'coment',
  title: 'Coment',
  type: 'document',
  fields: [
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy',
    },
    {
      name: 'coment',
      title: 'Coment',
      type: 'string',
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    },
  ],
}
