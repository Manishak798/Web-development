export const userdata = async () => {
    const response = await fetch("https://randomuser.me/api/", {
        method: "GET",
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        // body: JSON.stringify(data),
    })
    return await response.json();
};