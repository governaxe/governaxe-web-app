import * as z from "zod";

export const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  type: z.string().default("basic"),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  discussion: z
    .string()
    .min(2, {
      message: "Discussion must be at least 2 characters.",
    })
    .optional(),
  snapshot_block: z.coerce.number(),
  src_chain: z.string(),
  proposals: z.array(
    z.object({
      calls: z.object({
        args: z.string(),
        func_selector: z.string(),
        target: z.string(),
        value: z.coerce.number(),
      }),
      dst_chain: z.string(),
      // dst_contract: z.string(),
    })
  ),

  start_time: z.date(),
  start_time_2: z.string().refine(
    (value) => {
      const timePattern = /^(?:[01]\d|2[0-3]):[0-5]\d$/; // Regular expression for 24-hour time format
      return timePattern.test(value);
    },
    {
      message: "Start time must be in the format 'HH:mm' (00:00 - 23:59).",
    }
  ),

  end_time: z.date(),
  end_time_2: z.string().refine(
    (value) => {
      const timePattern = /^(?:[01]\d|2[0-3]):[0-5]\d$/; // Regular expression for 24-hour time format
      return timePattern.test(value);
    },
    {
      message: "Start time must be in the format 'HH:mm' (00:00 - 23:59).",
    }
  ),
});

export type ProposalType =
  | "single-choice"
  | "approval"
  | "quadratic"
  | "ranked-choice"
  | "weighted"
  | "basic";

export const chainList = [
  { label: "Ethereum", value: "ethereum" },
  { label: "Optimism", value: "optimism" },
  { label: "Base", value: "base" },
  { label: "Arbitrum", value: "arbitrum" },
] as const;
