export const invitationData = {
    count: 5,
    columnName: [
        {
           id: 'profile',
           label: 'profile',
           type: 'IconButton'
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
        {
            id: 'role',
            label: 'role',
            type: 'dropdown'
        },
        {
            id: 'remove',
            label: 'remove',
            type: 'button'
        }
    ], 
    rows: [
        {
            id: 1,
            email: 'abc@gmail.com',
            status: "Pending invite",
            role: 'Teacher'
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
