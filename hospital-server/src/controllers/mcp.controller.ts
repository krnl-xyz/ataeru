import { Request, Response, NextFunction } from "express";
import { authenticate } from "../middlewares/auth.middleware";
import { createRequest, getMyRequests, getRequestById, updateRequest, deleteRequest, getRequestsByType, getRequestsByStatus } from "./request.controller";
import { createBooking, getMyBookings, getBookingById, updateBooking, cancelBooking, deleteBooking, getHospitalBookings } from "./booking.controller";
import { getAllHospitals, getHospitalById, searchHospitals, getMyHospital, registerHospital, updateHospital, getHospitalStatistics } from "./hospital.controller";
import { addPreference, getMyPreferences, updatePreference, removePreference } from "./user-preference.controller";
import { addTreatmentPreference, getTreatmentPreferences, updateTreatmentPreference, removeTreatmentPreference } from "./treatment-preference.controller";

// MCP Tool definitions
export const MCP_TOOLS = {
  // Request tools
  create_request: {
    name: "create_request",
    description: "Create a new request (donor request, consultation, help request, or treatment request). Users can create requests without specifying a hospital initially.",
    inputSchema: {
      type: "object",
      properties: {
        requestType: {
          type: "string",
          enum: ["DONOR_REQUEST", "CONSULTATION", "HELP_REQUEST", "TREATMENT_REQUEST"],
          description: "Type of request"
        },
        title: {
          type: "string",
          description: "Title of the request"
        },
        description: {
          type: "string",
          description: "Detailed description of the request"
        },
        hospitalId: {
          type: "string",
          description: "Optional: Hospital ID to link the request to"
        },
        priority: {
          type: "string",
          enum: ["LOW", "NORMAL", "HIGH", "URGENT"],
          description: "Priority level of the request"
        },
        requestedDate: {
          type: "string",
          format: "date-time",
          description: "Optional: When the request should be fulfilled"
        },
        bookingId: {
          type: "string",
          description: "Optional: Booking ID to link the request to"
        },
        treatmentId: {
          type: "string",
          description: "Optional: Treatment ID"
        }
      },
      required: ["requestType", "title"]
    }
  },
  get_my_requests: {
    name: "get_my_requests",
    description: "Get all requests made by the authenticated user. Can filter by requestType and status.",
    inputSchema: {
      type: "object",
      properties: {
        requestType: {
          type: "string",
          enum: ["DONOR_REQUEST", "CONSULTATION", "HELP_REQUEST", "TREATMENT_REQUEST"],
          description: "Optional: Filter by request type"
        },
        status: {
          type: "string",
          enum: ["PENDING", "APPROVED", "REJECTED", "IN_PROGRESS", "COMPLETED", "CANCELLED"],
          description: "Optional: Filter by status"
        }
      }
    }
  },
  get_request_by_id: {
    name: "get_request_by_id",
    description: "Get a specific request by its ID. User must be the requester or hospital owner.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Request ID"
        }
      },
      required: ["id"]
    }
  },
  update_request: {
    name: "update_request",
    description: "Update a request. Users can update their own requests, and link/unlink hospitals.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Request ID"
        },
        title: {
          type: "string",
          description: "New title"
        },
        description: {
          type: "string",
          description: "New description"
        },
        hospitalId: {
          type: "string",
          description: "Optional: Hospital ID to link (can be null to unlink)"
        },
        priority: {
          type: "string",
          enum: ["LOW", "NORMAL", "HIGH", "URGENT"],
          description: "Priority level"
        },
        requestedDate: {
          type: "string",
          format: "date-time",
          description: "Requested date"
        }
      },
      required: ["id"]
    }
  },
  delete_request: {
    name: "delete_request",
    description: "Delete a request. Users can delete their own requests.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Request ID"
        }
      },
      required: ["id"]
    }
  },
  get_requests_by_type: {
    name: "get_requests_by_type",
    description: "Get all requests of a specific type (donor, consultation, help, or treatment).",
    inputSchema: {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: ["DONOR_REQUEST", "CONSULTATION", "HELP_REQUEST", "TREATMENT_REQUEST"],
          description: "Request type"
        }
      },
      required: ["type"]
    }
  },
  get_requests_by_status: {
    name: "get_requests_by_status",
    description: "Get all requests with a specific status (pending, approved, rejected, in progress, completed, cancelled).",
    inputSchema: {
      type: "object",
      properties: {
        status: {
          type: "string",
          enum: ["PENDING", "APPROVED", "REJECTED", "IN_PROGRESS", "COMPLETED", "CANCELLED"],
          description: "Request status"
        }
      },
      required: ["status"]
    }
  },

  // Booking tools
  create_booking: {
    name: "create_booking",
    description: "Create a new booking/appointment with a hospital.",
    inputSchema: {
      type: "object",
      properties: {
        hospitalId: {
          type: "string",
          description: "Hospital ID"
        },
        appointmentDate: {
          type: "string",
          format: "date-time",
          description: "Appointment date and time"
        },
        duration: {
          type: "number",
          description: "Duration in minutes (default: 30)"
        },
        purpose: {
          type: "string",
          description: "Purpose of the appointment"
        },
        additionalNotes: {
          type: "string",
          description: "Additional notes"
        }
      },
      required: ["hospitalId", "appointmentDate", "purpose"]
    }
  },
  get_my_bookings: {
    name: "get_my_bookings",
    description: "Get all bookings made by the authenticated user.",
    inputSchema: {
      type: "object",
      properties: {}
    }
  },
  get_booking_by_id: {
    name: "get_booking_by_id",
    description: "Get a specific booking by its ID.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Booking ID"
        }
      },
      required: ["id"]
    }
  },
  update_booking: {
    name: "update_booking",
    description: "Update a booking. Users can update their own bookings.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Booking ID"
        },
        appointmentDate: {
          type: "string",
          format: "date-time",
          description: "New appointment date and time"
        },
        duration: {
          type: "number",
          description: "Duration in minutes"
        },
        purpose: {
          type: "string",
          description: "Purpose"
        },
        additionalNotes: {
          type: "string",
          description: "Additional notes"
        }
      },
      required: ["id"]
    }
  },
  cancel_booking: {
    name: "cancel_booking",
    description: "Cancel a booking. Users can cancel their own bookings.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Booking ID"
        }
      },
      required: ["id"]
    }
  },
  delete_booking: {
    name: "delete_booking",
    description: "Delete a booking. Users can delete their own bookings.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Booking ID"
        }
      },
      required: ["id"]
    }
  },

  // Hospital tools
  get_all_hospitals: {
    name: "get_all_hospitals",
    description: "Get all hospitals. Public endpoint, no authentication required.",
    inputSchema: {
      type: "object",
      properties: {}
    }
  },
  search_hospitals: {
    name: "search_hospitals",
    description: "Search hospitals by name, location, or specialties. Public endpoint.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Search query"
        }
      },
      required: ["query"]
    }
  },
  get_hospital_by_id: {
    name: "get_hospital_by_id",
    description: "Get a specific hospital by its ID. Public endpoint.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Hospital ID"
        }
      },
      required: ["id"]
    }
  },
  get_my_hospital: {
    name: "get_my_hospital",
    description: "Get the hospital registered by the authenticated medical facility user.",
    inputSchema: {
      type: "object",
      properties: {}
    }
  },
  register_hospital: {
    name: "register_hospital",
    description: "Register a new hospital. Only available for MEDICAL_FACILITY users.",
    inputSchema: {
      type: "object",
      properties: {
        name: {
          type: "string",
          description: "Hospital name"
        },
        location: {
          type: "string",
          description: "Hospital location"
        },
        rating: {
          type: "number",
          description: "Initial rating (0-5)"
        },
        specialties: {
          type: "array",
          items: { type: "string" },
          description: "List of specialties"
        },
        imageUrl: {
          type: "string",
          description: "Hospital image URL"
        },
        walletAddress: {
          type: "string",
          description: "Owner/admin wallet address"
        }
      },
      required: ["name", "location", "walletAddress"]
    }
  },
  update_hospital: {
    name: "update_hospital",
    description: "Update hospital information. Only the hospital owner can update.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Hospital ID"
        },
        name: {
          type: "string",
          description: "Hospital name"
        },
        location: {
          type: "string",
          description: "Location"
        },
        rating: {
          type: "number",
          description: "Rating"
        },
        specialties: {
          type: "array",
          items: { type: "string" },
          description: "Specialties"
        },
        imageUrl: {
          type: "string",
          description: "Image URL"
        }
      },
      required: ["id"]
    }
  },
  get_hospital_statistics: {
    name: "get_hospital_statistics",
    description: "Get statistics for a hospital (total requests, donors, customers, treatments).",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Hospital ID"
        }
      },
      required: ["id"]
    }
  },

  // User preference tools
  add_preference: {
    name: "add_preference",
    description: "Add a hospital preference for the authenticated user.",
    inputSchema: {
      type: "object",
      properties: {
        hospitalId: {
          type: "string",
          description: "Hospital ID"
        },
        preferenceType: {
          type: "string",
          enum: ["FULL_TIME", "PREFERRED", "OCCASIONAL"],
          description: "Preference type"
        },
        notes: {
          type: "string",
          description: "Notes about the preference"
        }
      },
      required: ["hospitalId"]
    }
  },
  get_my_preferences: {
    name: "get_my_preferences",
    description: "Get all hospital preferences for the authenticated user.",
    inputSchema: {
      type: "object",
      properties: {}
    }
  },
  update_preference: {
    name: "update_preference",
    description: "Update a hospital preference.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Preference ID"
        },
        preferenceType: {
          type: "string",
          enum: ["FULL_TIME", "PREFERRED", "OCCASIONAL"],
          description: "Preference type"
        },
        notes: {
          type: "string",
          description: "Notes"
        }
      },
      required: ["id"]
    }
  },
  remove_preference: {
    name: "remove_preference",
    description: "Remove a hospital preference.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Preference ID"
        }
      },
      required: ["id"]
    }
  },

  // Treatment preference tools
  add_treatment_preference: {
    name: "add_treatment_preference",
    description: "Add a treatment preference for a hospital.",
    inputSchema: {
      type: "object",
      properties: {
        treatmentId: {
          type: "string",
          description: "Treatment ID"
        },
        treatmentName: {
          type: "string",
          description: "Treatment name"
        },
        hospitalId: {
          type: "string",
          description: "Hospital ID"
        },
        preferenceType: {
          type: "string",
          enum: ["FULL_TIME", "PREFERRED", "OCCASIONAL"],
          description: "Preference type"
        },
        notes: {
          type: "string",
          description: "Notes"
        }
      },
      required: ["treatmentId", "treatmentName", "hospitalId"]
    }
  },
  get_treatment_preferences: {
    name: "get_treatment_preferences",
    description: "Get all hospital preferences for a specific treatment.",
    inputSchema: {
      type: "object",
      properties: {
        treatmentId: {
          type: "string",
          description: "Treatment ID"
        }
      },
      required: ["treatmentId"]
    }
  },
  update_treatment_preference: {
    name: "update_treatment_preference",
    description: "Update a treatment preference.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Preference ID"
        },
        preferenceType: {
          type: "string",
          enum: ["FULL_TIME", "PREFERRED", "OCCASIONAL"],
          description: "Preference type"
        },
        notes: {
          type: "string",
          description: "Notes"
        },
        treatmentName: {
          type: "string",
          description: "Treatment name"
        }
      },
      required: ["id"]
    }
  },
  remove_treatment_preference: {
    name: "remove_treatment_preference",
    description: "Remove a treatment preference.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Preference ID"
        }
      },
      required: ["id"]
    }
  }
};

