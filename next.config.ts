import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't generate AGENTS.md / CLAUDE.md on `next dev` — AI tools are off
  // during the interview.
  agentRules: false,
};

export default nextConfig;
