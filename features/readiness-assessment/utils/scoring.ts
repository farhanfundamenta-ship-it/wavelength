import { scoreQuestions, readinessTiers } from "@/data/assessment/questions";
import type { AssessmentResult } from "@/types/assessment";

export function calculateResult(scoreAnswers: Record<string, number>): AssessmentResult {
  const totalPoints = scoreQuestions.reduce(
    (sum, q) => sum + (scoreAnswers[q.id] ?? 0),
    0
  );
  const maxPoints = scoreQuestions.length * 4;
  const minPoints = scoreQuestions.length * 1;
  const percent = Math.round(
    ((totalPoints - minPoints) / (maxPoints - minPoints)) * 100
  );

  const tier = [...readinessTiers].reverse().find((t) => percent >= t.minPercent) ?? readinessTiers[0];

  const gaps = scoreQuestions
    .filter((q) => (scoreAnswers[q.id] ?? 0) <= 2)
    .sort((a, b) => (scoreAnswers[a.id] ?? 0) - (scoreAnswers[b.id] ?? 0))
    .slice(0, 3)
    .map((q) => q.gapInsight);

  return {
    percent: Math.max(0, Math.min(100, percent)),
    tier: tier.name,
    summary: tier.summary,
    gaps,
    recommendations: tier.recommendations,
  };
}
