import { client } from "./client.els";
export const createIndex = async (): Promise<void> => {
  try {
    const indexName: string = "my_index";
    const response = await client.indices.create({
      index: indexName,
      body: {
        mappings: {
          properties: {
            title: { type: "text" },
            content: { type: "text" },
            date: { type: "date" },
          },
        },
      },
    });
    console.log("Index Created", response);
  } catch (error) {
    console.log("error creating index", error);
  }
};
