/* Deleting Data from an Index */

import { client } from "./client.els";

const deleteData = async(): Promise<void> =>{

try {
    const indexName: string = 'my_index';
    const documentId:string = 'doc-id';

    const response = await client.delete({
        index: indexName,
        id: documentId,
    });
    console.log("Document deleted: ", response);

} catch (error) {
    
    console.log("error deleting doc: ",error);
}
}

deleteData();