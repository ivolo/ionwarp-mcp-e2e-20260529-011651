export interface ReviewSeed {
  repo: string;
  pullRequest: number | null;
  checks: string[];
}

export function summarizeSeed(seed: ReviewSeed): string {
  const pr = seed.pullRequest ? `PR #${seed.pullRequest}` : "no PR";
  return `${seed.repo} has ${seed.checks.length} checks for ${pr}`;
}
