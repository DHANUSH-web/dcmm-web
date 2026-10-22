import { app } from "@/opabinia-config.json";

const GITHUB_HEADERS = { Accept: "application/vnd.github+json" };
const REPO = new URL(app.repo_url).pathname
  .replace(/^\/+|\/+$/g, "")
  .replace(/\.git$/, "");

type GitHubAsset = {
  name: string;
  browser_download_url: string;
};

type GitHubRelease = {
  tag_name?: string;
  assets?: GitHubAsset[];
};

export type GitHubStats = {
  stars: number;
  version: string;
  downloadUrl: string | null;
  downloadName: string | null;
};

const emptyStats: GitHubStats = {
  stars: 0,
  version: "null",
  downloadUrl: null,
  downloadName: null,
};

export async function getGitHubStats(): Promise<GitHubStats> {
  try {
    const [repoRes, releasesRes] = await Promise.all([
      fetch(`https://api.github.com/repos/${REPO}`, {
        next: { revalidate: 3600 },
        headers: GITHUB_HEADERS,
      }),
      // /releases/latest ignores prereleases; current tag is v1.0.0-beta
      fetch(`https://api.github.com/repos/${REPO}/releases?per_page=1`, {
        next: { revalidate: 3600 },
        headers: GITHUB_HEADERS,
      }),
    ]);

    if (!repoRes.ok || !releasesRes.ok) return emptyStats;

    const repo = await repoRes.json();
    const releases = (await releasesRes.json()) as GitHubRelease[];
    const release = releases[0];
    const asset = release?.assets?.find((item) => item.name.endsWith(".dmg"));

    return {
      stars: repo.stargazers_count as number,
      version: release?.tag_name ?? "null",
      downloadUrl: asset?.browser_download_url ?? null,
      downloadName: asset?.name ?? null,
    };
  } catch {
    return emptyStats;
  }
}

export { cn } from "cn"
