// import { NextResponse } from "next/server";
// import { createClient } from "@supabase/supabase-js";
// import fs from "fs";
// import path from "path";
// import formidable from "formidable";
// import { HfInference } from "@huggingface/inference";

// // Initialize Supabase Client
// const supabase = createClient(
//     process.env.NEXT_SUPABASE_URL!,
//     process.env.NEXT_SUPABASE_ANON_KEY!
// );

// // Initialize Hugging Face Client
// const hf = new HfInference(process.env.HF_API_KEY!);

// // Disable body parser to handle file uploads
// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

// // Helper function to handle formidable file parsing
// const parseForm = (req: Request): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
//     return new Promise((resolve, reject) => {
//         const form = formidable({
//             uploadDir: "./uploads",
//             keepExtensions: true,
//         });

//         form.parse(req as any, (err, fields, files) => {
//             if (err) {
//                 return reject(err);
//             }
//             resolve({ fields, files });
//         });
//     });
// };

// // Named export for POST handler
// export async function POST(req: Request) {
//     try {
//         const { fields, files } = await parseForm(req);

//         const file = files.file as unknown as formidable.File;
//         if (!file) {
//             return NextResponse.json({ error: "No File Uploaded" }, { status: 400 });
//         }

//         // Ensure uploads directory exists
//         if (!fs.existsSync("./uploads")) {
//             fs.mkdirSync("./uploads", { recursive: true });
//         }

//         const filePath = path.join("./uploads", file.newFilename);
//         const fileContent = fs.readFileSync(filePath, "utf-8");

//         // Analyze file content using Hugging Face
//         const analysis = await hf.textClassification({
//             model: "nlptown/bert-base-multilingual-uncased-sentiment",
//             inputs: fileContent,
//         });

//         const analysisResult = JSON.stringify(analysis);

//         // Upload file to Supabase
//         const supabaseUploadPath = `uploads/${file.newFilename}`;
//         const { error: uploadError } = await supabase.storage
//             .from("user-uploads")
//             .upload(supabaseUploadPath, fs.createReadStream(filePath), {
//                 contentType: file.mimetype || "application/octet-stream",
//             });

//         if (uploadError) {
//             throw new Error(`Error uploading file to Supabase: ${uploadError.message}`);
//         }

//         // Insert file metadata and analysis result into Supabase
//         const { error: dbError } = await supabase.from("user_files").insert([
//             {
//                 filename: file.originalFilename,
//                 filepath: supabaseUploadPath,
//                 analysis_result: analysisResult,
//                 uploaded_at: new Date(),
//             },
//         ]);

//         if (dbError) {
//             throw new Error(`Error inserting data into Supabase: ${dbError.message}`);
//         }

//         // Clean up local file
//         fs.unlinkSync(filePath);

//         return NextResponse.json({
//             message: "File analyzed and saved successfully",
//             analysisResult,
//         });
//     } catch (error: any) {
//         console.error("Error processing file:", error);
//         return NextResponse.json(
//             { error: error.message || "Failed to analyze and save the file" },
//             { status: 500 }
//         );
//     }
// }