// Execute MCP tool call
async function executeToolCall(toolName: string, args: any, req: Request): Promise<any> {
  // Create a mock response object to capture the JSON response
  let responseData: any = null;
  let statusCode = 200;
  let errorMessage: string | null = null;

  const mockRes: Partial<Response> = {
    status: (code: number) => {
      statusCode = code;
      return mockRes as Response;
    },
    json: (data: any) => {
      responseData = data;
      return mockRes as Response;
    },
    send: (data: any) => {
      responseData = data;
      return mockRes as Response;
    }
  };

  const mockNext = (error?: any) => {
    if (error) {
      errorMessage = error.message || String(error);
    }
  };

  try {
    // Execute the appropriate controller function
    switch (toolName) {
      // Request tools
      case "create_request":
        req.body = args;
        await createRequest(req as Request, mockRes as Response, mockNext);
        break;
      case "get_my_requests":
        req.query = args;
        await getMyRequests(req as Request, mockRes as Response, mockNext);
        break;
      case "get_request_by_id":
        req.params = { id: args.id };
        await getRequestById(req as Request, mockRes as Response, mockNext);
        break;
      case "update_request":
        req.params = { id: args.id };
        req.body = { ...args };
        delete req.body.id;
        await updateRequest(req as Request, mockRes as Response, mockNext);
        break;
      case "delete_request":
        req.params = { id: args.id };
        await deleteRequest(req as Request, mockRes as Response, mockNext);
        break;
      case "get_requests_by_type":
        req.params = { type: args.type };
        await getRequestsByType(req as Request, mockRes as Response, mockNext);
        break;
      case "get_requests_by_status":
        req.params = { status: args.status };
        await getRequestsByStatus(req as Request, mockRes as Response, mockNext);
        break;

      // Booking tools
      case "create_booking":
        req.body = args;
        await createBooking(req as Request, mockRes as Response, mockNext);
        break;
      case "get_my_bookings":
        await getMyBookings(req as Request, mockRes as Response, mockNext);
        break;
      case "get_booking_by_id":
        req.params = { id: args.id };
        await getBookingById(req as Request, mockRes as Response, mockNext);
        break;
      case "update_booking":
        req.params = { id: args.id };
        req.body = { ...args };
        delete req.body.id;
        await updateBooking(req as Request, mockRes as Response, mockNext);
        break;
      case "cancel_booking":
        req.params = { id: args.id };
        await cancelBooking(req as Request, mockRes as Response, mockNext);
        break;
      case "delete_booking":
        req.params = { id: args.id };
        await deleteBooking(req as Request, mockRes as Response, mockNext);
        break;

      // Hospital tools
      case "get_all_hospitals":
        await getAllHospitals(req as Request, mockRes as Response, mockNext);
        break;
      case "search_hospitals":
        req.query = { q: args.query };
        await searchHospitals(req as Request, mockRes as Response, mockNext);
        break;
      case "get_hospital_by_id":
        req.params = { id: args.id };
        await getHospitalById(req as Request, mockRes as Response, mockNext);
        break;
      case "get_my_hospital":
        await getMyHospital(req as Request, mockRes as Response, mockNext);
        break;
      case "register_hospital":
        req.body = args;
        await registerHospital(req as Request, mockRes as Response, mockNext);
        break;
      case "update_hospital":
        req.params = { id: args.id };
        req.body = { ...args };
        delete req.body.id;
        await updateHospital(req as Request, mockRes as Response, mockNext);
        break;
      case "get_hospital_statistics":
        req.params = { id: args.id };
        await getHospitalStatistics(req as Request, mockRes as Response, mockNext);
        break;

      // User preference tools
      case "add_preference":
        req.body = args;
        await addPreference(req as Request, mockRes as Response, mockNext);
        break;
      case "get_my_preferences":
        await getMyPreferences(req as Request, mockRes as Response, mockNext);
        break;
      case "update_preference":
        req.params = { id: args.id };
        req.body = { ...args };
        delete req.body.id;
        await updatePreference(req as Request, mockRes as Response, mockNext);
        break;
      case "remove_preference":
        req.params = { id: args.id };
        await removePreference(req as Request, mockRes as Response, mockNext);
        break;

      // Treatment preference tools
      case "add_treatment_preference":
        req.body = args;
        await addTreatmentPreference(req as Request, mockRes as Response, mockNext);
        break;
      case "get_treatment_preferences":
        req.params = { treatmentId: args.treatmentId };
        await getTreatmentPreferences(req as Request, mockRes as Response, mockNext);
        break;
      case "update_treatment_preference":
        req.params = { id: args.id };
        req.body = { ...args };
        delete req.body.id;
        await updateTreatmentPreference(req as Request, mockRes as Response, mockNext);
        break;
      case "remove_treatment_preference":
        req.params = { id: args.id };
        await removeTreatmentPreference(req as Request, mockRes as Response, mockNext);
        break;

      default:
        throw new Error(`Unknown tool: ${toolName}`);
    }

    if (errorMessage) {
      throw new Error(errorMessage);
    }

    return {
      success: statusCode >= 200 && statusCode < 300,
      statusCode,
      data: responseData
    };
  } catch (error: any) {
    return {
      success: false,
      statusCode: statusCode || 500,
      error: error.message || String(error),
      data: responseData
    };
  }
}

