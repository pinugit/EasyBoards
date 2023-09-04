import { BaseDirectory, readDir } from "@tauri-apps/api/fs";

export async function ListAllCanvasFolders() {
  try {
    const entries = await readDir("EasyBoards", {
      dir: BaseDirectory.Document,
      recursive: true,
    });
    if (entries) {
      const entriesList = entries.map((entry) => entry.name);
      return entriesList;
    }
  } catch {
    console.log("failed");
  }
}
