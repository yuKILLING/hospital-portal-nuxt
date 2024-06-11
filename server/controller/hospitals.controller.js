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
      await db.query('DELETE FROM hospitals WHERE hospital_id = $1', [id]);
      res.status(200).send('Hospital deleted successfully');
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.log(error);
    }
  }

  async getHospitals(req, res) {
    try {
      const page = req.query.page || 1;
      const pageSize = 10;
      const offset = (page - 1) * pageSize;
      const hospitals = await db.query(
        "SELECT * FROM hospitals LIMIT $1 OFFSET $2",
        [pageSize, offset]
      );
      res.json(hospitals.rows);
    } catch (error) {}
  }

  async getAllHospitals(req, res) {
    try {
      const hospitals = await db.query("SELECT * FROM hospitals");
      res.json(hospitals.rows);
    } catch (error) {}
  }
}

module.exports = new HospitalController();
