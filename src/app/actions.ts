"use server"

export async function create(formData: FormData) {
  await fetch("http://localhost:7100", {
    method: "POST",
    body: formData
  })
} 
