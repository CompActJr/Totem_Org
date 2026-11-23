import { relative, sep } from "node:path";
import { env } from "../config/env.js";
import { AppError } from "../config/errorHandler.js";
import sharp, { Metadata } from "sharp";

const ALLOWED_FORMATS = new Set(["jpeg", "png", "webp", "avif"]);

/** 
 * @apiNotegarante que está dentro do diretorio certo de upload
 */
export function ensureInsideUploadRoot(path: string) {
    const root = env.UPLOAD_DIRECTORY;
    const pathFromRoot = relative(root, path);

    if (pathFromRoot.startsWith(`..${sep}`) || pathFromRoot === ".." || pathFromRoot === "") {
        throw new AppError(500, "Caminho de upload inválido.", "Internal Server Error");
    }
}

/** 
 * @apiNotegarante decodificar base64 puro
 */
export function decodeBase64(base64: string) {
    return Buffer.from(base64);
}

/**
 * 
 * @param input Buffer
 * @returns um buffer de uma imagem otimizada em webp
 */
export async function optimizeImage(input: Buffer) {
    const maxInputPixels = env.UPLOAD_MAX_WIDTH * env.UPLOAD_MAX_HEIGHT * 4;
    let metadata: Metadata;

    try {
        metadata = await sharp(input, { limitInputPixels: maxInputPixels }).metadata();
    } catch {
        throw new AppError(400, "O arquivo enviado não é uma imagem válida.", "Bad Request");
    }

    validMetadata(metadata);

    try {
        return await sharp(input, { limitInputPixels: maxInputPixels })
            .rotate()
            .resize({
                width: env.UPLOAD_MAX_WIDTH,
                height: env.UPLOAD_MAX_HEIGHT,
                fit: "inside",
                withoutEnlargement: true,
            })
            .webp({ quality: env.UPLOAD_WEBP_QUALITY, effort: 4 })
            .toBuffer();
    } catch {
        throw new AppError(400, "Não foi possível processar a imagem enviada.", "Bad Request");
    }
}

const validMetadata = (metadata: Metadata)=> {
    if (!metadata.format || !ALLOWED_FORMATS.has(metadata.format)) {
        throw new AppError(400, "Formato de imagem não permitido.", "Bad Request");
    }

    if ((metadata.pages ?? 1) > 1) {
        throw new AppError(400, "Imagens animadas não são permitidas.", "Bad Request");
    }
}