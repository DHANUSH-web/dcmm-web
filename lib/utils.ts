export async function getGitHubStats(): Promise<{ stars: number; version: string; }> {
  try {
    const [ repoRes, releaseRes ] = await Promise.all([
      fetch("https://api.github.com/repos/DHANUSH-web/DeepCleanMyMac", {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github.v3+json" },
      }),
      fetch("https://api.github.com/repos/DHANUSH-web/DeepCleanMyMac/release/latest", {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github.v3+json" },
      }),
    ]);

    if (!repoRes.ok || !releaseRes.ok) return { stars: 0, version: "null" };

    const repo = await repoRes.json();
    const release = await releaseRes.json();

    return {
      stars: repo.stargazers_count as number,
      version: release.tag_name as string ?? "null",
    };
  } catch {
    return {
      stars: 0,
      version: "null",
    };
  }
}

export { cn } from "cn"
