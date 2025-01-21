import React from "react";
import Section from "../../ui/Section";
import ReviewCard from "./ReviewCard";
import ReviewsHeader from "./ReviewsHeader";

export default function Reviews() {
  return (
    <Section className="items-start gap-5">
      <ReviewsHeader />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </Section>
  );
}
