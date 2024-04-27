import { asyncHandler } from "../utils/asyncHandlers.js"


const registerUser=asyncHandler((req, res) => {
  res.status(200).send.json({
    status:200,
    message:"okay processed:)"
  })
})
export {registerUser}