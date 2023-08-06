export const invitationData = {
    count: 5,
    columnName: [
        {
          id: 'id',
          label: 'Id',
          type: 'static',
        },
        {
            id: "email",
            label: 'Email',
            type: 'email',

        },
        {
            id: "status",
            label: 'Status',
            type: 'static',

        },
    ], 
    rows: [
        {
            id: 1,
            email: 'abc@gmail.com',
            status: "Pending invite",
        },
        {
            id: 2, 
            email: 'xyz@gmail.com',
            status: "Pending invite",
            role: 'Teacher',
        },
        {
            id: 3, 
            email: 'abc@gmail.com',
            status: "Pending invite",
            role: 'Teacher',
        },
        {
            id: 4,
            email: 'abc@gmail.com',
            status: "Pending invite",
            role: 'Teacher',
        },
    ]
}
