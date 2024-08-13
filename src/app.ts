import { app as kafkaServer } from './server';
import { IAssetsTriggerNotification } from './store/interfaces/assestTriggerNotification.interface';
import { IBoltChargerNotificationV2 } from './store/interfaces/boltChargerNotificationV2.interface';
import { INotification } from './store/interfaces/notification.interface';

const startKafkaServer = async () => {
    // Example notification message
    // const notificationMessage: INotification = {
    //     user: {
    //         inAppNotificationUserId: 'user123',
    //         pushNotificationUserId: 'push123',
    //         emailIds: ['user@example.com'],
    //         phoneNumbers: ['1234567890']
    //     },
    //     message: {
    //         body: 'Hello, this is a test message',
    //         subject: 'Test Subject',
    //         priority: 1,
    //         attachments: [new Uint8Array()],
    //         html: '<p>Hello, this is a test message</p>'
    //     },
    //     appId: 'app123',
    //     smsObj: {
    //         smsType: 'transactional',
    //         templateId: 'template123'
    //     },
    //     oneSignalPayload: {
    //         alert: 'This is an alert',
    //         sos: true,
    //         vin: 'VIN1234567890'
    //     },
    //     Attachment: {
    //         filename: 'attachment.txt',
    //         filetype: 'text/plain',
    //         content: new Uint8Array()
    //     }
    // };

    // const notificationMessage: IBoltChargerNotificationV2 = {
    //     user: {
    //       inAppNotificationUserId: 'user123',
    //       pushNotificationUserId: 'push123',
    //       emailIds: ['user@example.com'],
    //       phoneNumbers: ['1234567890']
    //     },
    //     message: {
    //       body: 'Hello, this is a test message',
    //       subject: 'Test Subject',
    //     },
    //     appId: 'app123',
    //     smsObj: {
    //       smsType: 'transactional',
    //       templateId: 'template123'
    //     },
    //   };
      
    
    // await kafkaServer.init(
    //     'dev',
    //     'TRUE',
    //     'manisha',
    //     'https://karapace.dev.revos.in',
    //     'bolt_chargers_notifications_v2',
    //     'BoltChargerNotificationV2'
    // );
    // await kafkaServer.init(
    //     'dev',
    //     'TRUE',
    //     'manisha',
    //     'https://karapace.dev.revos.in',
    //     'bolt_chargers_notifications_v2',
    //     'BoltChargerNotificationV2'
    // );
    // await kafkaServer.produceMessage('BOLT_CHARGERS_NOTIFICATIONS', notificationMessage, 'BoltChargerNotificationV2');
    /*notification message for IAssetsTriggerNotification*/
    const notificationMessage: IAssetsTriggerNotification = {
        user: {
            inAppNotificationUserId: 'user123',
            pushNotificationUserId: 'push123',
            emailIds: ['user@email.com'],
            phoneNumbers: ['1234567890']
        },
        message: {
            body: 'Hello, this is a test message',
            subject: 'Test Subject',
            priority: 1
        },
        appId: 'app123',
        smsObj: {
            smsType: 'transactional',
            templateId: 'template123'
        },
        oneSignalPayload: {
            alert: 'This is an alert',
            sos: true,
            vin: 'VIN1234567890'
        }
    }
    await kafkaServer.init(
        'dev',
        'TRUE',
        'manisha',
        'https://karapace.dev.revos.in',
        'asset_trigger_notification_details',
        'AssetsTriggersNotification'
    );
    await kafkaServer.produceMessage('ASSET_TRIGGER_NOTIFICATIONS', notificationMessage, 'AssetsTriggersNotification');

};

startKafkaServer();
