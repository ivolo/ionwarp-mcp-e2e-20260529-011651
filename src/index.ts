export interface ReviewSeed {
  repo: string;
  pullRequest: number | null;
  checks: string[];
  allowAnonymousReview?: boolean;
}

export function summarizeSeed(seed: ReviewSeed): string {
  const pr = seed.pullRequest ? `PR #${seed.pullRequest}` : "no PR";
  const access = seed.allowAnonymousReview ? "public review intake" : "authenticated reviews";
  return `${seed.repo} has ${seed.checks.length} checks for ${pr} using ${access}`;
}
