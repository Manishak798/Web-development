/* Deleting an Index form Doc. */

import { client } from "./client.els";

const deleteIndex = async(): Promise<void> =>{

try {
    const IndexName: string = 'my_Index';
    const response =  await client.indices.delete({
        index: IndexName,
    })
    console.log('index deleted', response);
} catch (error) {
    console.log('error: ', error);
}
}

deleteIndex();