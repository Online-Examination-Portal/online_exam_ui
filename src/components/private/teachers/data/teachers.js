export const data = {
    count: 5,
    columnNames: [ 
        {
            id: "id", 
            label: "Id",
            type: "static",
            sorting: false,
          },
          { 
            id: "name",
            label: "Name",
            type: "static",
            sorting: true,
          },
          {
            id: "course",
            label: "Course",
            type: "static",
            sorting: false,
          },
          {
            id: "totalbatch",
            label: "Total Batch",
            type: "static",
            sorting: true,
          },
          {
            id: "view_details",
            label: "View Details",
            type: "iconButton",
            sorting: false,
          },
    ],
    rows: [
      {
        id: "T0001",
        name: "John Doe",
        course: "English",
        totalbatch:"02",
        view_details:"T0001"
      },
      {
        id: "T0002",
        name: "John Doe",
        course: "Hindi",
        totalbatch:"02",
        view_details:"T0002"
      },
      {
        id: "T0003",
        name: "John Doe",
        course: "Maths",
        totalbatch:"02",
        view_details:"T0003"
      },
      {
        id: "T0004",
        name: "John Doe",
        course: "Science",
        totalbatch:"02",
        view_details:""
      },
      {
        id: "T0005",
        name: "John Doe",
        course: "Social Science",
        totalbatch:"02",
        view_details:"T0005"
      }
    ]
}