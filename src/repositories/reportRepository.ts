import { ReportModel } from '@models/Reports';
import { IReportRepository, Report } from 'types/ReportTypes';
import { Query } from 'types/RepositoryTypes';

export class ReportRepository implements IReportRepository {
  async create(data: Report): Promise<Report> {
    const newReport = new ReportModel(data);
    return await newReport.save();
  };

  async find(query?: Query): Promise<Report[]> {
    return await ReportModel.find(query || {}).exec();
  }

  async findById(id: String): Promise<Report | null> {
    return await ReportModel.findById(id);
  };

  async update(id: string, report: Partial<Report>): Promise<Report | null> {
    return await ReportModel.findByIdAndUpdate(id, report, { new: true }).exec();
  };

  async delete(id: string): Promise<void> {
    await ReportModel.findByIdAndDelete(id);
  };
}
