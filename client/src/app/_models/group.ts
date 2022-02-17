export interface Group{
    name:string;
    connection:Connection[]
}

interface Connection{
    ConnectionId: string;
    username:string;
}