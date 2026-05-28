import { ApiResponse } from "../utils/api_response.js";
import asyncHandler from "../utils/async-handler.js";

// const healthCheck = (req, res) => {
//   try {
//     res
//       .status(200)
//       .json(new ApiResponse(200, { message: "server is runnung" }));
//   } catch (error) {}
// };

const healthCheck = asyncHandler(async (req, res) => {
  res.status(200).json(new ApiResponse(200, { message: "server is running" }));
});
export { healthCheck };
