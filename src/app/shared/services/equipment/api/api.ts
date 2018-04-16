export * from './equipment.service';
import { EquipmentService } from './equipment.service';
export * from './equipmentHistory.service';
import { EquipmentHistoryService } from './equipmentHistory.service';
export const APIS = [EquipmentService, EquipmentHistoryService];
