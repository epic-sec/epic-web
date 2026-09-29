// Transcribed from benchmarks/sealevel/RESULTS.md in epic-sec/epic, measured
// against EPIC commit 59a6950272e07c2ba2efb48e7084b0e364f4f138 against
// coral-xyz/sealevel-attacks pinned at 24555d044802db4022112a94d6d70e74291a4b6d.
// Full detail: https://github.com/epic-sec/epic/blob/main/benchmarks/sealevel/RESULTS.md

export type Verdict = "true-positive" | "false-negative" | "not-covered";

export interface ScorecardRow {
  n: number;
  class: string;
  rule: string | null;
  verdict: Verdict;
  note?: string;
}

export const SCORECARD: ScorecardRow[] = [
  { n: 0, class: "signer-authorization", rule: "EPIC-SEC-002", verdict: "false-negative" },
  { n: 1, class: "account-data-matching", rule: null, verdict: "not-covered" },
  { n: 2, class: "owner-checks", rule: "EPIC-SEC-001", verdict: "false-negative" },
  { n: 3, class: "type-cosplay", rule: null, verdict: "not-covered" },
  { n: 4, class: "initialization", rule: null, verdict: "not-covered" },
  { n: 5, class: "arbitrary-cpi", rule: "EPIC-SEC-005", verdict: "true-positive" },
  { n: 6, class: "duplicate-mutable-accounts", rule: null, verdict: "not-covered" },
  {
    n: 7,
    class: "bump-seed-canonicalization",
    rule: "EPIC-SEC-PDA",
    verdict: "true-positive",
    note: "secure variant still produces a WARNING finding — not a fully clean pass",
  },
  { n: 8, class: "pda-sharing", rule: null, verdict: "not-covered" },
  { n: 9, class: "closing-accounts", rule: null, verdict: "not-covered" },
  { n: 10, class: "sysvar-address-checking", rule: null, verdict: "not-covered" },
];

export const SCORECARD_SUMMARY = {
  truePositive: 2,
  falseNegative: 2,
  notCovered: 7,
  falsePositive: 0,
  flaggedWarning: 1,
};