// MCP Server metadata
export const getMCPServerInfo = (req: Request) => {
  const protocol = req.protocol;
  const host = req.get('host');
  const baseUrl = `${protocol}://${host}`;

  return {
    server_label: "hospital-server",
    server_description: "A Hospital Management MCP server for managing requests, bookings, hospitals, and user preferences. Users can interact with the server via AI assistants to create donor requests, book appointments, manage hospitals, and more.",
    server_url: `${baseUrl}/api/mcp/sse`,
    require_approval: "never",
    tools: Object.values(MCP_TOOLS).map(tool => ({
      name: tool.name,
      description: tool.description,
      inputSchema: tool.inputSchema
    }))
  };
};

// MCP SSE endpoint handler
export const handleMCPSSE = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Authenticate user (most endpoints require auth)
    const authHeader = req.headers.authorization;
    if (authHeader) {
      try {
        const jwt = require('jsonwebtoken');
        const config = require('../config/config').default;
        const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : authHeader;
        const decoded = jwt.verify(token, config.jwtSecret) as { userId: string; email: string };
        req.userId = decoded.userId;
        req.userEmail = decoded.email;
      } catch (error) {
        // Authentication optional for some public endpoints
      }
    }

    // Handle POST requests with tool calls
    if (req.method === 'POST') {
      try {
        const message = req.body || {};
        
        if (message.type === 'tools/list' || !message.type) {
          // Return list of available tools
          const tools = Object.values(MCP_TOOLS).map(tool => ({
            name: tool.name,
            description: tool.description,
            inputSchema: tool.inputSchema
          }));
          
          res.status(200).json({ type: 'tools/list', tools });
          return;
        } else if (message.type === 'tools/call') {
          // Execute tool call
          const { name, arguments: args } = message;
          
          if (!MCP_TOOLS[name as keyof typeof MCP_TOOLS]) {
            res.status(400).json({ 
              type: 'error', 
              error: `Unknown tool: ${name}` 
            });
            return;
          }

          try {
            const result = await executeToolCall(name, args || {}, req);
            
            res.status(200).json({
              type: 'tools/call/result',
              tool: name,
              result
            });
            return;
          } catch (error: any) {
            res.status(500).json({
              type: 'tools/call/error',
              tool: name,
              error: error.message || String(error)
            });
            return;
          }
        } else {
          res.status(400).json({ error: 'Invalid message type' });
          return;
        }
      } catch (error: any) {
        res.status(500).json({
          type: 'error',
          error: error.message || String(error)
        });
        return;
      }
    }

    // Handle GET requests with SSE streaming
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');

    // Send initial connection message
    res.write(`data: ${JSON.stringify({
      type: 'connection',
      message: 'Connected to Hospital MCP Server'
    })}\n\n`);

    // Send tools list
    const tools = Object.values(MCP_TOOLS).map(tool => ({
      name: tool.name,
      description: tool.description,
      inputSchema: tool.inputSchema
    }));
    
    res.write(`data: ${JSON.stringify({ type: 'tools/list', tools })}\n\n`);

    // Handle client disconnect
    req.on('close', () => {
      res.end();
    });
  } catch (error) {
    next(error);
  }
};

