import mongoose from "mongoose";
import { Report } from "types/ReportTypes";

const ReportSchema = new mongoose.Schema<Report> ({
  userId: {
    type: String,
    required: true,
  },
  teamId: {
    type: String,
    required: true,
  },
  report: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  }  
});

export const ReportModel = mongoose.model<Report>("Report", ReportSchema);