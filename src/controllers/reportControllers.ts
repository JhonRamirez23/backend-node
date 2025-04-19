import { ReportRepository } from "@repositories/reportRepository";
import { ReportService } from "@services/ReportService";
import { Request, Response } from "express";
import { IReportRepository, IReportService } from "types/ReportTypes";

// Inyección de dependencias necesarias para las rutas
const reportRepository: IReportRepository = new ReportRepository();
const reportService: IReportService = new ReportService(reportRepository);

export const findReports = async (req: Request, res: Response): Promise<any> => {
  try {
    const reports = await reportRepository.find();

    if (reports === null || reports.length === 0) {
      return res.status(404).json({ message: "No reports found" });
    }
    return res.status(200).json(reports);

  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export const findById = async (req: Request, res: Response): Promise<any> => {
  try {
    const reportId = await reportService.findReportById(req.params.id);
    if (!reportId) {
      return res.status(404).json({ message: "Report not found" });
    }
    return res.status(200).json(reportId);

  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export const createReport = async (req: Request, res: Response): Promise<any> => {
  try {
    const newReport = req.body;
    const report = await reportService.createReport(newReport);

    return res.status(201).json(report);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Error creating report", err });
  }
}

export const updateReport = async (req: Request, res: Response): Promise<any> => {
  try {
    const update = await reportService.updateReport(req.params.id, req.body);

    if (!update) {
      return res.status(404).json({ message: "Report not found" });
    }
    return res.status(200).json(update);

  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

export const deleteReport = async (req: Request, res: Response): Promise<any> => {
  try {
    const deleteReport = await reportService.deleteReport(req.params.id);

  if (deleteReport === null) {
    return res.status(404).json({ message: "Report not found" });
  }
  return res.status(200).json(deleteReport);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}