import fs from "fs";
import path from "path";
import matter from "gray-matter";

const topicsDirectory = path.join(process.cwd(), "notes");

export function getTopics() {
  return fs.readdirSync(topicsDirectory);
}

export function getTopicIds(): { params: {} }[] {
  const topics = getTopics();

  return topics.map((topic) => {
    return {
      params: {
        topic,
      },
    };
  });
}

export function getSortedNotesData(topic: string) {
  const notesDirectory = path.join(topicsDirectory, topic);
  const fileNames = fs.readdirSync(notesDirectory);

  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(notesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });
}

export function getNoteIds(): { params: { topic: string; notes: string } }[] {
  const topics = getTopics();

  let Ids: { params: { topic: string; notes: string } }[] = [];

  topics.map((topic) => {
    const notesDirectory = path.join(topicsDirectory, topic);
    const fileNames = fs.readdirSync(notesDirectory);

    const params = fileNames.map((fileName) => {
      return {
        params: {
          topic,
          notes: fileName.replace(/\.mdx$/, ""),
        },
      };
    });

    Ids = Ids.concat(params);
  });

  return Ids;
}

export function getNotesData(topic: string, notes: string) {
  const fullpath = path.join(topicsDirectory, topic, `${notes}.mdx`);
  const source = fs.readFileSync(fullpath, 'utf8')

  return source
}
