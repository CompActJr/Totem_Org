import { mkdir, rm, writeFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import { basename, join } from "node:path";
import { env } from "../../../config/env.js";
import type { UploadImageInput } from "../schemas/uploader.schema.js";
import { decodeBase64, optimizeImage } from "../../../utils/uploader.utils.js";
import type { StoredImage } from "../galeria.model.js";

export async function storeUploadedImage(input: UploadImageInput): Promise<StoredImage> {
  const image = await optimizeImage(decodeBase64(input.base64));
  const filename = `${randomUUID()}.webp`;
  const absolutePath = join(env.UPLOAD_DIRECTORY, filename);

  await mkdir(env.UPLOAD_DIRECTORY, { recursive: true });
  await writeFile(absolutePath, image);

  return {
    absolutePath,
    url: `${env.UPLOAD_PUBLIC_BASE_URL.replace(/\/+$/, "")}/${filename}`,
  };
}

export const removeStoredImage = async (absolutePath: string) => {
    await rm(absolutePath, { force: true });
}

export const getStoredImagePath = (url: string) => {
    return join(env.UPLOAD_DIRECTORY, basename(url))
};
