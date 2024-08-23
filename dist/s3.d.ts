export declare const createAWSUrl: (Key: string, contentType: string | string[] | undefined, region: string, bucketName: string, accessKeyId: string, secretAccessKey: string) => Promise<{
    url: string;
    fields: {
        [x: string]: string;
    };
}>;