// MCP tools list endpoint
export const getMCPTools = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const tools = Object.values(MCP_TOOLS).map(tool => ({
      name: tool.name,
      description: tool.description,
      inputSchema: tool.inputSchema
    }));

    res.status(200).json({
      tools,
      server: getMCPServerInfo(req)
    });
  } catch (error) {
    next(error);
  }
};

// MCP tool call endpoint (non-SSE alternative)
export const callMCPTool = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { tool, arguments: args } = req.body;

    if (!tool) {
      res.status(400).json({ error: "Tool name is required" });
      return;
    }

    if (!MCP_TOOLS[tool as keyof typeof MCP_TOOLS]) {
      res.status(400).json({ error: `Unknown tool: ${tool}` });
      return;
    }

    // Authenticate if not already authenticated
    const authHeader = req.headers.authorization;
    if (authHeader && !req.userId) {
      try {
        const jwt = require('jsonwebtoken');
        const config = require('../config/config').default;
        const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : authHeader;
        const decoded = jwt.verify(token, config.jwtSecret) as { userId: string; email: string };
        req.userId = decoded.userId;
        req.userEmail = decoded.email;
      } catch (error) {
        // Some tools don't require auth
      }
    }

    const result = await executeToolCall(tool, args || {}, req);

    if (result.success) {
      res.status(result.statusCode || 200).json(result.data);
    } else {
      res.status(result.statusCode || 500).json({
        error: result.error,
        data: result.data
      });
    }
  } catch (error) {
    next(error);
  }
};

