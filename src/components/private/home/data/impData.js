export const updateImpUpdates = {
  count: 5,
  columnName: [
    { 
      id: "update",
      label: "Updates",
      type: "url", 
      sorting: false, 
    },
    { 
      id: "date",
      label: "Id",
      type: "timeStamp",
      sorting: true,
    },
    {
      id: "delete",
      label: "",
      type: "IconButton",
      sorting: false,
    }, 
    {
      id: "markReadUnread",
      label: "",
      type: "IconButton",
      sorting: false,
    },
  ],
  rows: [
    {
      id: 1,
      update: "English 2 - Question Paper",
      date: "07 Jun",
      delete: 1,
      markReadUnread: 1
    },
    {
      id: 2,
      update: "New teacher registered",
      date: "07 Jun",
      delete: 1,
      markReadUnread: 1
    },
    {
      id: 3,
      update: "English 2 - Question Paper",
      date: "07 Jun",
      delete: 2,
      markReadUnread: 2
    },
    {
      id: 4,
      update: "New teacher registered",
      date: "07 Jun",
      delete: 3,
      markReadUnread: 3
    },
    {
      id: 5,
      update: "English 2 - Question Paper",
      date: "07 Jun",
      delete: 4,
      markReadUnread: 4
    },
    {
      id: 6,
      update: "New teacher registered",
      date: "06 Jun",
      delete: 5,
      markReadUnread: 5
    }
  ]
}
