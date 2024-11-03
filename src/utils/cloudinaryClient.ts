// lib/cloudinaryClient.ts
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
  secure: true,
});

// Upload Image Function using cloudinary
export async function uploadImage(
  filePath: string,
  folder: string = "default"
): Promise<string | null> {
  try {
    const result = await cloudinary.uploader.upload(filePath, { folder });
    return result.secure_url; // URL to store in the database
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return null;
  }
}
