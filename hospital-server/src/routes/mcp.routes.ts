import { Router } from "express";
import { handleMCPSSE, getMCPTools, callMCPTool, getMCPServerInfo } from "../controllers/mcp.controller";
import { optionalAuthenticate } from "../middlewares/auth.middleware";

const router = Router();

// MCP Server info endpoint (public)
router.get("/info", (req, res) => {
  res.status(200).json(getMCPServerInfo(req));
});

// MCP Tools list endpoint (public)
router.get("/tools", getMCPTools);

// MCP SSE endpoint for streaming tool calls (GET for SSE stream, POST for tool calls)
// Use optional auth as some tools are public
router.get("/sse", optionalAuthenticate, handleMCPSSE);
router.post("/sse", optionalAuthenticate, handleMCPSSE);

// MCP Tool call endpoint (non-SSE alternative)
router.post("/call", optionalAuthenticate, callMCPTool);

export default router;

