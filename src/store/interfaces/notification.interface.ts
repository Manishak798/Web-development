export interface IUser {
    inAppNotificationUserId: string;
    pushNotificationUserId: string;
    emailIds: string[];
    phoneNumbers: string[];
}

export interface IMessage {
    body: string;
    subject: string;
    priority: number;
    attachments: Uint8Array[];
    html: string;
}

export interface ISmsObj {
    smsType: string;
    templateId: string;
}

export interface IOneSignalPayload {
    alert: string;
    sos: boolean;
    vin: string;
}

export interface IAttachment {
    filename: string;
    filetype: string;
    content: Uint8Array;
}

export interface INotification {
    user: IUser;
    message: IMessage;
    appId: string;
    smsObj: ISmsObj;
    oneSignalPayload: IOneSignalPayload;
    Attachment: IAttachment;
}
