export interface ReviewPolicy {
  requiredChecks: string[];
  allowAnonymousReview: boolean;
}

export const defaultReviewPolicy: ReviewPolicy = {
  requiredChecks: ["typecheck", "unit-tests", "security-review"],
  allowAnonymousReview: true,
};
