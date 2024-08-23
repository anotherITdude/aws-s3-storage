"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAWSUrl = void 0;
const s3_presigned_post_1 = require("@aws-sdk/s3-presigned-post");
const client_s3_1 = require("@aws-sdk/client-s3");
const createAWSUrl = async (Key, contentType, region, bucketName, accessKeyId, secretAccessKey) => {
    const client = new client_s3_1.S3Client({
        region,
        credentials: {
            accessKeyId,
            secretAccessKey,
        },
    });
    const { url, fields } = await (0, s3_presigned_post_1.createPresignedPost)(client, {
        Bucket: bucketName,
        Key,
        Conditions: [["starts-with", "$Content-Type", contentType === null || contentType === void 0 ? void 0 : contentType.toString()]],
        Fields: {
            "Content-Type": contentType === null || contentType === void 0 ? void 0 : contentType.toString(),
        },
        Expires: 600, // 10 minutes
    });
    return { url, fields };
};
exports.createAWSUrl = createAWSUrl;
