import { ICreatable, IDeleatable, IReadable, IUpdatable, Query } from "./RepositoryTypes";

export interface Report {
  userId: string;
  teamId: string;
  report: string;
  score: number;
  date: Date;
};

export interface IReportRepository extends ICreatable<Report> {};
export interface IReportRepository extends IReadable<Report> {};
export interface IReportRepository extends IUpdatable<Report> {};
export interface IReportRepository extends IDeleatable<Report> {};

export interface IReportService {
  createReport(data: Report): Promise<Report>;
  findReports(query?: Query): Promise<Report[]>;
  findReportById(id: string): Promise<Report | null>;
  updateReport(id: string, report: Partial<Report>): Promise<Report | null>;
  deleteReport(id: string): Promise<void>;
};