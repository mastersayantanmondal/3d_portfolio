"use server"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!name || !email || !subject || !message) {
    throw new Error("All fields are required")
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format")
  }

  // In a real application, you would:
  // 1. Save to database
  // 2. Send email notification
  // 3. Integrate with email service (SendGrid, Mailgun, etc.)

  console.log("Contact form submission:", {
    name,
    email,
    subject,
    message,
    timestamp: new Date().toISOString(),
  })

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // For demo purposes, we'll just log the submission
  // In production, replace this with actual email sending logic

  return { success: true, message: "Message sent successfully!" }
}

export async function subscribeNewsletter(email: string) {
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format")
  }

  // In a real application, integrate with email service
  console.log("Newsletter subscription:", { email, timestamp: new Date().toISOString() })

  await new Promise((resolve) => setTimeout(resolve, 500))

  return { success: true, message: "Successfully subscribed to newsletter!" }
}
