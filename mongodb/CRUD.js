//CRUD Operations in MOngoDB

Users > db.details.insertOne({ username: 'manisha', userpasswrd: 'helo123', status: 'logged in' });
{
    acknowledged: true,
        insertedId: ObjectId('6604d20023b505c65d1b1bc1')
}
Users > db.details.insertOne({ username: 'mana', userpasswrd: 'hlo123', status: 'logged in' });
{
    acknowledged: true,
        insertedId: ObjectId('6604d2cb23b505c65d1b1bc2')
}
Users > db.details.insertOne({ username: 'mania', userpasswrd: 'helo23', status: 'logged in' });
{
    acknowledged: true,
        insertedId: ObjectId('6604d2e523b505c65d1b1bc3')
}
Users > db.details.insertMany([{ username: 'manpa', userpasswrd: 'he23', status: 'logged in' }, { username: 'pgmania', userpasswrd: 'hep23', status: 'logged out' }, { username: 'manooia', userpasswrd: 'helo23', status: 'logged out' }]);
{
    acknowledged: true,
        insertedIds: {
        '0': ObjectId('6604d39223b505c65d1b1bc4'),
            '1': ObjectId('6604d39223b505c65d1b1bc5'),
                '2': ObjectId('6604d39223b505c65d1b1bc6')
    }
}
Users > db.details.find({});
[
    {
        _id: ObjectId('6604d20023b505c65d1b1bc1'),
        username: 'manisha',
        userpasswrd: 'helo123',
        status: 'logged in'
    },
    {
        _id: ObjectId('6604d2cb23b505c65d1b1bc2'),
        username: 'mana',
        userpasswrd: 'hlo123',
        status: 'logged in'
    },
    {
        _id: ObjectId('6604d2e523b505c65d1b1bc3'),
        username: 'mania',
        userpasswrd: 'helo23',
        status: 'logged in'
    },
    {
        _id: ObjectId('6604d39223b505c65d1b1bc4'),
        username: 'manpa',
        userpasswrd: 'he23',
        status: 'logged in'
    },
    {
        _id: ObjectId('6604d39223b505c65d1b1bc5'),
        username: 'pgmania',
        userpasswrd: 'hep23',
        status: 'logged out'
    },
    {
        _id: ObjectId('6604d39223b505c65d1b1bc6'),
        username: 'manooia',
        userpasswrd: 'helo23',
        status: 'logged out'
    }
]
Users > db.details.find({ status: 'logged out' });
[
    {
        _id: ObjectId('6604d39223b505c65d1b1bc5'),
        username: 'pgmania',
        userpasswrd: 'hep23',
        status: 'logged out'
    },
    {
        _id: ObjectId('6604d39223b505c65d1b1bc6'),
        username: 'manooia',
        userpasswrd: 'helo23',
        status: 'logged out'
    }
]
Users > db.details.find({ status: { $in: ["logged in"] } });
[
    {
        _id: ObjectId('6604d20023b505c65d1b1bc1'),
        username: 'manisha',
        userpasswrd: 'helo123',
        status: 'logged in'
    },
    {
        _id: ObjectId('6604d2cb23b505c65d1b1bc2'),
        username: 'mana',
        userpasswrd: 'hlo123',
        status: 'logged in'
    },
    {
        _id: ObjectId('6604d2e523b505c65d1b1bc3'),
        username: 'mania',
        userpasswrd: 'helo23',
        status: 'logged in'
    },
    {
        _id: ObjectId('6604d39223b505c65d1b1bc4'),
        username: 'manpa',
        userpasswrd: 'he23',
        status: 'logged in'
    }
]
Users > db.details.updateOne({ username: 'manisha' }{ $set: { userpasswrd: 'man@123' }, $currentDate: { lastModified: true } });
Uncaught:
SyntaxError: Unexpected token, expected ","(1: 41)

    > 1 | db.details.updateOne({ username: 'manisha' }{ $set: { userpasswrd: 'man@123' }, $currentDate: { lastModified: true } });
    |                                          ^
    2 |

    Users > db.details.updateOne({ username: 'manisha' }, { $set: { userpasswrd: 'man@123' }, $currentDate: { lastModified: true } });
{
    acknowledged: true,
        insertedId: null,
            matchedCount: 1,
                modifiedCount: 1,
                    upsertedCount: 0
}
Users > db.details.deleteOne({ userpasswrd: "hep23" });
{ acknowledged: true, deletedCount: 1 }
Users > db.details.find();
[
    {
        _id: ObjectId('6604d20023b505c65d1b1bc1'),
        username: 'manisha',
        userpasswrd: 'man@123',
        status: 'logged in',
        lastModified: ISODate('2024-03-28T02:39:46.826Z')
    },
    {
        _id: ObjectId('6604d2cb23b505c65d1b1bc2'),
        username: 'mana',
        userpasswrd: 'hlo123',
        status: 'logged in'
    },
    {
        _id: ObjectId('6604d2e523b505c65d1b1bc3'),
        username: 'mania',
        userpasswrd: 'helo23',
        status: 'logged in'
    },
    {
        _id: ObjectId('6604d39223b505c65d1b1bc4'),
        username: 'manpa',
        userpasswrd: 'he23',
        status: 'logged in'
    },
    {
        _id: ObjectId('6604d39223b505c65d1b1bc6'),
        username: 'manooia',
        userpasswrd: 'helo23',
        status: 'logged out'
    }
]
Users > db.details.find().limit(2);
[
    {
        _id: ObjectId('6604d20023b505c65d1b1bc1'),
        username: 'manisha',
        userpasswrd: 'man@123',
        status: 'logged in',
        lastModified: ISODate('2024-03-28T02:39:46.826Z')
    },
    {
        _id: ObjectId('6604d2cb23b505c65d1b1bc2'),
        username: 'mana',
        userpasswrd: 'hlo123',
        status: 'logged in'
    }
]
Users > db.details.find().skip(2);
[
    {
        _id: ObjectId('6604d2e523b505c65d1b1bc3'),
        username: 'mania',
        userpasswrd: 'helo23',
        status: 'logged in'
    },
    {
        _id: ObjectId('6604d39223b505c65d1b1bc4'),
        username: 'manpa',
        userpasswrd: 'he23',
        status: 'logged in'
    },
    {
        _id: ObjectId('6604d39223b505c65d1b1bc6'),
        username: 'manooia',
        userpasswrd: 'helo23',
        status: 'logged out'
    }
]