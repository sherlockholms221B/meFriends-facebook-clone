export default {
  name: 'comment',
  title: 'comment',
  type: 'document',
  fields: [
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy',
    },
    {
      name: 'comment',
      title: 'comment',
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
};
