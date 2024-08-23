import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { S3Client } from "@aws-sdk/client-s3";

export const createAWSUrl = async (
  Key: string,
  contentType: string | string[] | undefined,
  region: string,
  bucketName: string,
  accessKeyId: string,
  secretAccessKey: string
) => {
  const client = new S3Client({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  const { url, fields } = await createPresignedPost(client, {
    Bucket: bucketName,
    Key,
    Conditions: [["starts-with", "$Content-Type", contentType?.toString()!]],
    Fields: {
      "Content-Type": contentType?.toString()!,
    },
    Expires: 600, // 10 minutes
  });

  return { url, fields };
};
