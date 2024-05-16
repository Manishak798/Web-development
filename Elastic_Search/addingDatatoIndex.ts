import { client } from "./client.els";

/* adding data to the index */
interface Document{
    title: string;
    content: string;
    date: string;
}

export const addData = async(): Promise <void> =>{
    try {
        const indexName: string = 'my_index';
        const document: Document ={
            title: 'hello world',
            content: 'this is a sample doc',
            date: '2024-04-16'
        };
        const response = await client.index({
            index: indexName,
            body: document,
        });
        console.log('Document added', response)
    } catch (error) {
        console.log('Error adding doc: ',error);
    }
}