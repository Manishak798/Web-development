import { databasesClass } from "../database";
import { userDeleteAccountController } from "../controllers/user/v1/account.delete";
export const deleteTestUsers = async () => {
    const UsersModel = databasesClass.getDefaultDBModels().UserModel;
    const testUsers = await UsersModel.find({
        email: {
            $nin: ["tester@revos.in", "testerbolt1997@gmail.com"],
            $regex: /test/,
        },
    }).lean();
    let i = 0;
    for (const user of testUsers) {
        const resp = await userDeleteAccountController(
            //@ts-ignore
            { body: { email: user.email, permanent: true } },
            {
                status: (status) => {
                    return status;
                },
                json: (data) => {
                    return data;
                },
            }
        );
        console.log("i", i++, resp);
    }
    console.log("DONE");
    return;
};
