export interface Produtc {
    content: Array<content>; 
   
}
export interface content{
    id?: number;
    name: string;
    value: string;
    description?: string | null;
    color: string;
    quantity: number;
    alertMin?: boolean;
}