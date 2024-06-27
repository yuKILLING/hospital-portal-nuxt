const db = require("../db");
class DeviceController {
  async addDevice(req, res) {
    try {
      const { deviceName, deviceDescription, hospitalId, deviceLink } =
        req.body;
      const query =
        "INSERT INTO devices (device_name, hospital_id, device_desk, device_link) VALUES ($1, $2, $3, $4) RETURNING *";
      const values = [deviceName, hospitalId, deviceDescription, deviceLink];
      const newDevice = await db.query(query, values);
      res.status(201).json(newDevice.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async deleteDevice(req, res) {
    try {
      const deviceId = req.query.id;
      await db.query("DELETE FROM devices WHERE device_id = $1", [deviceId]);
      res.status(200).send("Device deleted successfully");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getDevices(req, res) {
    try {
      const page = req.query.page || 1;
      const pageSize = 10;
      const offset = (page - 1) * pageSize;
      const hospitals = await db.query(
        "SELECT * FROM devices LIMIT $1 OFFSET $2",
        [pageSize, offset]
      );
      res.status(200).json(hospitals.rows);
    } catch (error) {
      console.log(error);
    }
  }

  async getAllDeviceByHospitalId(req, res) {
    try {
      const hospitalId = req.query.id;
      let devices;
      devices = await db.query("SELECT * FROM devices WHERE hospital_id = $1", [
        hospitalId,
      ]);
      res.status(200).json(devices.rows);
    } catch (error) {
      console.log(error);
    }
  }

  async getDeviceByHospitalId(req, res) {
    try {
      const hospitalId = req.query.id;
      const page = parseInt(req.query.page) || 1;
      const pageSize = 10;
      const offset = (page - 1) * pageSize;
      const deviceName = req.query.device_name
        ? `%${req.query.device_name}%`
        : null;

      // Build the base query with an optional device_name filter
      const devicesQueryBase = `
        SELECT * FROM devices
        WHERE hospital_id = $1
        ${deviceName ? "AND device_name ILIKE $4" : ""}
        LIMIT $2 OFFSET $3
      `;

      const countQueryBase = `
        SELECT COUNT(*) FROM devices
        WHERE hospital_id = $1
        ${deviceName ? "AND device_name ILIKE $2" : ""}
      `;

      // Execute the queries with the appropriate parameters
      const [devicesResult, countResult] = await Promise.all([
        db.query(
          devicesQueryBase,
          deviceName
            ? [hospitalId, pageSize, offset, deviceName]
            : [hospitalId, pageSize, offset]
        ),
        db.query(
          countQueryBase,
          deviceName ? [hospitalId, deviceName] : [hospitalId]
        ),
      ]);

      const total = parseInt(countResult.rows[0].count);
      const devices = devicesResult.rows;

      res.json({
        devices,
        total,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Что-то пошло не так..." });
    }
  }

  async getDeviceLink(req, res) {
    try {
      const deviceId = req.query.id;
      const query = "SELECT device_link FROM devices WHERE device_id = $1";
      const values = [deviceId];
      const result = await db.query(query, values);
      if (result.rows.length === 0) {
        return res.status(404).json({ error: "No device found with this ID" });
      }
      const deviceLink = result.rows[0].device_link;
      res.status(200).json({ deviceLink });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = new DeviceController();
