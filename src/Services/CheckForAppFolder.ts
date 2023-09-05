import { exists, createDir, BaseDirectory } from "@tauri-apps/api/fs";

export async function checkFolderExistence() {
  const isFolderExists = await exists("EasyBoards", {
    dir: BaseDirectory.Document, // Corrected "Document" to "Documents"
  });

  if (!isFolderExists) {
    await createDir("EasyBoards", { dir: BaseDirectory.Document });
    console.log("created");
  }

  console.log(isFolderExists);
}
