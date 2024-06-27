const db = require("../db");
class HospitalController {
  async addHospital(req, res) {
    try {
      const {
        hospitalName,
        telNum,
        email,
        geoPos,
        leaderName,
        leaderJobTitle,
      } = req.body;
      const query =
        "INSERT INTO hospitals (hospital_name, tel_num, email, geo_pos, leader_name, leader_job_title) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
      const values = [
        hospitalName,
        telNum,
        email,
        geoPos,
        leaderName,
        leaderJobTitle,
      ];
      const newHospital = await db.query(query, values);
      res.status(201).json(newHospital.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteHospital(req, res) {
    try {
      const id = req.query.id;
      await db.query("DELETE FROM hospitals WHERE hospital_id = $1", [id]);
      res.status(200).send("Hospital deleted successfully");
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.log(error);
    }
  }

  async getHospitals(req, res) {
    try {
      const page = parseInt(req.query.page, 10) || 1;
      const pageSize = 10;
      const offset = (page - 1) * pageSize;
      const hospitalName = req.query.hospital_name || "";

      const hospitalsQuery = await db.query(
        "SELECT * FROM hospitals WHERE hospital_name ILIKE $1 LIMIT $2 OFFSET $3",
        [`%${hospitalName}%`, pageSize, offset]
      );

      const totalQuery = await db.query(
        "SELECT COUNT(*) FROM hospitals WHERE hospital_name ILIKE $1",
        [`%${hospitalName}%`]
      );

      const total = parseInt(totalQuery.rows[0].count, 10);
      res.json({
        hospitals: hospitalsQuery.rows,
        total: total,
      });
    } catch (error) {
      console.error("Error fetching hospitals:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async getAllHospitals(req, res) {
    try {
      const hospitals = await db.query("SELECT * FROM hospitals");
      res.json(hospitals.rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new HospitalController();
