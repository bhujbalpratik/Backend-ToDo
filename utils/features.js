export const sendCookie = (res, message) => {
  return res
    .cookie("Token", "heyheyhey", {
      httpOnly: true,
      maxAge: 15 * 60 * 60 * 1000,
    })
    .status(201)
    .json({
      success: true,
      message,
    })
}
