// TODO: wire this up to the HubSpot Forms API (portal ID + form GUID) once available.
// For now this is a placeholder that simulates a successful submission.
export async function submitLead(email) {
  console.log('submitLead (placeholder):', email);
  return { success: true };
}
