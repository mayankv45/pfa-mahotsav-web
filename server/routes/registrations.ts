import { Router, Request, Response } from "express";
import fs from "fs";
import path from "path";

const router = Router();

const REGISTRATIONS_FILE = path.join(process.cwd(), "registrations.json");

// Ensure registrations file exists
function ensureRegistrationsFile() {
  if (!fs.existsSync(REGISTRATIONS_FILE)) {
    fs.writeFileSync(REGISTRATIONS_FILE, JSON.stringify([]));
  }
}

// Get all registrations (admin only)
router.get("/", (req: Request, res: Response) => {
  const adminToken = req.headers.authorization;
  
  if (adminToken !== `Bearer ${process.env.ADMIN_TOKEN || "admin123"}`) {
    return res.status(403).json({ error: "Unauthorized" });
  }

  ensureRegistrationsFile();
  const registrations = JSON.parse(
    fs.readFileSync(REGISTRATIONS_FILE, "utf-8")
  );
  res.json(registrations);
});

// Get registrations for a specific event
router.get("/event/:eventId", (req: Request, res: Response) => {
  const adminToken = req.headers.authorization;
  
  if (adminToken !== `Bearer ${process.env.ADMIN_TOKEN || "admin123"}`) {
    return res.status(403).json({ error: "Unauthorized" });
  }

  ensureRegistrationsFile();
  const registrations = JSON.parse(
    fs.readFileSync(REGISTRATIONS_FILE, "utf-8")
  );
  
  const eventRegistrations = registrations.filter(
    (reg: any) => reg.eventId === req.params.eventId
  );
  res.json(eventRegistrations);
});

// Create a new registration
router.post("/", (req: Request, res: Response) => {
  const { eventId, eventName, eventType, participantName, participantPhone, members } = req.body;

  if (!eventId || !eventName || !participantName || !participantPhone) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (eventType === "group" && (!members || members.length === 0)) {
    return res.status(400).json({ error: "Group events require member details" });
  }

  ensureRegistrationsFile();
  const registrations = JSON.parse(
    fs.readFileSync(REGISTRATIONS_FILE, "utf-8")
  );

  const newRegistration = {
    id: Date.now().toString(),
    eventId,
    eventName,
    eventType,
    participantName,
    participantPhone,
    members: eventType === "group" ? members : undefined,
    registeredAt: new Date().toISOString(),
  };

  registrations.push(newRegistration);
  fs.writeFileSync(REGISTRATIONS_FILE, JSON.stringify(registrations, null, 2));

  res.status(201).json({
    success: true,
    message: "Registration successful",
    registration: newRegistration,
  });
});

// Delete a registration (admin only)
router.delete("/:id", (req: Request, res: Response) => {
  const adminToken = req.headers.authorization;
  
  if (adminToken !== `Bearer ${process.env.ADMIN_TOKEN || "admin123"}`) {
    return res.status(403).json({ error: "Unauthorized" });
  }

  ensureRegistrationsFile();
  const registrations = JSON.parse(
    fs.readFileSync(REGISTRATIONS_FILE, "utf-8")
  );

  const filteredRegistrations = registrations.filter(
    (reg: any) => reg.id !== req.params.id
  );

  if (filteredRegistrations.length === registrations.length) {
    return res.status(404).json({ error: "Registration not found" });
  }

  fs.writeFileSync(
    REGISTRATIONS_FILE,
    JSON.stringify(filteredRegistrations, null, 2)
  );

  res.json({ success: true, message: "Registration deleted" });
});

export default router;
