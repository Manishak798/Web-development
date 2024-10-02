const { z } = require("zod");

const TodoSchema = z.object({
  title: z.string().min(1, "Title is required").optional(), // Make optional
  description: z.string().min(1, "Description is required").optional(), // Make optional
  status: z.enum(["completed", "incomplete"]).default("incomplete"),
});

module.exports = TodoSchema;
