import { IReportRepository, IReportService, Report } from "types/ReportTypes";
import { Query } from "types/RepositoryTypes";


export class ReportService implements IReportService {
  private reportRepository: IReportRepository;
  
  // Constructor que recibe un repositorio de report y lo asigna a la propiedad reportRepository de la clase.
  constructor(reportRepository: IReportRepository) {
    this.reportRepository = reportRepository;
  };

  // Métodos de la clase reportService que implementan la lógica de negocio para manejar usuarios. Cada método utiliza el repositorio de usuarios para realizar operaciones CRUD.
  async createReport(data: Report): Promise<Report> {
    return await this.reportRepository.create(data);
  };

  async findReports(query?: Query): Promise<Report[]> {
    if (query) {
      // Si se proporciona una consulta, se utiliza para filtrar los resultados.
      return await this.reportRepository.find(query); 
    }
    return await this.reportRepository.find(); // Si no se proporciona una consulta, se devuelven todos los reportes.
  }

  async findReportById(id: string): Promise<Report | null> {
    return await this.reportRepository.findById(id);
  };

  async updateReport(id: string, report: Partial<Report>): Promise<Report | null> {
    if (!report) {
      return null; 
    }
    return await this.reportRepository.update(id, report);
  };

  async deleteReport(id: string): Promise<void> {
    return await this.reportRepository.delete(id);
  }
};