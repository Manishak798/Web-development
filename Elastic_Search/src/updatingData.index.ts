import { client } from './client.els';
/* Updating data in an Index */

interface PartialDocument{
    title?: string;
    content?: string;
    date?: string;
}

const UpdateData = async(): Promise<void> =>{
    
    try {
        const indexName: string = 'my_index';
        const documentId:string = 'doc-id';

        const partialDoc: PartialDocument ={
            title: 'Manisha'
        }
        const response = await client.update({
            index: indexName,
            id: documentId,
            body:{
                doc: partialDoc,
            }
        });
        console.log('Document Updated', response);
    } catch (error) {
     console.log('Error while updating the client: ', error);   
    }
}

UpdateData();